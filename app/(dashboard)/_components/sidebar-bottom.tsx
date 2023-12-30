import { LogOut } from "lucide-react";
import React from "react";

const SidebarBottom = () => {
  return (
    <div>
      <div className="flex items-end justify-between rounded-xl bg-neutral-700 p-5 shadow-sm">
        <span>Ashik</span>
        <button>
          <LogOut />
        </button>
      </div>
    </div>
  );
};

export default SidebarBottom;
