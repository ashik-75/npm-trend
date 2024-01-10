import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CharacterLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i + 1} className="space-y-4">
          <Skeleton className="h-24 w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-10 w-full rounded-xl" />
            <Skeleton className="h-6 w-full rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterLoading;
