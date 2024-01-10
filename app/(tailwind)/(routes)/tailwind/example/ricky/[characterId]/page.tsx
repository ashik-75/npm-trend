import React from "react";
import { getCharacter } from "../actions";
import Image from "next/image";
import { notFound } from "next/navigation";
import Episodes from "./episodes";

const CharacterDetails = async ({
  params,
}: {
  params: { characterId: string };
}) => {
  const character = await getCharacter(params.characterId);
  if (!character) return notFound();

  return (
    <div className="container grid grid-cols-2 gap-5 p-5">
      <div>
        <div className="aspect-h-9 aspect-w-16 relative overflow-hidden rounded-3xl">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover "
          />
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="text-3xl font-black">{character.name}</h1>
        <Episodes episodes={character.episode} />
      </div>
    </div>
  );
};

export default CharacterDetails;
