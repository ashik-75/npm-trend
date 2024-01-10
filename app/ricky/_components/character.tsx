import React from "react";
import { CharacterType } from "../types";
import Image from "next/image";
import Link from "next/link";

const Character = async ({ character }: { character: CharacterType }) => {
  return (
    <Link href={`/ricky/${character.id}`}>
      <div className="space-y-2 rounded-3xl border p-4 shadow-sm">
        <div className="aspect-h-9 aspect-w-16 overflow-hidden rounded-3xl">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover brightness-50 "
          />
        </div>
        <div>
          <h1 className="line-clamp-1 text-xl font-black">{character.name}</h1>
          <p>{character.status}</p>
        </div>
      </div>
    </Link>
  );
};

export default Character;
