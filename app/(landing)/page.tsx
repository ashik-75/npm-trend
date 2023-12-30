import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="h-full bg-zinc-900 text-zinc-100">
      <nav className="border-b border-b-zinc-600 ">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-zinc-600 pl-10 md:border-x">
          <b>MUX</b>
          <div className="flex flex-col divide-y">
            <Link href={"/sign-up"}>
              <button className="border-l border-zinc-600 px-5 py-2 uppercase tracking-wide text-zinc-400">
                Sign UP
              </button>
            </Link>
            <Link href={"/sign-in"}>
              <button className="border-l border-zinc-600 px-5 py-2 uppercase tracking-wide text-zinc-400">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <section className=" border-b border-zinc-600 ">
        <div className="mx-auto max-w-7xl space-y-8 border-zinc-600 p-10 py-20 md:border-x">
          <h1 className="text-3xl font-extrabold tracking-widest">
            THE INTERNET&apos;S VIDEO INFRASTRUCTURE
          </h1>
          <div className="max-w-xl text-justify">
            The API that enables developers to build unique live and on-demand
            video experiences. Everything needed to build a beautiful web player
            for Mux Video — designed for any page and app, all from one
            platform.
          </div>

          <div className="space-x-10">
            <Link href={"/dashboard"}>
              <button className="rounded-full border px-16 py-4 uppercase tracking-widest">
                Get Started
              </button>
            </Link>

            <button className="rounded-full border bg-zinc-50 px-16 py-4 uppercase tracking-widest text-black">
              View demo
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-600">
        <div className="mx-auto grid max-w-7xl grid-cols-1  gap-10  border-zinc-600 p-10 md:grid-cols-2 md:border-x">
          <div className="text-4xl font-extrabold tracking-wide">
            The video platform for your platform
          </div>

          <div className=" selection:bg-pink-500">
            Mux solves the hard problems software teams face when building
            video, from live-streaming platforms to on-demand video catalogs and
            anything in between. Businesses use Mux to launch video features in
            days, customize the player experience, and monitor video streaming
            performance, all while scaling seamlessly to the worlds largest
            audiences.
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
