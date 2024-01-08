import React from "react";
import Navbar from "./_components/navbar";

const TailwindLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <nav className="fixed left-0 top-0 z-10 h-20 w-full overflow-hidden border-b dark:border-neutral-700">
        <Navbar />
      </nav>

      <main className="h-full pt-20">{children}</main>
    </div>
  );
};

export default TailwindLayout;
