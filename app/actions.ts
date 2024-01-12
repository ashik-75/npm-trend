// "use server";
import axios from "axios";
import { CharacterType, CharactersResponse, EpisodeType } from "./types";

export async function getCharacters(
  query?: string,
  page?: number,
): Promise<CharactersResponse> {
  const url = `https://rickandmortyapi.com/api/character/?name=${
    query || ""
  }&page=${page || 1}`;
  console.log("FETCH ON SERVER SIDE");
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const characters = await response.json();
  return characters;
}

export async function fetchInfiniteCharacter(
  url: string,
): Promise<CharactersResponse> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const characters = await response.json();
  return characters;
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
