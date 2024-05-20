"use client";

import * as React from "react";

import io from "socket.io-client";

const socket = io("http://43.228.85.26:5000");

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function CardHome() {
  const [co2, setco2] = useState(0);
  const [pm25, setpm25] = useState(0);
  useEffect(() => {
    socket.on("building-five", (co2: any, pm25: any) => {
      setco2(co2);
      setpm25(pm25);
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center px-4 sm:px-6 lg:px-8">
      <Card className="text-6xl w-full sm:w-auto max-w-md lg:max-w-lg xl:max-w-xl mx-4 my-4">
        <CardHeader>
          <CardTitle>อาคาร 5</CardTitle>
          <CardDescription>ค่าฝุ่นในขณะนี้ </CardDescription>
          <CardDescription>เปิดให้บริการ🟢 </CardDescription>
        </CardHeader>
        <CardContent className="flex text-2xl">
          <p className="text-4xl">
            Pm2.5 =
            <span
              className={cn(
                "text-blue-500",
                pm25 > 15 && "text-green-500",
                pm25 > 25 && "text-yellow-400",
                pm25 > 37.6 && "text-orange-500",
                pm25 > 75 && "text-red-500"
              )}
            >
              <button className="px-2">{pm25}</button>
            </span>
          </p>
        </CardContent>
        <CardFooter className="flex text-2xl">
          <p className="text-4xl">
            Co2 =
            <span
              className={cn(
                "text-blue-500",
                co2 > 401 && "text-green-500",
                co2 > 701 && "text-yellow-400",
                co2 > 1001 && "text-orange-500",
                co2 > 1500 && "text-red-500"
              )}
            >
              <button className="px-2">{co2}</button>
            </span>
          </p>
        </CardFooter>
      </Card>
      <Card className="text-6xl w-full sm:w-auto max-w-md lg:max-w-lg xl:max-w-xl mx-4 my-4">
        <CardHeader>
          <CardTitle>อาคาร 6</CardTitle>
          <CardDescription>ค่าฝุ่นในขณะนี้ </CardDescription>
          <CardDescription>ยังไม่เปิดให้บริการ🔴 </CardDescription>
        </CardHeader>
        <CardContent className="flex text-2xl">
          <p className="text-4xl">
            Pm2.5 =
            <span
              className={cn(
                "text-blue-500",
                pm25 > 15 && "text-green-500",
                pm25 > 25 && "text-yellow-400",
                pm25 > 37.6 && "text-orange-500",
                pm25 > 75 && "text-red-500"
              )}
            >
              {/* <button className="px-2">{pm25}</button> */}
            </span>
          </p>
        </CardContent>
        <CardFooter className="flex text-2xl">
          <p className="text-4xl">
            Co2 =
            <span
              className={cn(
                "text-blue-500",
                co2 > 401 && "text-green-300",
                co2 > 701 && "text-yellow-400",
                co2 > 1001 && "text-orange-500",
                co2 > 1500 && "text-red-500"
              )}
            >
              {/* <button className="px-2">{co2}</button> */}
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
