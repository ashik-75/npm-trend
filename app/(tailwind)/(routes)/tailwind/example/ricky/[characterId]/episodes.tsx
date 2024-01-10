"use client";

import { cn } from "@/lib/utils";
import React, { Suspense, useState } from "react";
import Episode from "./episode";
import EpisodeLoader from "./episode-loader";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function getEpisode(ep: string) {
  const splitString = ep.split("/");

  return splitString.at(splitString.length - 1);
}

const Episodes = ({ episodes }: { episodes: string[] }) => {
  const [episode, setEpisode] = useState("");
  return (
    <div className="space-y-5">
      <ScrollArea>
        <div className="flex gap-5 py-4">
          {episodes?.slice(0, 20)?.map((ep) => (
            <li
              onClick={() => setEpisode(ep)}
              className={cn(
                "shrink-0 cursor-pointer rounded-3xl border px-2 py-1 text-sm",
                ep === episode
                  ? "border-zinc-800 dark:border-zinc-100"
                  : "border-zinc-200 dark:border-zinc-700",
              )}
            >
              Episode {getEpisode(ep)}
            </li>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <Suspense fallback={<EpisodeLoader />}>
        {episode && <Episode url={episode} />}
      </Suspense>
    </div>
  );
};

export default Episodes;
