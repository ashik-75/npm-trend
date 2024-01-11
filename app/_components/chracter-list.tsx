import React from "react";
import { CharacterType } from "../types";
import Character from "./character";

const CharacterList = ({
  characters,
}: {
  characters: CharacterType[] | undefined;
}) => {
  if (!characters || characters.length === 0) {
    return <div>Uff, nothing found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {characters.map((ch) => (
        <Character character={ch} key={ch.id} />
      ))}
    </div>
  );
};

export default CharacterList;
