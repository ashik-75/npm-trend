"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-full  backdrop-blur-sm">
      <div className="container flex h-full items-center justify-between  px-5">
        <Link href={"/"}>
          <h1 className="font-nunito text-xl font-extrabold">
            <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Client Side Data Fetching and pagination ...
            </span>
          </h1>
        </Link>

        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="rounded-full border border-dashed border-zinc-500 p-2 dark:border-zinc-300"
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
