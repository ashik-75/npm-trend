"use client";

import { Compass, GraduationCap, Inbox, Layout, Trophy } from "lucide-react";
import React from "react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Compass,
    label: "Browse",
    href: "/",
  },
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
];

const techerRoutes = [
  {
    icon: Compass,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: Layout,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const routes = pathname.startsWith("/teacher") ? techerRoutes : guestRoutes;

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
