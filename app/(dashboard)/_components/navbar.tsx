import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";
import Logo from "./logo";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex h-full items-center justify-between px-5">
      <div className="flex gap-x-1">
        <MobileSidebar />

        <Logo />
      </div>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
