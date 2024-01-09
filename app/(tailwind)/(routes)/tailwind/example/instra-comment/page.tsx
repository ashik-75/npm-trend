import React from "react";
import { faker } from "@faker-js/faker";
import CommentDrawer from "./_components/comments-drawer";

const InstraComment = () => {
  return (
    <div className="mx-auto h-full max-w-md p-5">
      <div className="space-y-2 rounded-3xl border p-5">
        <div className="flex gap-2">
          <img
            className="h-10 w-10 shrink-0 rounded-full object-cover"
            src={faker.image.avatar()}
            alt=""
          />
          <div>
            <h1 className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              {faker.person.fullName()}
            </h1>
            <h1 className="text-xs text-zinc-600 dark:text-zinc-300">
              {faker.person.jobType()}
            </h1>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="line-clamp-1 font-medium text-zinc-600 dark:text-zinc-300">
            {faker.lorem.lines(1)}
          </h1>
          <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300">
            {faker.lorem.paragraph(2)}
          </p>
        </div>
        <CommentDrawer />
      </div>
    </div>
  );
};

export default InstraComment;
