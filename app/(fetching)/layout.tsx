import React from "react";
import Filtering from "../_components/filtering";

const DataFetchingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="space-y-5">
      <Filtering />
      <div>{children}</div>
    </div>
  );
};

export default DataFetchingLayout;
