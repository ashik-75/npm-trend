import { CommentType } from "@/app/(tailwind)/constant";
import React from "react";

const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="flex gap-4 rounded-xl border p-2 dark:border-zinc-900">
      <img
        className="h-10 w-10 rounded-full object-cover"
        src={comment.url}
        alt={"FF"}
      />

      <div>
        <h1 className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
          {comment.name}
        </h1>
        <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {comment.comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
