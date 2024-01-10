import React, { Suspense } from "react";
import CharacterPage from "./_components/chracter-page";
import CharacterLoading from "./_components/character-loading";

const Page = async ({ searchParams }: { searchParams: string }) => {
  return (
    <div className="container p-5">
      <h1 className="mb-10 text-3xl font-black selection:bg-pink-700">
        Rick and morty api
      </h1>
      <Suspense fallback={<CharacterLoading />}>
        <CharacterPage />
      </Suspense>
    </div>
  );
};

export default Page;
