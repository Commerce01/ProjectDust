"use client";
import React from "react";
import Image from "next/image";

import AccordionSub from "../Subcomponent/AccordionSub";
import CardRealTime from "../Subcomponent/CardRealTime";

function Home() {
  return (
    <div className="container">
      <div className=" flex justify-center items-center text-4xl font-blod py-2">
        What💀the..Dust?
      </div>
      <p className=" flex justify-center items-center text-2xl py-2">
        ช่วงนี้ฝุ่นเยอะ💨
      </p>
      <p className=" flex justify-center items-center text-2xl ">
        รักษาสุขภาพกันด้วยนะ😷
      </p>
      <p className=" flex justify-center items-center text-2xl py-2 ">
        #ที่นี่(มอ)รังสิต🏫
      </p>
      <div className="flex justify-center items-center ">
        {/* <Image
          src="/assets/Thailand-Index-Color-Bar-Air-Quality-Index-scaled.jpg"
          alt="bn2"
          width={1300}
          height={50}
        /> */}

        <div className="absolute justify-center items-center"></div>
      </div>
      <div className="flex justify-center items-center  ">
        <CardRealTime />
      </div>
      <div>
        <AccordionSub />
      </div>
    </div>
  );
}

export default Home;
