"use client";

import useChartTem from "@/hooks/useChartTem";
import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

// const data = [
//   {
//     name: "9:00",
//     Pm: 1000,
//     Co2: 2400,
//     amt: 2400,
//   },
//   {
//     name: "12:00",
//     Pm: 3100,
//     Co2: 1398,
//     amt: 2210,
//   },
//   {
//     name: "15:00",
//     Pm: 2000,
//     Co2: 9800,
//     amt: 2290,
//   },
//   {
//     name: "17:00",
//     Pm: 2780,
//     Co2: 3908,
//     amt: 2000,
//   },
// ];

export default function PureComponent() {
  const { buildSix, setBuildingSixMode, setBuildingSix } = useChartTem();
  // static demoUrl = "https://codesandbox.io/s/synchronized-area-chart-kpg1s";

  function calDays() {
    buildSix.filter((b) => Number(b.name.split(" ")[0]) % 3);
  }
  return (
    <div style={{ width: "100%" }}>
      <div className=" flex justify-center items-center ">
        <div className="px-2">
          <button
            className=" border-solid border-white border-3 text-black px-4 py-2 texl-xl uppercase -tracking-widest hover: bg-blue-400 hover:text-white rounded-full"
            onClick={() => {
              setBuildingSixMode("hours");
              setBuildingSix("hours");
            }}
          >
            Hour
          </button>
        </div>
        <div className="px-2">
          <button
            className=" border-solid border-white border-3 text-black px-5 py-2 texl-xl uppercase -tracking-widest hover: bg-blue-500 hover:text-white rounded-full"
            onClick={() => {
              setBuildingSixMode("days");
              setBuildingSix("days");
            }}
          >
            Days
          </button>
        </div>
        <div className="px-2">
          <button
            className=" border-solid border-white border-3 text-black px-3 py-2 texl-xl uppercase -tracking-widest hover: bg-blue-600 hover:text-white rounded-full"
            onClick={() => {
              setBuildingSixMode("month");
              setBuildingSix("month");
            }}
          >
            Month
          </button>
        </div>
        <div className="px-2">
          <button
            className=" border-solid border-white border-3 text-black px-5 py-2 texl-xl uppercase -tracking-widest hover: bg-blue-700 hover:text-white rounded-full"
            onClick={() => {
              setBuildingSixMode("year");
              setBuildingSix("year");
            }}
          >
            Year
          </button>
        </div>
      </div>
      <h4>PM2.5</h4>
      <ResponsiveContainer width="100%" height={200} className="text-xs">
        <LineChart
          width={500}
          height={200}
          data={buildSix}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="pm25" fill="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
      <p>Co2</p>

      <ResponsiveContainer width="100%" height={200} className="text-xs">
        <LineChart
          width={500}
          height={200}
          data={buildSix}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="co2" fill="#00FF00" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
