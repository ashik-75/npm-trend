import React from "react";
import { CharacterType } from "../types";
import Image from "next/image";
import Link from "next/link";

const Character = ({ character }: { character: CharacterType }) => {
  return (
    <Link href={`/${character.id}`}>
      <div className="space-y-2 rounded-3xl border p-4 shadow-sm">
        <div className="aspect-h-16 aspect-w-16 overflow-hidden rounded-xl">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover opacity-90 duration-700 hover:scale-110 hover:opacity-100"
          />
        </div>
        <div>
          <h1 className="line-clamp-1 text-xl font-black text-zinc-600 dark:text-zinc-300">
            {character.name}
          </h1>
          <p>{character.status}</p>
        </div>
      </div>
    </Link>
  );
};

export default Character;
