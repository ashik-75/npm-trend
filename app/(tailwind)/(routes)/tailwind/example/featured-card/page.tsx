import BlurImage from "@/components/blur-image";
import { Rocket } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-5 p-6">
      <div className="max-w-md rounded-3xl border p-4 dark:border-zinc-600">
        <BlurImage url="/image/four.jpg" />
        <div className="pt-4">
          <h1 className="font-inter text-xl font-bold text-zinc-700 dark:text-zinc-400">
            San fransisco LA office
          </h1>
          <p className="font-inter text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            He is nice person for maintain company growth and team management,
            you guys should follow here
          </p>
        </div>
      </div>

      <div className="space-y-2 rounded-3xl border p-5 md:max-w-sm dark:border-zinc-600">
        <div className="flex items-center gap-2">
          <Rocket />
          <h1 className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-xl font-black text-transparent">
            Introducing Hashnode Pro
          </h1>
        </div>
        <p className="">
          Level up your publishing with our new suite of premium features
        </p>
        <div className="flex justify-between gap-4">
          <button className="w-full rounded-3xl border bg-gradient-to-r from-purple-400 to-blue-600 px-4 py-2 text-sm tracking-wider text-white dark:border-zinc-600">
            Upgrade Now
          </button>
          <button className="w-full rounded-3xl border px-4 py-2 dark:border-zinc-600">
            Explore Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
