import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CommentLoading = () => {
  return (
    <ScrollArea className="h-[400px] pt-2">
      <div className="space-y-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i + 1} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CommentLoading;
