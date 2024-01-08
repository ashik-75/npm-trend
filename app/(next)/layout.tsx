import React from "react";
import Navbar from "./_components/navbar";

const NextLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="fixed left-0 top-0 z-10 h-20 w-full overflow-hidden border-b dark:border-neutral-700">
        <Navbar />
      </nav>

      <main className="mx-auto h-full max-w-7xl pt-20">{children}</main>
    </div>
  );
};

export default NextLayout;
