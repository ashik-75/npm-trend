"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Episode from "./episode";
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
            <p
              onClick={() => setEpisode(ep)}
              className={cn(
                "shrink-0 cursor-pointer rounded-3xl border px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300",
                ep === episode
                  ? "border-zinc-800 dark:border-zinc-100"
                  : "border-zinc-200 dark:border-zinc-700",
              )}
            >
              Episode {getEpisode(ep)}
            </p>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {episode && <Episode url={episode} />}
    </div>
  );
};

export default Episodes;
