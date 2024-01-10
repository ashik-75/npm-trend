import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const EpisodeLoader = () => {
  return (
    <div className="max-w-md space-y-2 rounded-3xl border p-5">
      <Skeleton className="h-20 w-full rounded-xl" />
      <Skeleton className="h-5 w-1/2" />
      <Skeleton className="h-5 w-full" />
    </div>
  );
};

export default EpisodeLoader;
