"use client";

import React, { Suspense, useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MessageCircleIcon } from "lucide-react";
import CommentLoading from "./comment-loading";
import CommentList from "./comment-list";

const CommentDrawer = () => {
  const [show, setShow] = useState(false);
  return (
    <Drawer>
      <DrawerTrigger>
        <MessageCircleIcon onClick={() => setShow(true)} />
      </DrawerTrigger>

      <DrawerContent className="mx-auto max-w-[calc(28rem-1.25rem)] p-5">
        <Suspense fallback={<CommentLoading />}>
          {show && <CommentList />}
        </Suspense>
      </DrawerContent>
    </Drawer>
  );
};

export default CommentDrawer;
