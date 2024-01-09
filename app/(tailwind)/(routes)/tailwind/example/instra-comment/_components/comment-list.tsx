import React from "react";
import Comment from "./comment";
import { ScrollArea } from "@/components/ui/scroll-area";

const CommentList = () => {
  return (
    <div className="h-[400px]">
      <ScrollArea className="h-full space-y-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <Comment key={i + 1} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default CommentList;
