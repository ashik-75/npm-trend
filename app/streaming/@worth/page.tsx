import { dummyResponse, sleep } from "@/lib/utils";
import React from "react";

const Worth = async () => {
  await sleep(5000);
  const res = await dummyResponse("Worth");

  return (
    <div className="mt-5 max-w-md rounded-3xl border p-5">
      <h1 className="text-5xl font-black text-rose-600">{res}</h1>
    </div>
  );
};

export default Worth;
