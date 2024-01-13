import { Loader } from "lucide-react";
import React, { ReactNode, Suspense } from "react";

const StreamLayout = ({
  children,
  invoice,
  revenue,
  worth,
  payment,
}: {
  children: ReactNode;
  worth: ReactNode;
  invoice: ReactNode;
  revenue: ReactNode;
  payment: ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>

      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-4">
        <div>{invoice}</div>

        <div>{worth}</div>
        <div>{revenue}</div>
        <div>{payment}</div>
      </div>
    </div>
  );
};

export default StreamLayout;
