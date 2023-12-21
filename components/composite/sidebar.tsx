"use client";
import { Flex } from "@tremor/react";
import React from "react";
import Icon from "./icon";
import clsx from "clsx";
import { menuData, topMenuData } from "@/data/menu-data";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="sticky top-[73px] h-[calc(100vh-73px)] space-y-10 p-5">
      <div className="space-y-3">
        {topMenuData.map((menu) => (
          <Flex
            key={menu.title}
            justifyContent="start"
            className="group cursor-pointer space-x-4 px-3"
          >
            <Icon
              name={menu?.icon}
              className={clsx(
                "rounded-lg border bg-gradient-to-tr px-2 py-1 group-hover:from-orange-900 group-hover:to-orange-400 group-hover:text-white ",
              )}
              size={35}
            />
            <span className="text-sm font-semibold text-zinc-500 group-hover:text-orange-500">
              {menu.title}
            </span>
          </Flex>
        ))}
      </div>

      <div className="space-y-5">
        {menuData.map((section) => (
          <div key={section.section} className="space-y-2">
            <h1 className="px-3 text-sm  font-semibold text-gray-600">
              {section.section}
            </h1>
            <ul>
              {section.children.map((menu) => (
                <Link
                  className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  href={menu.href}
                  key={menu.href}
                >
                  {menu.title}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
