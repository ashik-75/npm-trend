import { dummyResponse, sleep } from "@/lib/utils";
import React from "react";

const payment = async () => {
  await sleep(5000);
  // throw new Error("Something bad happen in analytics");
  const res = await dummyResponse("Payment: $1290.98");

  return (
    <div className="mt-5 max-w-md rounded-3xl border p-5">
      <h1 className="text-2xl font-black text-rose-600">{res}</h1>
    </div>
  );
};

export default payment;
