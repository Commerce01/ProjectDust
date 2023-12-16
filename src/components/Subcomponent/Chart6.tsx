"use client";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "9:00",
    Pm: 4000,
    Co2: 2400,
    amt: 2400,
  },
  {
    name: "12:00",
    Pm: 3000,
    Co2: 1398,
    amt: 2210,
  },
  {
    name: "15:00",
    Pm: 2000,
    Co2: 9800,
    amt: 2290,
  },
  {
    name: "17:00",
    Pm: 2780,
    Co2: 3908,
    amt: 2000,
  },
];

export default class Example extends PureComponent {
  // static demoUrl = "https://codesandbox.io/s/synchronized-area-chart-kpg1s";

  render() {
    return (
      <div style={{ width: "100%" }}>
        <h4>PM2.5</h4>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Pm"
              stroke="#696969"
              fill="#696969"
            />
          </AreaChart>
        </ResponsiveContainer>
        <p>Co2</p>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Co2"
              stroke="#778899"
              fill="#778899"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
