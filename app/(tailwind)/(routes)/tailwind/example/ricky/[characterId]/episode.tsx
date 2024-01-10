import React, { useState } from "react";
import { getEpisode } from "../actions";
import { useQuery } from "@tanstack/react-query";

const Episode = async ({ url }: { url: string }) => {
  const [local, setLocal] = useState("f");
  const ep = await getEpisode(url);

  console.log({ ep });

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["ep", { url }],
  //   queryFn: () => getEpisode(url),
  // });

  // console.log({ data, isLoading, isError });

  return (
    <div className="max-w-md rounded-3xl border p-5">
      <span>{ep.id}</span>
      <h1>{ep.name}</h1>
      <p>{ep.air_date}</p>
      <p>{ep.created}</p>
      <p>{ep.url}</p>
    </div>
  );
};

export default Episode;
