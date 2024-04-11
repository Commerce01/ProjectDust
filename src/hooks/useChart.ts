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

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

async function handleMode(mode: "hours" | "days" | "month" | "year") {
  switch (mode) {
    case "hours":
      let hour = [];
      const res = await fetch("http://localhost:8080/api/minute-level");
      const data = await res.json();

      hour = data.map((item: any) => {
        return {
          name: item.minute,
          pm25: item.pm25Level,
          co2: item.co2Level,
        };
      });

      return hour;
    case "days":
      let day = [];
      for (let i = 0; i < 24; i++) {
        day.push({
          name: (i + 1) % 3 === 0 ? `${i + 1}:00 น` : "",
          pm25: getRandomInt(1, 300),
          co2: getRandomInt(1, 2000),
        });
      }
      return day;

    case "month":
      let month = [];
      for (let i = 0; i < 30; i++) {
        month.push({
          name: (i + 1) % 5 === 0 ? `${i + 1} วัน` : "",
          pm25: getRandomInt(1, 300),
          co2: getRandomInt(1, 2000),
        });
      }
      return month;
    case "year":
      let year = [];
      for (let i = 0; i < 12; i++) {
        year.push({
          name: `${i + 1} เดือน`,
          pm25: getRandomInt(1, 300),
          co2: getRandomInt(1, 2000),
        });
      }
      return year;
    default:
      return hour;
  }
}

// const hour = handleMode("hours");

const useChart = create<ChartStoreAction>((set, get) => ({
  buildFive: [{ name: "", pm25: 0, co2: 0 }],
  setBuildingFive: async (mode: "hours" | "days" | "month" | "year") => {
    if (mode === "hours") {
      const res = await fetch("http://localhost:8080/api/minute-level");
      const data = await res.json();
      const arrObj: Data[] = [
        {
          name: data.minute,
          pm25: data.pm25Level,
          co2: data.co2Level,
        },
      ];
      set((state) => ({ buildFive: arrObj }));
    }

    if (mode === "days") {
      let day: Data[] = [];
      for (let i = 0; i < 24; i++) {
        day.push({
          name: (i + 1) % 3 === 0 ? `${i + 1}:00 น` : "",
          pm25: getRandomInt(1, 300),
          co2: getRandomInt(1, 2000),
        });
      }
      set((state) => ({ buildFive: day }));
    }

    if (mode === "month") {
      let month: Data[] = [];
      for (let i = 0; i < 30; i++) {
        month.push({
          name: (i + 1) % 5 === 0 ? `${i + 1} วัน` : "",
          pm25: getRandomInt(1, 300),
          co2: getRandomInt(1, 2000),
        });
      }
      set((state) => ({ buildFive: month }));
    }

    if (mode === "year") {
      let year: Data[] = [];
      for (let i = 0; i < 12; i++) {
        year.push({
          name: `${i + 1} เดือน`,
          pm25: getRandomInt(1, 300),
          co2: getRandomInt(1, 2000),
        });
      }
      set((state) => ({ buildFive: year }));
    }
  },
  buildSix: [{ name: "", pm25: 0, co2: 0 }],
  setBuildingSix: async (mode: "hours" | "days" | "month" | "year") => {
    const data = await handleMode(mode);
    set((state) => ({ buildSix: data }));
  },
  buildingFiveMode: "hours",
  setBuildingFiveMode: (mode: "hours" | "days" | "month" | "year") => {
    set((state) => ({ ...state, buildingFiveMode: mode }));
  },
  buildingSixMode: "hours",
  setBuildingSixMode: (mode: "hours" | "days" | "month" | "year") => {
    set((state) => ({ ...state, buildingSixMode: mode }));
  },
}));

export default useChart;
