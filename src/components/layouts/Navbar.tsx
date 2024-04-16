"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Item } from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const arr = [
  {
    name: "Dust",
    desc: "(ฝุ่น)คืออะไร ",
    link: "what-is-dust",
  },
  {
    name: "Pm2.5",
    desc: "คืออะไร ความอันตราย ",
    link: "what-is-pm25",
  },
  {
    name: "Co2",
    desc: "คืออะไร ความอันตราย ",
    link: "what-is-co2",
  },
];

const arr2 = [
  { name: "อาคาร 5", desc: "ประวัติค่าฝุ่น", link: "building-5" },
  { name: "อาคาร 6", desc: "ยังไม่เปิดให้บริการ", link: "building-6" },
  { name: "ตารางค่าฝุ่น", desc: "ค่าฝุ่นรายปี", link: "previous" },
];
function Navbar() {
  return (
    <div className="mx-auto text-sm container">
      <div className="flex items-center justify-between p-3">
        <div>
          <Link href="/">
            <Image
              src="/assets/Dustlogo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/">ฝุ่น</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid justify-center   md:w-[200px] ">
                    {arr.map((item, index) => {
                      return (
                        <Link href={"/" + item.link} key={item.name}>
                          <ListItem title={item.name}>{item.desc}</ListItem>
                        </Link>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <div>ประวัติ</div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid justify-center  md:w-[200px] ">
                    {arr2.map((item, index) => {
                      return (
                        <Link href={"/" + item.link} key={item.name}>
                          <ListItem title={item.name}>{item.desc}</ListItem>
                        </Link>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/airquality" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    AQI
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default Navbar;
