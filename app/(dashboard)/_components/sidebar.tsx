import React from "react";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";
import { LogOut } from "lucide-react";
import SidebarBottom from "./sidebar-bottom";

const Sidebar = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between p-5 text-neutral-50">
      <div className="space-y-10">
        <Logo />
        <SidebarRoutes />
      </div>

      <SidebarBottom />
    </div>
  );
};

export default Sidebar;
