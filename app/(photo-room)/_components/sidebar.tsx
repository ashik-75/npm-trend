import React from "react";
import Logo from "./logo";
import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="h-full w-full border-r">
      <div className="p-2">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
