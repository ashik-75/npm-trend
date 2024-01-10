import React from "react";
import { sleep } from "@/lib/utils";
import { getCharacters } from "../actions";
import Characters from "./chracters";

const CharacterPage = async () => {
  await sleep(4000);
  const characters = await getCharacters();

  return (
    <div>
      <Characters characters={characters.results} />
    </div>
  );
};

export default CharacterPage;
