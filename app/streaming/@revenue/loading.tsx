import { Loader, Loader2 } from "lucide-react";
import React from "react";

const Spinner = () => {
  return (
    <div className="mt-5 flex h-full max-w-3xl flex-col items-center justify-center rounded-3xl border p-5">
      <Loader2 className="animate-spin" size={30} />

      <p>Loading for revenue</p>
    </div>
  );
};

export default Spinner;
