"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Item } from "@radix-ui/react-navigation-menu";
import { BiGhost, BiSearch } from "react-icons/bi";

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
    name: "Pm2.5",
    desc: "คืออะไร สาเหตุ ความอันตราย",
    link: "what-is-pm25",
  },
  {
    name: "Co2",
    desc: "คืออะไร ลักษณะ ความอันตราย ",
    link: "what-is-co2",
  },
];

function Navbar() {
  return (
    <div className="mx-6  text-sm">
      <div className="flex items-center justify-between p-3">
        <Link href="/">
          <Image
            src="/assets/Dustlogo.png"
            alt="logo"
            width={200}
            height={100}
          />
        </Link>
        <div className="flex items-center ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Dust</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/what-is-dust"
                        >
                          <BiGhost className="text-3xl " />

                          <div className="mb-2 mt-4 text-lg font-medium">
                            Dust(ฝุ่น)?
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            มันคืออะไร
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
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
                <Link href="/airquality" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ดัชนีคุณภาพอากาศ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/previous" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ข้อมูลย้อนหลัง
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="relative flex items-center space-x-2 w-[200px]">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full outline-none bg-gray-200 w-full"
          />
          <BiSearch className="absolute right-2" />
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
