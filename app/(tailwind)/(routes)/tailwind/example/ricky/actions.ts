"use server";
import { CharacterType, CharactersResponse, EpisodeType } from "./types";

export async function getCharacters(): Promise<CharactersResponse> {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await response.json();

    return characters;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function getCharacter(id: string): Promise<CharacterType> {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    const character = await response.json();

    return character;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function getEpisode(url: string): Promise<EpisodeType> {
  try {
    const response = await fetch(url);
    const character = await response.json();

    return character;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
