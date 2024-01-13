"use client";

import { Button } from "@/components/ui/button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="mt-5 max-w-md rounded-3xl border border-pink-700 p-5">
      <h1 className="mb-3 text-2xl font-bold">{error.message}</h1>
      <Button onClick={reset}>Revenue Reset</Button>
    </div>
  );
};

export default Error;
