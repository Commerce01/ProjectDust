"use client";

import React from "react";
import Image from "next/image";
import TableAqiInformation from "../Subcomponent/TableAqiInformation";

function AirqualityInformation() {
  return (
    <div className=" py-5 px-8">
      <div className=" py-5 px-8">
        <p className="text-2xl font-bold">
          เกณฑ์ของดัชนีคุณภาพอากาศของประเทศไทย
        </p>
      </div>
      <div className="px-8">
        <p className="text-xl py-2">
          ประเทศไทยแบ่งดัชนีคุณภาพอากาศเป็น 5 ระดับ เเบ่งเป็น 5 สี ตั้งแต่ 0 ถึง
          201 ขึ้นไป โดยใช้สีเป็นตัวเปรียบเทียบระดับของผลกระทบต่อสุขภาพ
        </p>
      </div>
      <div className=" py-5 px-8">
        <TableAqiInformation />
      </div>
    </div>
  );
}

export default AirqualityInformation;
