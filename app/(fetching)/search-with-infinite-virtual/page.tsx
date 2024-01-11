"use client";

import CharacterLoading from "@/app/_components/character-loading";
import CharacterList from "@/app/_components/chracter-list";
import { getCharacters } from "@/app/actions";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

const SearchWithVirtual = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const page = searchParams.get("page");
  const pageNumber = page ? Number(page) : 1;

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
    getNextPageParam: (lastPage) =>
      lastPage.info.pages > pageNumber ? pageNumber + 1 : undefined,
  });

  const characters = data?.pages?.flatMap((page) => page.results);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20 && hasNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  if (isError && !isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <CharacterLoading />;
  }

  return (
    <div>
      <CharacterList characters={characters} />

      <div className="flex h-24 items-center justify-center">
        {isFetchingNextPage && <Loader size={50} className="animate-spin" />}
      </div>
    </div>
  );
};

export default SearchWithVirtual;
