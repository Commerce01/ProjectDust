import { create } from "zustand"; // Import create function จาก zustand library
// Interface สำหรับโครงสร้างข้อมูล
type Data = {
  name: string; // ชื่อ (แกน X)
  pm25: number; // ค่าฝุ่นละออง PM2.5
  co2: number; // ค่าก๊าซคาร์บอนไดออกไซด์
};
// Interface สำหรับ Action ของ ChartStore
type ChartStoreAction = {
  buildFive: Data[]; // ข้อมูลอาคาร 5
  buildingFiveMode: "hours" | "days" | "month" | "year"; // โหมดการแสดงข้อมูล (รายชั่วโมง, รายวัน, รายเดือน, รายปี)
  setBuildingFiveOptHour: (hour: number) => void; // ฟังก์ชันสำหรับตั้งค่าชั่วโมง (สำหรับโหมดรายชั่วโมง)
  setBuildingFiveOptDate: (date: string) => void; // ฟังก์ชันสำหรับตั้งค่าวันที่ (สำหรับโหมดรายวัน)
  setBuildingFiveOptMonth: (month: number) => void; // ฟังก์ชันสำหรับตั้งค่าเดือน (สำหรับโหมดรายเดือน)
  setBuildingFiveOptYear: (year: number) => void; // ฟังก์ชันสำหรับตั้งค่าปี (สำหรับโหมดรายปี)
  setBuildingFiveMode: (mode: "hours" | "days" | "month" | "year") => void; // ฟังก์ชันสำหรับตั้งค่าโหมดการแสดงข้อมูล
  setBuildingFive: (mode: "hours" | "days" | "month" | "year") => void; // ฟังก์ชันสำหรับดึงข้อมูลและแสดงผลอาคาร 5
  buildSix: Data[]; // ข้อมูลอาคาร 6 (เหมือนกับ buildFive)
  buildingSixMode: "hours" | "days" | "month" | "year"; // (เหมือนกับ buildingFiveMode)
  setBuildingSixMode: (mode: "hours" | "days" | "month" | "year") => void; // (เหมือนกับ setBuildingFiveMode)
  setBuildingSix: (mode: "hours" | "days" | "month" | "year") => void; // (เหมือนกับ setBuildingFive)
};
// คำศัพท์เดือนภาษาไทย (มกราคม - ธันวาคม)
const monthsThai = [
  "มกราคม", // January
  "กุมภาพันธ์", // February
  "มีนาคม", // March
  "เมษายน", // April
  "พฤษภาคม", // May
  "มิถุนายน", // June
  "กรกฎาคม", // July
  "สิงหาคม", // August
  "กันยายน", // September
  "ตุลาคม", // October
  "พฤศจิกายน", // November
  "ธันวาคม", // December
];
// ฟังก์ชันสำหรับดึงข้อมูลจาก URL
async function fetchData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`); // แสดงข้อความผิดพลาดเป็นภาษาไทย
  }
  return await response.json();
}

// function processHourlyData(data: any[]) {
//   const arr = Array.from({ length: 60 }).map((_, i) => {
//     return {
//       minute: i,
//       pm25Level: undefined,
//       co2Level: undefined,
//     };
//   });
//   return data.map((item) => ({
//     name:
//       item.minute === arr[item.minute].minute
//         ? item.minute
//         : arr[item.minute].minute,
//     pm25: item ? item.pm25Level : undefined,
//     co2: item ? item.co2Level : undefined,
//   }));
// }

function processHourlyData(data: any[]) {
  // แปลงข้อมูลรายชั่วโมง โดยกำหนดชื่อแกน X เป็นลำดับที่ + 1 (1-60)
  return data.map((item, index) => ({
    name: index + 1, // ชื่อแกน X เป็นหมายเลขลำดับ (1-60)
    pm25: item ? item.pm25Level : undefined, // ค่า PM2.5 (มีข้อมูล = item.pm25Level, ไม่มีข้อมูล = undefined)
    co2: item ? item.co2Level : undefined, // ค่า CO2 (มีข้อมูล = item.co2Level, ไม่มีข้อมูล = undefined)
  }));
  return data.map((item) => ({
    name:
      item.minute === data[item.minute].minute
        ? item.minute
        : data[item.minute].minute,
    pm25: item ? item.pm25Level : undefined,
    co2: item ? item.co2Level : undefined,
  }));
}

function processMonthlyData(data: any) {
  // แปลงข้อมูลรายเดือน โดยใช้ฟังก์ชัน toLocaleDateString แสดงวันที่แบบย่อ (ภาษาไทย)
  const monthlyData = data.map((item: any) => ({
    name: new Date(item.timestamp).toLocaleDateString("th", {
      month: "short", // เดือนแบบย่อ (ม.ค. - ธ.ค.)
      day: "numeric", // วันที่ (1-31)
    }),
    pm25: item.avgpm25Level, // ค่า PM2.5 เฉลี่ย
    co2: item.avgco2Level, // ค่า CO2 เฉลี่ย
  }));

  return monthlyData;
}

function processYearlyData(data: any) {
  // แปลงข้อมูลรายปี โดยใช้ monthsThai แสดงชื่อเดือนภาษาไทย
  const yearlyData = data.map((item: any) => ({
    // ชื่อเดือนภาษาไทย (ม.ค. - ธ.ค.) จาก monthsThai
    name: monthsThai[item.month - 1],
    pm25: item.pm25Average, // ค่า PM2.5 เฉลี่ย
    co2: item.co2Average, // ค่า CO2 เฉลี่ย
  }));

  return yearlyData;
}
// Hook สำหรับจัดการข้อมูลและสถานะของกราฟ
const useChart = create<ChartStoreAction>((set, get) => ({
  // ข้อมูลอาคาร 5 (เริ่มต้นเป็น array ว่าง)
  buildFive: [],
  // โหมดการแสดงข้อมูลของอาคาร 5 (เริ่มต้นเป็นรายชั่วโมง)
  buildingFiveMode: "hours",
  // ฟังก์ชันสำหรับตั้งค่าโหมดการแสดงข้อมูล
  setBuildingFiveMode: (mode: "hours" | "days" | "month" | "year") => {
    // update state with new mode
    set((state) => ({ ...state, buildingFiveMode: mode }));
  },
  // ฟังก์ชันสำหรับดึงและแสดงข้อมูลอาคาร 5
  setBuildingFive: async (mode) => {
    if (mode === "hours") {
      // โหมดรายชั่วโมง
      try {
        // ดึงข้อมูลจาก URL (http://43.228.85.26:8080/api/minute-level)
        const data = await fetchData(
          "http://43.228.85.26:8080/api/minute-level"
        );
        // แปลงข้อมูลรายชั่วโมง (ฟังก์ชัน processHourlyData)
        const hourlyData = processHourlyData(data);
        // update state with processed data
        set((state) => ({ buildFive: hourlyData }));
      } catch (error) {
        // กรณีเกิด error
        set((state) => ({ buildFive: [] }));
        // update state with empty array
        console.error("Error fetching data:", error);
      }
    }

    if (mode === "days") {
      // โหมดรายวัน
      try {
        // ดึงข้อมูลจาก URL (http://43.228.85.26:8080/api/daily-level)
        const data = await fetchData(
          "http://43.228.85.26:8080/api/daily-level"
        );
        // update state with fetched data
        set((state) => ({ buildFive: data }));
      } catch (error) {
        // กรณีเกิด error
        set((state) => ({ buildFive: [] }));
        // update state with empty array
        console.error("Error fetching data:", error);
      }
    }

    if (mode === "month") {
      // โหมดรายเดือน
      try {
        // ดึงข้อมูลจาก URL (http://43.228.85.26:8080/api/month-level?daily=true)
        // น่าจะดึงข้อมูลรายวันประจำเดือนปัจจุบัน
        const data = await fetchData(
          "http://43.228.85.26:8080/api/month-level?daily=true"
        );
        // update state with fetched data
        set((state) => ({ buildFive: data }));
      } catch (error) {
        // update state with empty array
        set((state) => ({ buildFive: [] }));
        console.error("Error fetching data:", error);
      }
    }
    if (mode === "year") {
      // โหมดรายปี
      try {
        // ดึงข้อมูลจาก URL (http://43.228.85.26:8080/api/month-level)
        // น่าจะดึงข้อมูลค่าเฉลี่ยรายเดือนทั้งปี
        const data = await fetchData(
          "http://43.228.85.26:8080/api/month-level"
        );
        // update state with fetched data
        set((state) => ({ buildFive: data }));
      } catch (error) {
        // กรณีเกิด error
        set((state) => ({ buildFive: [] }));
        // update state with empty array
        console.error("Error fetching data:", error);
      }
    }
  },
  // ฟังก์ชันสำหรับตั้งค่าชั่วโมง (เฉพาะโหมดรายชั่วโมง)
  setBuildingFiveOptHour: async (hour) => {
    try {
      // ดึงข้อมูลจาก URL ตามชั่วโมงที่เลือก (http://43.228.85.26:8080/api/minute-level?hour=hour)
      const data = await fetchData(
        "http://43.228.85.26:8080/api/minute-level?hour=" + hour
      );
      // แปลงข้อมูลรายชั่วโมง (ฟังก์ชัน processHourlyData)
      const hourlyData = processHourlyData(data);
      // update state with processed data
      set((state) => ({ buildFive: hourlyData }));
    } catch (error) {
      // กรณีเกิด error
      set((state) => ({ buildFive: [] }));
      // update state with empty array
      console.error("Error fetching data:", error);
    }
  },
  // ฟังก์ชันสำหรับตั้งค่าวันที่ (เฉพาะโหมดรายวัน)
  setBuildingFiveOptDate: async (date) => {
    try {
      // ดึงข้อมูลจาก URL ตามวันที่เลือก (http://43.228.85.26:8080/api/daily-level?date=date)
      const data = await fetchData(
        "http://43.228.85.26:8080/api/daily-level?date=" + date
      );
      // update state with fetched data
      set((state) => ({ buildFive: data }));
    } catch (error) {
      // กรณีเกิด error
      set((state) => ({ buildFive: [] }));
      // update state with empty array
      console.error("Error fetching data:", error);
    }
  },
  // ฟังก์ชันสำหรับตั้งค่าเดือน (เฉพาะโหมดรายเดือน)
  setBuildingFiveOptMonth: async (month) => {
    try {
      // ดึงข้อมูลจาก URL ตามเดือนที่เลือก (http://43.228.85.26:8080/api/month-level?month=month)
      const data = await fetchData(
        "http://43.228.85.26:8080/api/month-level?month=" + month
      );
      // update state with fetched data
      set((state) => ({ buildFive: data }));
    } catch (error) {
      // กรณีเกิด error
      set((state) => ({ buildFive: [] }));
      // update state with empty array
      console.error("Error fetching data:", error);
    }
  },
  // ฟังก์ชันสำหรับตั้งค่าปี (เฉพาะโหมดรายปี)
  setBuildingFiveOptYear: async (year) => {
    try {
      // ดึงข้อมูลจาก URL ตามปีที่เลือก (http://43.228.85.26:8080/api/month-level?year=year)
      const data = await fetchData(
        "http://43.228.85.26:8080/api/month-level?year=" + year
      );
      // แปลงข้อมูลรายปี (ฟังก์ชัน processYearlyData)
      const monthlyData = processYearlyData(data);
      // update state with processed data
      set((state) => ({ buildFive: monthlyData }));
    } catch (error) {
      // กรณีเกิด error
      set((state) => ({ buildFive: [] }));
      // update state with empty array
      console.error("Error fetching data:", error);
    }
  },
  // ข้อมูลอาคาร 6 (เริ่มต้นเป็น array ว่าง)
  buildSix: [],
  // โหมดการแสดงข้อมูลของอาคาร 6 (เริ่มต้นเป็นรายชั่วโมง)
  buildingSixMode: "hours",
  // ฟังก์ชันสำหรับตั้งค่าโหมดการแสดงข้อมูล (อาคาร 6) - น่าจะเหมือนกับ  setBuildingFiveMode
  setBuildingSixMode: (mode: "hours" | "days" | "month" | "year") => {
    set((state) => ({ ...state, buildingSixMode: mode }));
  },
  // ฟังก์ชันสำหรับดึงและแสดงข้อมูลอาคาร 6 (เหมือนกับ setBuildingFive แต่เปลี่ยนเป็น buildSix)
  // ** น่าจะมีการดึงข้อมูลจาก URL ที่แตกต่างกัน**
  setBuildingSix: (mode: "hours" | "days" | "month" | "year") => {
    set((state) => ({ ...state, buildingSixMode: mode }));
  },
}));

export default useChart;
