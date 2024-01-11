import React, { useState } from "react";
import { getEpisode } from "../actions";
import { useQuery } from "@tanstack/react-query";
import EpisodeLoader from "./episode-loader";

const Episode = ({ url }: { url: string }) => {
  const {
    data: episode,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["ep", { url }],
    queryFn: () => getEpisode(url),
    enabled: Boolean(url),
  });

  if (!isLoading && isError) {
    return <div className="text-pink-600">Uff, something went wrong</div>;
  }

  if (isLoading) {
    return <EpisodeLoader />;
  }

  if (!episode) {
    return <div>Nothing found</div>;
  }

  return (
    <div className="max-w-md rounded-3xl border p-5">
      <h1 className="text-lg font-bold">{episode.name}</h1>
      <p>{episode.air_date}</p>

      <a
        href={episode.url}
        target="_blank"
        className="underline-offset-2 hover:text-blue-600 hover:underline"
      >
        visit
      </a>
    </div>
  );
};

export default Episode;
