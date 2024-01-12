import CharacterList from "@/app/_components/chracter-list";
import { getCharacters } from "@/app/actions";
import React from "react";

const ServerSide = async () => {
  const characters = await getCharacters();

  return (
    <div>
      <CharacterList characters={characters.results} />
    </div>
  );
};

export default ServerSide;
