import { create } from "zustand";

type Data = {
  name: string;
  pm25: number;
  co2: number;
};

type ChartStoreAction = {
  buildFive: Data[];
  buildingFiveMode: "hours" | "days" | "month" | "year";
  setBuildingFiveMode: (mode: "hours" | "days" | "month" | "year") => void;
  setBuildingFive: (mode: "hours" | "days" | "month" | "year") => void;
  buildSix: Data[];
  buildingSixMode: "hours" | "days" | "month" | "year";
  setBuildingSixMode: (mode: "hours" | "days" | "month" | "year") => void;
  setBuildingSix: (mode: "hours" | "days" | "month" | "year") => void;
};

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

async function fetchData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return await response.json();
}

function processHourlyData(data: any[]) {
  return data.map((item) => ({
    name: item.minute,
    pm25: item.pm25Level,
    co2: item.co2Level,
  }));
}

function processDailyData(data: any) {
  const dailyData = data.pm25Level.map((item: any, index: number) => ({
    name: index * 3 + ":00",
    pm25: item,
    co2: data.co2Level[index],
  }));

  return dailyData;
}

function processMonthlyData(data: any) {
  const monthlyData = data.map((item: any) => ({
    name: new Date(item.timestamp).toLocaleDateString("th", {
      month: "short",
      day: "numeric",
    }),
    pm25: item.avgpm25Level,
    co2: item.avgco2Level,
  }));

  return monthlyData;
}

function processYearlyData(data: any) {
  const yearlyData = data.map((item: any) => ({
    name: monthsThai[item.month - 1],
    pm25: item.pm25Average,
    co2: item.co2Average,
  }));

  return yearlyData;
}

const useChart = create<ChartStoreAction>((set, get) => ({
  buildFive: [],
  buildingFiveMode: "hours",
  setBuildingFiveMode: (mode: "hours" | "days" | "month" | "year") => {
    set((state) => ({ ...state, buildingFiveMode: mode }));
  },
  setBuildingFive: async (mode) => {
    if (mode === "hours") {
      try {
        const data = await fetchData("http://localhost:8080/api/minute-level");
        const hourlyData = processHourlyData(data);
        set((state) => ({ buildFive: hourlyData }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (mode === "days") {
      try {
        const data = await fetchData("http://localhost:8080/api/daily-level");
        const dailyData = processDailyData(data);
        set((state) => ({ buildFive: dailyData }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    if (mode === "month") {
      try {
        const data = await fetchData(
          "http://localhost:8080/api/month-level?daily=true"
        );
        const monthlyData = processMonthlyData(data);
        set((state) => ({ buildFive: monthlyData }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (mode === "year") {
      try {
        const data = await fetchData("http://localhost:8080/api/month-level");
        const yearlyData = processYearlyData(data);
        set((state) => ({ buildFive: yearlyData }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  },
  buildSix: [],
  buildingSixMode: "hours",
  setBuildingSixMode: (mode: "hours" | "days" | "month" | "year") => {
    set((state) => ({ ...state, buildingSixMode: mode }));
  },
  setBuildingSix: (mode: "hours" | "days" | "month" | "year") => {
    set((state) => ({ ...state, buildingSixMode: mode }));
  },
}));

export default useChart;
