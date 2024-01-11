import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <ul className="list list-decimal space-y-2">
      <li className="underline">
        <Link href={"/search-with-pagination"}>Search with pagination</Link>
      </li>
      <li className="underline">
        <Link href={"/search-with-infinite-scroll"}>
          Search with infinite scroll
        </Link>
      </li>
      <li className="underline">
        <Link href={"/search-with-infinite-virtual"}>
          Search with infinite virtual
        </Link>
      </li>
    </ul>
  );
};

export default Page;
