import { db } from "@/lib/db";
import Image from "next/image";
import React from "react";

type FeedbackListProps = {
  photoId: string;
};

const FeedbackList = async ({ photoId }: FeedbackListProps) => {
  const feedbacks = await db.feedback.findMany({
    where: {
      photoId,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return (
    <div className="space-y-4">
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="flex gap-4 rounded-lg border p-4 shadow-sm"
        >
          <div>
            <Image
              className=" rounded-full"
              src={feedback.photoUrl || "/user.png"}
              alt={feedback.username}
              width={50}
              height={50}
            />
          </div>
          <div>
            <h1 className="text-lg font-medium text-zinc-600">
              {feedback.description}
            </h1>
            <p className="text-sm text-muted-foreground">{feedback.username}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
