"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  // NavigationMenuTrigger,
  // NavigationMenuContent,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";
import { BiCaretRight } from "react-icons/bi";
import CustomData from "../Subcomponent/Date";
// import Clock from "../Subcomponent/Time";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("../Subcomponent/Time"));

function TopNav() {
  return (
    <div className="bg-black">
      <div className="">
        <div className="flex items-center justify-between px-12 py-2 text-xs text-white">
          <div className="flex items-center ">
            <BiCaretRight className=" text-xl" />
            <p>Rangsit University</p>
          </div>
          <div className="flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <div className="text-xl">
                    <Clock />
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <p className="text-xl text-red-700"> | </p>
                </NavigationMenuItem>
                <NavigationMenuItem asChild>
                  <Link href="/building-5">อาคารวิษณุรัตน์</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
