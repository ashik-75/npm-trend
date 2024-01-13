import React from "react";
import { getCharacter, getCharacters } from "../actions";
import Image from "next/image";
import { notFound } from "next/navigation";
import Episodes from "./episodes";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: { characterId: string };
}): Promise<Metadata> => {
  const character = await getCharacter(params.characterId);

  return {
    title: character.name,
  };
};

// export const generateStaticParams = async () => {
//   const character = await getCharacters();

//   return character.results.map((ch) => ({
//     characterId: `${ch.id}`,
//   }));
// };

const CharacterDetails = async ({
  params,
}: {
  params: { characterId: string };
}) => {
  const character = await getCharacter(params.characterId);
  if (!character) return notFound();

  return (
    <div className="container grid grid-cols-1 gap-5 md:grid-cols-2">
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
        <ul>
          <li>Species: {character.species}</li>
          <li>Gender: {character.gender}</li>
          <li>Status: {character.status}</li>
        </ul>
        <Episodes episodes={character.episode} />
      </div>
    </div>
  );
};

export default CharacterDetails;
