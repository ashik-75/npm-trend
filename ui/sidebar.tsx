"use client";

import { Flex } from "@tremor/react";
import React from "react";
import Icon from "./icon";
import clsx from "clsx";
import { menuData } from "@/data/menu-data";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="sticky top-[73px] h-[calc(100vh-73px)] space-y-10 p-5">
      <div className="space-y-3">
        <Flex justifyContent="start" className="space-x-4 px-3">
          <Icon
            name="BookOpen"
            className={clsx("rounded-lg border px-2 py-1")}
            size={35}
          />
          <span className="text-sm text-zinc-500">Dashboard</span>
        </Flex>

        <Flex justifyContent="start" className="space-x-4 px-3">
          <Icon
            name="Github"
            className={clsx("rounded-lg border px-2 py-1")}
            size={35}
          />
          <span className="text-sm text-zinc-500">Github</span>
        </Flex>
        <Flex justifyContent="start" className="space-x-4 px-3">
          <Icon
            name="BookOpen"
            className={clsx("rounded-lg border px-2 py-1")}
            size={35}
          />
          <span className="text-sm text-zinc-500">Discord</span>
        </Flex>
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
                  className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100"
                  href={menu.href}
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
