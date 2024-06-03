"use client";
import useChart from "@/hooks/useChart";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { DatePicker } from "./Datepicker5";
import { ComboboxMonth5 } from "./Combomonth5";
import { ComboboxYear5 } from "./Comboyear5";
import { ComboboxHour5 } from "./Combohour5";

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
  const {
    buildFive,
    buildingFiveMode,
    setBuildingFiveMode,
    setBuildingFive,
    setBuildingFiveOptDate,
  } = useChart();
  // static demoUrl = "https://codesandbox.io/s/synchronized-area-chart-kpg1s";

  function calDays() {
    buildFive.filter((b) => Number(b.name.split(" ")[0]) % 3);
  }

  useEffect(() => {
    setBuildingFive("hours");
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <div className="flex items-center justify-center ">
          <div className="px-2">
            <button
              className={cn(
                "px-4 py-2 text-black uppercase bg-red-600 border-white border-solid rounded-full border-3 texl-xl -tracking-widest hover: hover:text-white",
                buildingFiveMode === "hours" && "bg-purple-600"
              )}
              onClick={() => {
                setBuildingFiveMode("hours");
                setBuildingFive("hours");
              }}
            >
              รายชั่วโมง
            </button>
          </div>
          <div className="px-2">
            <button
              className={cn(
                "px-5 py-2 text-black uppercase bg-red-600 border-white border-solid rounded-full border-3 texl-xl -tracking-widest hover: hover:text-white",
                buildingFiveMode === "days" && "bg-purple-600"
              )}
              onClick={() => {
                setBuildingFiveMode("days");
                setBuildingFive("days");
              }}
            >
              รายวัน
            </button>
          </div>
          <div className="px-2">
            <button
              className={cn(
                "px-3 py-2 text-black uppercase bg-red-600 border-white border-solid rounded-full border-3 texl-xl -tracking-widest hover: hover:text-white",
                buildingFiveMode === "month" && "bg-purple-600"
              )}
              onClick={() => {
                setBuildingFiveMode("month");
                setBuildingFive("month");
              }}
            >
              รายเดือน
            </button>
          </div>
          <div className="px-2"></div>
          <button
            className={cn(
              "px-5 py-2 text-black uppercase bg-red-600 border-white border-solid rounded-full border-3 texl-xl -tracking-widest hover: hover:text-white",
              buildingFiveMode === "year" && "bg-purple-600"
            )}
            onClick={() => {
              setBuildingFiveMode("year");
              setBuildingFive("year");
            }}
          >
            รายปี
          </button>
        </div>
      </div>
      {buildFive.length === 0 ? (
        <div>
          <div
            className={cn(
              "p-4 my-2 border rounded space-y-2 text-xs"
              // buildingFiveMode === "hours" && "hidden"
            )}
          >
            <div>ตัวเลือกเพิ่มเติม</div>
            {buildingFiveMode === "hours" && <ComboboxHour5 />}
            {buildingFiveMode === "days" && <DatePicker />}
            {buildingFiveMode === "month" && <ComboboxMonth5 />}
            {buildingFiveMode === "year" && <ComboboxYear5 />}
          </div>
          <h4>PM2.5</h4>
          <div className="flex items-center justify-center w-full h-[200px]">
            ไม่พบข้อมูล
          </div>
          <h4>CO₂</h4>
          <div className="flex items-center justify-center w-full h-[200px]">
            ไม่พบข้อมูล
          </div>
        </div>
      ) : (
        <div>
          <div
            className={cn(
              "p-4 my-2 border rounded space-y-2 text-xs"
              // buildingFiveMode === "hours" && "hidden"
            )}
          >
            <div>ตัวเลือกเพิ่มเติม</div>
            {buildingFiveMode === "hours" && <ComboboxHour5 />}
            {buildingFiveMode === "days" && <DatePicker />}
            {buildingFiveMode === "month" && <ComboboxMonth5 />}
            {buildingFiveMode === "year" && <ComboboxYear5 />}
          </div>
          <h4>PM2.5</h4>
          <p>(ug/m³)</p>
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
              <Line dataKey="pm25" fill="#FF0000" />
            </LineChart>
          </ResponsiveContainer>
          <h4>CO₂</h4>
          <p>(ppm)</p>

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
        </div>
      )}
    </>
  );
}
