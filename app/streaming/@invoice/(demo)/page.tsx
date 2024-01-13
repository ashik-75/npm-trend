import { dummyResponse, sleep } from "@/lib/utils";
import React from "react";

const Invoice = async () => {
  await sleep(6000);
  // const res = await dummyResponse("Invoice");
  throw new Error("Something bad happen");

  return (
    <div className="mt-5 max-w-md rounded-3xl border p-5">
      <h1 className="text-5xl font-black text-rose-600">{""}</h1>
    </div>
  );
};

export default Invoice;
