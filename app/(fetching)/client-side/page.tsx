"use client";

import CharacterLoading from "@/app/_components/character-loading";
import CharacterList from "@/app/_components/chracter-list";
import { getCharacters } from "@/app/actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ClientPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["chs"],
    queryFn: () => getCharacters(),
  });

  if (isError && !isLoading) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <CharacterLoading />;
  }

  return (
    <div>
      <CharacterList characters={data?.results} />
    </div>
  );
};

export default ClientPage;
