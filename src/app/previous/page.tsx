import { TableD } from "@/components/Subcomponent/TableD";
import { TableH } from "@/components/Subcomponent/TableH";
import { TableM } from "@/components/Subcomponent/TableM";
import React from "react";

function PreviousPage() {
  return (
    <div className="container">
      <div className="flex justify-center items-center ">
        <p className="py-5 px-5  font-bold text-2xl">
          ตารางเเสดงค่าฝุ่น ราย วัน-เดือน-ปี
        </p>
      </div>
      <div className="py-5">
        <TableD />
        <TableM />
        <TableH />
      </div>
    </div>
  );
}

export default PreviousPage;
