"use client";

import { Button } from "@/components/ui/button";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="max-w-md rounded-3xl border p-5">
      <h1 className="mb-3 text-2xl font-bold text-orange-600">
        Root: Something went wrong ,please fix it{" "}
      </h1>
      <Button onClick={reset}>Root Reset</Button>
    </div>
  );
};

export default Error;
