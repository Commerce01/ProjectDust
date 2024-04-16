import { TableH } from "@/components/Subcomponent/TableH";
import { TableM } from "@/components/Subcomponent/TableM";
import React from "react";

function PreviousPage() {
  return (
    <div className="container">
      <div className="flex justify-center items-center ">
        <p className="py-5 px-5">ตารางเเสดงค่าฝุ่น รายเดือน - รายปี</p>
      </div>
      <div className="py-5">
        <TableM />
        <TableH />
      </div>
    </div>
  );
}

export default PreviousPage;
