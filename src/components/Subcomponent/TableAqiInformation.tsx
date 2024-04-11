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

const AQIS = [
  {
    Color: "ฟ้า",
    textColor: "#00d4ff",
    Status: "คุณภาพอากาศดีมาก",
    AQI: "0-25",
    Co2: "0-400",
    Pm25: "0-15.0",
    Pm10: "0-50",
    Protection: "คุณภาพอากาศดีมาก เหมาะสำหรับกิจกรรมกลางแจ้งและการท่องเที่ยว",
  },
  {
    Color: "เขียว",
    textColor: "#00ff00",
    Status: "คุณภาพอากาศดี",
    AQI: "26-50",
    Co2: "400-700",
    Pm25: "15.1-25.0",
    Pm10: "51-80",
    Protection: "คุณภาพอากาศดี สามารถทำกิจกรรมกลางแจ้งและท่องเที่ยวได้ตามปกติ",
  },
  {
    Color: "เหลือง",
    textColor: "#FFCC00",
    Status: "คุณภาพอากาศปานกลาง",
    AQI: "51-100",
    Co2: "701-1000",
    Pm25: "25.1-37.5",
    Pm10: "21-120",
    Protection:
      "เริ่มมีอาการเบื้องต้น เช่น ไอ หายใจลำบาก ระคายเคือง ตา ควรลดระยะเวลาการทำกิจกรรมกลางแจ้ง",
  },
  {
    Color: "ส้ม",
    textColor: "#ff7f00",
    Status: "คุณภาพอากาศมีผบกระทบต่อสุขภาพ",
    AQI: "101-200",
    Co2: "1001-1500",
    Pm25: "37.6-75.0",
    Pm10: "121-180",
    Protection:
      "ควรเฝ้าระวังสุขภาพ ถ้ามีอาการเบื้องต้น เช่น ไอ หายใจลาบาก ระคาย เคืองตา ควรลดระยะเวลาการทำกิจกรรมกลางแจ้ง หรือใช้อุปกรณ์ป้องกันตนเองหากมีความจำเป็น",
  },
  {
    Color: "เเดง",
    textColor: "#ff0000",
    Status: "คุณภาพอากาศมีผลกระทบตอสุขภาพมาก",
    AQI: ">200",
    Co2: "1500-2500",
    Pm25: ">75.1",
    Pm10: ">180",
    Protection:
      "ควรหลีกเลี่ยงกิจกรรมกลางแจ้ง หลีกเลี่ยงพื้นที่ที่มีมลพิษทางอากาศสูง หรือใช้อุปกรณ์ป้องกันตนเองหากมีความจำเป็น หากมีอาการทางสุขภาพควรพบแพทย์",
  },
];

function TableAqiInformation() {
  return (
    <Table className="mx-auto">
      <TableCaption>
        เกณฑ์ของดัชนีคุณภาพอากาศตามมาตรฐานของประเทศไทย (TH AQI)
      </TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-300">
          <TableHead className="font-medium">ค่าสี</TableHead>
          <TableHead>ความหมาย</TableHead>
          <TableHead>AQI</TableHead>
          <TableHead>Co2(ppm)</TableHead>
          <TableHead>PM2.5 เฉลี่ย 24 ชั่วโมงต่อเนื่อง (μg/m3)</TableHead>
          <TableHead>PM10 เฉลี่ย 24 ชั่วโมงต่อเนื่อง (μg/m3)</TableHead>
          <TableHead>แนวทางการป้องกัน</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-gray-200">
        {AQIS.map((AQI) => (
          <TableRow key={AQI.AQI}>
            <TableCell
              className={cn("font-medium")}
              style={{ color: AQI.textColor }}
            >
              {AQI.Color}
            </TableCell>
            <TableCell>{AQI.Status}</TableCell>
            <TableCell>{AQI.AQI}</TableCell>
            <TableCell>{AQI.Co2}</TableCell>
            <TableCell>{AQI.Pm25}</TableCell>
            <TableCell>{AQI.Pm10}</TableCell>
            <TableCell>{AQI.Protection}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableAqiInformation;
