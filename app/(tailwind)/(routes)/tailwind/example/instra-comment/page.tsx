import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MessageCircleIcon } from "lucide-react";
import React from "react";
import CommentList from "./_components/comment-list";

const InstraComment = () => {
  return (
    <div className="mx-auto h-full max-w-md bg-rose-800 p-5">
      <Drawer>
        <DrawerTrigger>
          <MessageCircleIcon />
        </DrawerTrigger>

        <DrawerContent className="mx-auto max-w-md p-5">
          <h1>Fill the gaps</h1>
          <CommentList />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default InstraComment;
