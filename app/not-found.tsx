import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className=" max-w-md space-y-2">
        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="text-xl font-bold">Not Found</p>
        <Link href={"/"} className="underline underline-offset-2">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
