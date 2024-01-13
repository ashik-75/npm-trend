import { dummyResponse, sleep } from "@/lib/utils";
import React from "react";

const Invoice = async () => {
  await sleep(2000);
  const res = await dummyResponse("Invoice");

  return (
    <div className="mt-5 max-w-md rounded-3xl border p-5">
      <h1 className="text-5xl font-black text-rose-600">{res}</h1>
    </div>
  );
};

export default Invoice;
