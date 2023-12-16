"use client";
import React from "react";
import Image from "next/image";

import AccordionSub from "../Subcomponent/AccordionSub";

import TableRealtime5 from "../Subcomponent/TableRealtime5";
import TableRealtime6 from "../Subcomponent/TableRealtime6";

function Home() {
  return (
    <div className="container">
      <div className="flex justify-center items-center"></div>
      <div>
        <div className="flex justify-center items-center">
          <Image src="/assets/bn2.png" alt="bn2" width={3840} height={500} />
          <div className="absolute justify-center items-center">
            <h1 className="text-3xl font-bold  drop-shadow-xl text-white">
              ฝุ่น อันตรายกว่าที่คุณคิด
            </h1>
          </div>
        </div>
      </div>
      <div className=" py-5">
        <TableRealtime5 />
      </div>
      <div>
        <TableRealtime6 />
      </div>
      <div>
        <AccordionSub />
      </div>
    </div>
  );
}

export default Home;
