"use client";
import React, { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

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
];

const DashboardPage = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl space-y-5 p-5 md:p-10">
      <div className="space-y-5">
        <h1 className="text-2xl font-extrabold text-neutral-300 md:text-5xl">
          Explore the AI Featured offered by Open AI
        </h1>
        <p className="text-muted-foreground">
          Hope your daily life will be more beautiful and easy by using this
          amazing featured by incresing productivity upto 10X
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 rounded-xl bg-neutral-900/40 p-5 md:grid-cols-2">
        {routes.map((route) => (
          <Card
            className="flex cursor-pointer justify-between border-neutral-700/20 bg-neutral-800/10 p-5 text-neutral-400 transition hover:translate-x-1 hover:shadow-sm hover:shadow-neutral-400"
            key={route.href}
            onClick={() => router.push(route.href)}
          >
            <div className="flex items-center gap-2">
              <route.icon className={cn(route.color)} />

              <h1>{route.label}</h1>
            </div>
            <ArrowRight />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
