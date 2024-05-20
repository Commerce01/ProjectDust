"use client";
import React from "react";
import Image from "next/image";
import CardRealTime from "../Subcomponent/CardRealTime";
import Map from "../Subcomponent/Map";
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
        <Image
          src="/assets/Thailand-Index-Color-Bar-Air-Quality-Index-scaled.jpg"
          alt="bn2"
          width={550}
          height={50}
        />
      </div>
      <div className="flex justify-center items-center  ">
        <CardRealTime />
      </div>

      <div className="flex justify-center items-center py-4">
        <Map />
      </div>
    </div>
  );
}

export default Home;
