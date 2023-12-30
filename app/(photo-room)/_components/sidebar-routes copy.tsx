"use client";

import { Compass, GraduationCap, Inbox, Layout, Trophy } from "lucide-react";
import React from "react";
import SidebarItem from "./sidebar-item";

const guestRoutes = [
  {
    icon: Compass,
    label: "Browse",
    href: "/",
  },
  {
    icon: Layout,
    label: "Create",
    href: "/create",
  },
];

const SidebarRoutes = () => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col gap-y-2">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          href={route.href}
          label={route.label}
          icon={route.icon}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
