import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <Loader size={30} className="animate-spin" />
      <div>Loading page ...</div>
    </div>
  );
};

export default Loading;
