"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import React from "react";

type LoadMorePorps = {
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
};

const LoadMore = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: LoadMorePorps) => {
  return (
    <div className="flex items-center justify-center py-10">
      <Button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage || !hasNextPage}
      >
        {isFetchingNextPage && <Loader className="animate-spin" />}
        <span>Load More</span>
      </Button>
    </div>
  );
};

export default LoadMore;
