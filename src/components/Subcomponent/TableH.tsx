"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { SiGooglesheets } from "react-icons/si";
const years = [
  {
    building: "อาคารวิษณุรัตน์",
    Status: "เปิดให้บริการ🟢",
    year2565: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    year2566: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    year2567: (
      <a
        href="https://docs.google.com/spreadsheets/d/1PVcMxs6_gKcVHTug_SEXC6fXzt3fwzxgjzIeU7Z-vbw/edit?usp=sharing"
        target="_blank"
      >
        <button className="text-2xl text-green-600">
          <SiGooglesheets />
        </button>
      </a>
    ),
    year2568: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
  },
  {
    building: "อาคารพิฆเนศ Student Center",
    Status: "ยังไม่เปิดให้บริการ🔴",
    year2565: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    year2566: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    year2567: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    year2568: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
  },
];

export function TableH() {
  return (
    <Table>
      <TableCaption>ค่าฝุ่นรายปี</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[500px]">สถานที่</TableHead>
          <TableHead>สถานะ</TableHead>
          <TableHead className="text-right">2565</TableHead>
          <TableHead className="text-right">2566</TableHead>
          <TableHead className="text-right">2567</TableHead>
          <TableHead className="text-right">2568</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {years.map((invoice) => (
          <TableRow key={invoice.building}>
            <TableCell className="font-medium">{invoice.building}</TableCell>
            <TableCell>{invoice.Status}</TableCell>
            <TableCell className="text-right">{invoice.year2565}</TableCell>
            <TableCell className="text-right">{invoice.year2566}</TableCell>
            <TableCell className="text-right">{invoice.year2567}</TableCell>
            <TableCell className="text-right">{invoice.year2568}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
}
