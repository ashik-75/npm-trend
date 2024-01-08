import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button variant={"ghost"}>Home me</Button>
        </PopoverTrigger>

        <PopoverContent align="end">
          <div>Popover content</div>
        </PopoverContent>
      </Popover>

      <Drawer>
        <DrawerTrigger>
          <Button>Triger</Button>
        </DrawerTrigger>
        <DrawerContent className="max-w-md p-5">
          <div className="mb-5 text-xl font-bold">Show the man</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quaerat laudantium consequatur vero, blanditiis quis mollitia optio
            eos numquam illum tempore cumque quas facilis dolores repellendus
            magnam non eveniet tenetur odio beatae aliquid nobis laborum
            perspiciatis tempora! Nobis sit a alias, nesciunt eos suscipit, ab
            nostrum nulla temporibus, quae sunt?
          </p>
        </DrawerContent>
      </Drawer>
      <ul>
        <li>
          <Link href={"/tailwind"}>Tailwind</Link>
        </li>
        <li>
          <Link href={"/next"}>Next</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>AI Sass</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
