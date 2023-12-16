"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const AQIS2 = [
  {
    building: "อาคาร 5 ",
    date: "15 ธันวาคม",
    data: [
      {
        time: "9:00",
        pm25: 1,
        co2: 300,
      },
      {
        time: "12:00",
        pm25: 26,
        co2: 450,
      },
      {
        time: "15:00",
        pm25: 38,
        co2: 750,
      },
      {
        time: "17:00",
        pm25: 27,
        co2: 1600,
      },
    ],
  },
];

function TableRealtime5() {
  return (
    <Table>
      <TableCaption>ตารางวัดค่าฝุ่น Pm2.5 เเละ co2 ณ อาคาร 5</TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-300">
          <TableHead>สถานที่</TableHead>
          <TableHead>วันที่</TableHead>
          <TableHead>เวลา</TableHead>
          <TableHead>Pm2.5</TableHead>
          <TableHead>Co2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-gray-200">
        {AQIS2.map((AQI) => (
          <>
            <TableRow key={AQI.date}>
              <TableCell>{AQI.building}</TableCell>
              <TableCell>{AQI.date}</TableCell>
              <TableCell>{AQI.data[0].time}</TableCell>
              <TableCell>
                <div
                  className={cn(
                    "text-blue-500",
                    AQI.data[0].pm25 > 15 && "text-green-500",
                    AQI.data[0].pm25 > 25 && "text-yellow-500",
                    AQI.data[0].pm25 > 37.6 && "text-orange-500",
                    AQI.data[0].pm25 > 75 && "text-red-500"
                  )}
                >
                  {AQI.data[0].pm25}
                </div>
              </TableCell>
              <TableCell>
                <div
                  className={cn(
                    "text-blue-500",
                    AQI.data[0].co2 > 401 && "text-green-500",
                    AQI.data[0].co2 > 701 && "text-yellow-500",
                    AQI.data[0].co2 > 1001 && "text-orange-500",
                    AQI.data[0].co2 > 1500 && "text-red-500"
                  )}
                >
                  {AQI.data[0].co2}
                </div>
              </TableCell>
            </TableRow>
            {AQI.data.slice(1).map((data) => (
              <TableRow key={data.time}>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{data.time}</TableCell>
                <TableCell>
                  <div
                    className={cn(
                      "text-blue-500",
                      data.pm25 > 15 && "text-green-500",
                      data.pm25 > 25 && "text-yellow-500",
                      data.pm25 > 37.6 && "text-orange-500",
                      data.pm25 > 75 && "text-red-500"
                    )}
                  >
                    {data.pm25}
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    className={cn(
                      "text-blue-500",
                      data.co2 > 401 && "text-green-500",
                      data.co2 > 701 && "text-yellow-500",
                      data.co2 > 1001 && "text-orange-500",
                      data.co2 > 1500 && "text-red-500"
                    )}
                  >
                    {data.co2}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableRealtime5;
