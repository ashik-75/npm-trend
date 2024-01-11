"use client";

import CharacterLoading from "@/app/_components/character-loading";
import CharacterList from "@/app/_components/chracter-list";
import Pagination from "@/app/_components/pagination";
import { getCharacters } from "@/app/actions";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchWithPagination = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const page = searchParams.get("page");
  const pageNumber = page ? Number(page) : 1;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["chracter-page", pageNumber, q],
    queryFn: () => getCharacters(q, pageNumber),
    placeholderData: keepPreviousData,
  });

  if (isError && !isLoading) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <CharacterLoading />;
  }
  return (
    <div className="space-y-5">
      <CharacterList characters={data?.results} />

      <Pagination total_page={data?.info.pages} />
    </div>
  );
};

export default SearchWithPagination;
