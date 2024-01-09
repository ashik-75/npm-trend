import Providers from "@/providers/query-provider";
import React from "react";

const PhotoLayout = ({ children }: { children: React.ReactNode }) => {
  return <Providers>{children}</Providers>;
};

export default PhotoLayout;
