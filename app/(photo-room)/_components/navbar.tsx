import React from "react";
import Logo from "./logo";
import NavbarRoutes from "@/components/navbar-routes";
import dynamic from "next/dynamic";

const MobileSidebar = dynamic(() => import("./mobile-sidebar"), { ssr: false });

const Navbar = () => {
  return (
    <div className="flex h-full w-full items-center justify-between border-b-[1px] bg-white px-5">
      <div className="flex items-center">
        <MobileSidebar />

        <Logo />
      </div>

      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
