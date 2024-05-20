"use client";

import React from "react";
import Map from "../Subcomponent/Map";
import { TbMessageChatbot } from "react-icons/tb";

function Footer() {
  return (
    <div>
      <div className="">
        <div className=" flex justify-center items-center px-3 py-4">
          <p className=" text-2xl px-2">ติดต่อ :</p>
          <button
            className=" text-5xl px-2"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://lin.ee/Nm3MYeR ";
            }}
          >
            <p className="flex justify-center items-center  text-3xl px-2">
              {"LineBot"}
              <TbMessageChatbot />
              [คลิก]
            </p>
          </button>
        </div>
        <div className="flex items-center justify-center py-2  text-sm">
          <p>Copyright © 2024 Dust? All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
