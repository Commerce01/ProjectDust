"use client";
import useChart from "@/hooks/useChart";
import React, { useEffect, useState } from "react";
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
  const { buildFive, setBuildingFiveMode, setBuildingFive } = useChart();
  // static demoUrl = "https://codesandbox.io/s/synchronized-area-chart-kpg1s";

  function calDays() {
    buildFive.filter((b) => Number(b.name.split(" ")[0]) % 3);
  }

  const [data, setData] = useState([]);
  const [mode, setMode] = useState(1); // 1.hours 2.daily 3.month 4.year

  useEffect(() => {
    fetch("http://localhost:8080/api/minute-level")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    if (mode === 2) {
      fetch("http://localhost:8080/api/daily-level")
        .then((res) => res.json())
        .then((data) => setData(data.pm25Level));
    }
  }, [mode]);

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="flex items-center justify-center ">
          <div className="px-2">
            <button
              className="px-4 py-2 text-black uppercase bg-red-400 border-white border-solid rounded-full  border-3 texl-xl -tracking-widest hover: hover:text-white"
              onClick={() => {
                setBuildingFiveMode("hours");
                // setBuildingFive("hours");
              }}
            >
              Hour
            </button>
          </div>
          <div className="px-2">
            <button
              className="px-5 py-2 text-black uppercase bg-red-500 border-white border-solid rounded-full  border-3 texl-xl -tracking-widest hover: hover:text-white"
              onClick={() => {
                setMode(2);
              }}
            >
              Days
            </button>
          </div>
          <div className="px-2">
            <button
              className="px-3 py-2 text-black uppercase bg-red-600 border-white border-solid rounded-full  border-3 texl-xl -tracking-widest hover: hover:text-white"
              onClick={() => {
                setBuildingFiveMode("month");
                setBuildingFive("month");
              }}
            >
              Month
            </button>
          </div>
          <div className="px-2"></div>
          <button
            className="px-5 py-2 text-black uppercase bg-red-700 border-white border-solid rounded-full  border-3 texl-xl -tracking-widest hover: hover:text-white"
            onClick={() => {
              setBuildingFiveMode("year");
              setBuildingFive("year");
            }}
          >
            Year
          </button>
        </div>
      </div>
      <h4>PM2.5</h4>
      {mode === 1 && (
        <ResponsiveContainer width="100%" height={200} className="text-xs">
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="minute" />
            <YAxis />
            <Tooltip />
            <Line dataKey="pm25Level" fill="#FF0000" />
          </LineChart>
        </ResponsiveContainer>
      )}
      {mode === 2 && (
        <ResponsiveContainer width="100%" height={200} className="text-xs">
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="minute" />
            <YAxis />
            <Tooltip />
            <Line dataKey="pm25Level" fill="#FF0000" />
          </LineChart>
        </ResponsiveContainer>
      )}
      <p>Co2</p>

      <ResponsiveContainer width="100%" height={200} className="text-xs">
        <LineChart
          width={500}
          height={200}
          data={buildFive}
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
    </>
  );
}
