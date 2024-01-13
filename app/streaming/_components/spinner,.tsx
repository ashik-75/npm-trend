import { Loader } from "lucide-react";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Loader className="animate-spin" size={30} />
    </div>
  );
};

export default Spinner;
