import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <ul className="list list-decimal space-y-2 p-5">
      <li className="underline">
        <Link href={"/server-side"}>Server Side</Link>
      </li>
      <li className="underline">
        <Link href={"/client-side"}>client side</Link>
      </li>
      <li className="underline">
        <Link href={"/streaming"}>Streaming</Link>
      </li>
    </ul>
  );
};

export default Page;
