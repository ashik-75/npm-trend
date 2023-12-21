import { IconName } from "@/components/composite/icon";

type Item = {
  title: string;
  href?: string;
  icon: IconName;
};

export const topMenuData: Item[] = [
  {
    title: "Dashboard",
    href: "/introduction",
    icon: "Github",
  },
  {
    title: "Github",
    href: "/github",
    icon: "Github",
  },
  {
    title: "Twitter",
    href: "/twitter",
    icon: "Twitter",
  },
];

export const menuData = [
  {
    section: "Get Started",
    children: [
      {
        title: "Introduction",
        href: "/introduction",
      },
    ],
  },
  {
    section: "Get Started",
    children: [
      {
        title: "OpenAI Analytics",
        href: "/analitics",
      },
    ],
  },
  {
    section: "Advanced",
    children: [
      {
        title: "Logs",
        href: "/logs",
      },
      {
        title: "User Naalytics",
        href: "/user-analytics",
      },
    ],
  },
];
