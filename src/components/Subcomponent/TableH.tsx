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
      // href="https://docs.google.com/spreadsheets/d/1uOx1CL1-RlyKIkQQ7QjQAm-sZKRyMDPuzd1JPUijAYE/edit?usp=sharing"
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
  },
  {
    building: "อาคารพิฆเนศ Studdent Center",
    Status: "ยังไม่เปิดให้บริการ🔴",

    year2567: (
      <a
      // href="https://docs.google.com/spreadsheets/d/1irbQRWowW7WfsOvx9ICYpGQmUYCxuDWVLWuSrOHfy-0/edit?usp=sharing"
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    year2568: (
      <a
      // href="https://docs.google.com/spreadsheets/d/1ZBFRtjmggoESubjDI231NhtzOaG-s9nrL695nUChrcM/edit?usp=sharing"
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

          <TableHead className="text-right">2567</TableHead>
          <TableHead className="text-right">2568</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {years.map((invoice) => (
          <TableRow key={invoice.building}>
            <TableCell className="font-medium">{invoice.building}</TableCell>
            <TableCell>{invoice.Status}</TableCell>
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
