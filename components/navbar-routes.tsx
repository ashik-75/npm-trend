"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname.startsWith("/teacher");
  const isCoursePage = pathname.startsWith("/course");
  return (
    <div>
      {isTeacherPage || isCoursePage ? (
        <Link href={"/"}>
          <Button variant={"outline"}>
            <LogOut />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={`/teacher/courses`}>
          <Button variant={"ghost"}>Teacher Mode</Button>
        </Link>
      )}
    </div>
  );
};

export default NavbarRoutes;
