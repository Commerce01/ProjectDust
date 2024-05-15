"use client";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordionSub() {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>การตีความระดับสี</AccordionTrigger>
          <AccordionContent>
            <p>ดัชนีคุณภาพอากาศของประเทศไทย แสดงระดับสี 5 ระดับ </p>
            <p className="text-blue-400">สีฟ้า = ดีมาก</p>
            <p className="text-green-500">เขียว = ดี</p>
            <p className="text-yellow-500">เหลือง = ปานกลาง</p>
            <p className="text-orange-500">สีส้ม = เริ่มมีผลกระทบต่อสุขภาพ</p>
            <p className="text-red-600">สีแดง = มีผลต่อสุขภาพ</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>ช่องทางการติดต่อ</AccordionTrigger>
          <AccordionContent>LineID : @847ltlqy</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionSub;
