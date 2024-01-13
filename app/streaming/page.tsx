import React, { Suspense } from "react";
import { getCharacters } from "../actions";
import { Await } from "@/lib/utils";
import CharacterList from "../_components/chracter-list";

import Spinner from "./_components/spinner,";

const Streaming = () => {
  const chs = getCharacters();
  return (
    <div>
      <h1 className="py-5 text-4xl font-bold">Show the my fav</h1>
      <Suspense fallback={<Spinner />}>
        <Await promise={chs}>
          {({ results }) => <CharacterList characters={results.slice(0, 3)} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default Streaming;
