import React from "react";
import Comment from "./comment";
import { ScrollArea } from "@/components/ui/scroll-area";
import { comments } from "@/app/(tailwind)/constant";

const CommentList = async () => {
  return (
    <ScrollArea className="h-[400px] pt-2">
      <div className="space-y-2">
        {comments.map((comment) => (
          <Comment comment={comment} key={`${comment.url}-${comment.name}`} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default CommentList;
