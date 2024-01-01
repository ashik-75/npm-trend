import React from "react";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full">
      <aside className="hidden bg-neutral-800 md:fixed md:inset-y-0 md:flex md:w-[250px]">
        <Sidebar />
      </aside>
      <nav className="fixed inset-y-0 h-[80px] w-full bg-neutral-900 md:left-[250px] md:hidden">
        <Navbar />
      </nav>
      <main className="h-full overflow-y-auto bg-black pt-[80px] text-neutral-50 md:pl-[250px] md:pt-[0]">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
