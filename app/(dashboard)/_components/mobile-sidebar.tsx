import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Button variant={"link"}>
          <Menu className="text-white" size={22} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="w-[250px] border-neutral-700 bg-neutral-800 p-0"
        side={"left"}
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
