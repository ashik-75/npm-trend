"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" flex h-full items-center justify-between px-10 backdrop-blur-sm">
      <Link href={"/tailwind"}>
        <h1 className="font-nunito text-3xl font-extrabold">
          <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
            Tailwind
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
  );
};

export default Navbar;
