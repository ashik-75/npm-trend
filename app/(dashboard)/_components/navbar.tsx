import { Menu } from "lucide-react";
import React from "react";
import MobileSidebar from "./mobile-sidebar";
import Logo from "./logo";
import { UserButton } from "@clerk/nextjs";
import NavbarRoutes from "@/components/navbar-routes";

const Navbar = () => {
  return (
    <div className="flex h-full w-full items-center justify-between border-b-[1px] bg-white px-5">
      <div className="flex items-center">
        <MobileSidebar />

        <Logo />
      </div>

      <div className="flex items-center gap-x-5">
        <NavbarRoutes />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
