import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="space-y-5">
      <div className="space-x-5 rounded-xl border p-2">
        <Link href={"/streaming/cashout"}>Cashout</Link>
        <Link href={"/streaming/history"}>History</Link>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
