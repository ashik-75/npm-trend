import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};
const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    // show active tate for both directory and sub directory
    pathname === href || pathname.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      className={cn(
        "flex w-full items-center gap-x-2 px-4 py-2 text-sm text-zinc-500 hover:bg-sky-50 hover:text-zinc-600",
        isActive && "bg-sky-50 text-zinc-600",
      )}
      onClick={onClick}
    >
      <Icon size={22} />
      {label}
    </button>
  );
};

export default SidebarItem;
