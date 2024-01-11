"use client";

import CharacterLoading from "@/app/_components/character-loading";
import CharacterList from "@/app/_components/chracter-list";
import LoadMore from "@/app/_components/load-more";
import { getCharacters } from "@/app/actions";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchWithInfiniteScroll = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["character", q],
    queryFn: ({ pageParam }) => getCharacters(q, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      const length = pages.length ?? 1;

      return lastPage.info.pages > length ? length + 1 : undefined;
    },
  });

  const characters = data?.pages?.flatMap((page) => page.results) || [];

  if (isError && !isLoading) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <CharacterLoading />;
  }

  return (
    <div className="space-y-5">
      <CharacterList characters={characters} />
      <LoadMore
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
};

export default SearchWithInfiniteScroll;
