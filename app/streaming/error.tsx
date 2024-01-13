"use client";

import { Button } from "@/components/ui/button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="max-w-md rounded-3xl border p-5">
      <h1 className="mb-3 text-2xl font-bold">Root: {error.message}</h1>
      <Button onClick={reset}>Root Reset</Button>
    </div>
  );
};

export default Error;
