import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  color?: string;
};
const SidebarItem = ({ icon: Icon, label, href, color }: SidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      className={cn(
        "flex w-full items-center gap-x-2 rounded-lg bg-transparent px-4 py-2 text-sm text-neutral-50 shadow-sm transition duration-500",
        isActive && "bg-neutral-700 text-neutral-50",
      )}
      onClick={onClick}
    >
      <Icon className={cn(color)} size={22} />
      {label}
    </button>
  );
};

export default SidebarItem;
