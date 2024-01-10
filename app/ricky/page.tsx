import React, { Suspense } from "react";
import CharacterLoading from "./_components/character-loading";
import Filtering from "./_components/filtering";
import { getCharacters } from "./actions";
import { Await } from "@/lib/utils";
import Characters from "./_components/chracters";
import Pagination from "./_components/pagination";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const q = searchParams["q"];
  const page = searchParams["page"];
  const characters = getCharacters(q, page);

  return (
    <div className="space-y-4 p-5" key={q}>
      <h1 className="text-3xl font-black">Rick and morty api</h1>
      <Filtering />
      <Suspense fallback={<CharacterLoading />}>
        <Await promise={characters}>
          {(characters) => {
            return (
              <>
                <Characters characters={characters.results} />
                <Pagination total_page={characters.info.pages} />
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Page;
