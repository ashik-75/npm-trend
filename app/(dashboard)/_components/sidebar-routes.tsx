"use client";

import {
  Code,
  Compass,
  GraduationCap,
  ImageIcon,
  Inbox,
  Layout,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  Trophy,
  VideoIcon,
} from "lucide-react";
import React from "react";
import SidebarItem from "./sidebar-item";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const SidebarRoutes = () => {
  return (
    <div className="flex w-full flex-col gap-y-2">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          href={route.href}
          label={route.label}
          icon={route.icon}
          color={route.color}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
