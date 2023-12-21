"use client";

import Image from "next/image";
import React from "react";
import SearchCommand from "./search-command";
import ToggleTheme from "./toggle-theme";

const TopBar = () => {
  return (
    <div className="sticky left-0 top-0 flex justify-between border-b border-zinc-100 bg-white/10 p-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/90">
      <div className="ml-2.5">
        <Image width={40} height={40} src="/haskell.png" alt="logo" />
      </div>
      <SearchCommand />
      <ToggleTheme />
    </div>
  );
};

export default TopBar;
