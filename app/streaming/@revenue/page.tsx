import { dummyResponse, sleep } from "@/lib/utils";
import React from "react";

async function getError() {
  throw new Error("Error happenended in invoice");
}

const Revenue = async () => {
  await sleep(6000);
  const res = await getError();

  return (
    <div className="mt-5 max-w-md rounded-3xl border p-5">
      <h1 className="text-5xl font-black text-rose-600">{"FF"}</h1>
    </div>
  );
};

export default Revenue;
