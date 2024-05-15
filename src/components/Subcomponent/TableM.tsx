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

    m1: (
      <a
        href="https://docs.google.com/spreadsheets/d/1jyGSEmW9LF8yG6fpbatfDzkH7e-KVzDfuODFXMdZpWk/edit?usp=sharing"
        target="_blank"
      >
        <button className="text-2xl text-green-600">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m2: (
      <a
        href="https://docs.google.com/spreadsheets/d/14iS99YUqfNWeBLq7G86oXLhFu-iSYlJXbSmeVe5q7IM/edit?usp=sharing"
        target="_blank"
      >
        <button className="text-2xl text-green-600">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m3: (
      <a
        href="https://docs.google.com/spreadsheets/d/1zm_LxQ-4jdAWDpV-gEC2r-fdO2-tYQOnDQIJHdYbdXc/edit?usp=sharing"
        target="_blank"
      >
        <button className="text-2xl text-green-600">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m4: (
      <a
        href="https://docs.google.com/spreadsheets/d/1DZ06ZRBOUzbcFAdX24VcmaJuox_E4Y_-5gSzwT8bTcA/edit?usp=sharing"
        target="_blank"
      >
        <button className="text-2xl text-green-600">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m5: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m6: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m7: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m8: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m9: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m10: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m11: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m12: (
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

    m1: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m2: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m3: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m4: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m5: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m6: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m7: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m8: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m9: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m10: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m11: (
      <a
      // href=""
      // target="_blank"
      >
        <button className="text-2xl">
          <SiGooglesheets />
        </button>
      </a>
    ),
    m12: (
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

export function TableM() {
  return (
    <Table>
      <TableCaption>
        ค่าฝุ่นรายเดือน
        <p className=" text-red-700">
          *เริ่มเก็บครั้งเเรกช่วงเดือน มกราคม พ.ศ.2567
        </p>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[500px]">สถานที่</TableHead>
          <TableHead>สถานะ</TableHead>

          <TableHead className="text-right">ม.ค.</TableHead>
          <TableHead className="text-right">ก.พ.</TableHead>
          <TableHead className="text-right">มี.ค.</TableHead>
          <TableHead className="text-right">เม.ย.</TableHead>
          <TableHead className="text-right">พ.ค.</TableHead>
          <TableHead className="text-right">มิ.ย.</TableHead>
          <TableHead className="text-right">ก.ค.</TableHead>
          <TableHead className="text-right">ส.ค.</TableHead>
          <TableHead className="text-right">ก.ย.</TableHead>
          <TableHead className="text-right">ต.ค.</TableHead>
          <TableHead className="text-right">พ.ย.</TableHead>
          <TableHead className="text-right">ธ.ค.</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {years.map((invoice) => (
          <TableRow key={invoice.building}>
            <TableCell className="font-medium">{invoice.building}</TableCell>
            <TableCell>{invoice.Status}</TableCell>
            <TableCell className="text-right">{invoice.m1}</TableCell>
            <TableCell className="text-right">{invoice.m2}</TableCell>
            <TableCell className="text-right">{invoice.m3}</TableCell>
            <TableCell className="text-right">{invoice.m4}</TableCell>
            <TableCell className="text-right">{invoice.m5}</TableCell>
            <TableCell className="text-right">{invoice.m6}</TableCell>
            <TableCell className="text-right">{invoice.m7}</TableCell>
            <TableCell className="text-right">{invoice.m8}</TableCell>
            <TableCell className="text-right">{invoice.m9}</TableCell>
            <TableCell className="text-right">{invoice.m10}</TableCell>
            <TableCell className="text-right">{invoice.m11}</TableCell>
            <TableCell className="text-right">{invoice.m12}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
}
