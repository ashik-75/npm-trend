"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { UserButton } from "@clerk/nextjs";

const NavbarRoutes = () => {
  const pathname = usePathname();

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
