import Image from "next/image";
import React from "react";

const TopBar = () => {
  return (
    <div className="sticky left-0 top-0 border-b border-zinc-100 bg-white/10 p-4 backdrop-blur-md">
      <div className="ml-2.5">
        <Image width={40} height={40} src="/haskell.png" alt="logo" />
      </div>
    </div>
  );
};

export default TopBar;
