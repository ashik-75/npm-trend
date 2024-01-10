"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="my-10 max-w-md space-y-5 overflow-hidden rounded-3xl border p-5">
      <h1 className="text-lg font-black">{error.message}</h1>
      <p>please provide another value and try again</p>
      <div className="space-x-2">
        <Button onClick={reset}>Retry</Button>
        <Button
          onClick={() => {
            window.location.href = "/ricky";
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Error;
