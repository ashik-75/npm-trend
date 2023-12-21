import clsx from "clsx";
import { icons } from "lucide-react";
import React from "react";

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ size = 18, className, name, onClick }) => {
  const LucideIcon = icons[name];
  return (
    <LucideIcon onClick={onClick} className={clsx(className)} size={size} />
  );
};

export default Icon;
