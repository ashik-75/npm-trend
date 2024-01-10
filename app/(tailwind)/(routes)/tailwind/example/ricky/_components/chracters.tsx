import React from "react";
import { CharacterType } from "../types";
import Character from "./character";

const Characters = async ({ characters }: { characters: CharacterType[] }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {characters.map((ch) => (
        <Character character={ch} key={ch.id} />
      ))}
    </div>
  );
};

export default Characters;
