import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const FeedbackLoader = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <SingleSkeleton key={i} />
      ))}
    </div>
  );
};

export default FeedbackLoader;

const SingleSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
