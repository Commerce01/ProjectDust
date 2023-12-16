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
      {" "}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>คำถาม1</AccordionTrigger>
          <AccordionContent>xxxx</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>คำถาม2</AccordionTrigger>
          <AccordionContent>xxxx</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>คำถาม3</AccordionTrigger>
          <AccordionContent>xxxx</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionSub;
