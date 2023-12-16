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

const AQIS3 = [
  {
    Building: "อาคาร 5 ",
    Date: "14 ธันวาคม",
    Pm25: 11,
    Co2: 11,
  },
  {
    Date: "15 ธันวาคม",
    Pm25: 11,
    Co2: 11,
  },
  {
    Date: "16 ธันวาคม",
    Pm25: 11,
    Co2: 11,
  },
  {
    Date: "17 ธันวาคม",
    Pm25: 11,
    Co2: 11,
  },
  {
    Date: "18 ธันวาคม",
    Pm25: 11,
    Co2: 11,
  },
  {
    Date: "19 ธันวาคม",
    Pm25: 11,
    Co2: 11,
  },
  {
    Date: "20 ธันวาคม",
    Pm25: 11,
    Co2: 11,
  },
  {
    Building: "อาคาร 6 ",
    Date: "14 ธันวาคม",
    Pm25: 12,
    Co2: 12,
  },
  {
    Date: "15 ธันวาคม",
    Pm25: 12,
    Co2: 12,
  },
  {
    Date: "16 ธันวาคม",
    Pm25: 12,
    Co2: 12,
  },
  {
    Date: "17 ธันวาคม",
    Pm25: 12,
    Co2: 12,
  },
  {
    Date: "18 ธันวาคม",
    Pm25: 12,
    Co2: 12,
  },
  {
    Date: "19 ธันวาคม",
    Pm25: 12,
    Co2: 12,
  },
  {
    Date: "20 ธันวาคม",
    Pm25: 12,
    Co2: 12,
  },
];

function TablePrevious() {
  return (
    <Table>
      <TableCaption>
        ตารางวัดค่าฝุ่น Pm2.5 เเละ co2 ย้อนหลัง ณ อาคาร 5
      </TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-300">
          <TableHead>สถานที่</TableHead>
          <TableHead>วันที่</TableHead>

          <TableHead>Pm2.5</TableHead>
          <TableHead>Co2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-gray-200">
        {AQIS3.map((AQI) => (
          <TableRow key={AQI.Date}>
            <TableCell>{AQI.Building}</TableCell>
            <TableCell>{AQI.Date}</TableCell>

            <TableCell>{AQI.Pm25}</TableCell>
            <TableCell>{AQI.Co2}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TablePrevious;
