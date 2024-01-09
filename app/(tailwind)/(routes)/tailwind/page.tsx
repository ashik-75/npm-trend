import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import CardList from "@/app/(tailwind)/_components/card-list";

const Home = () => {
  return (
    <div className="h-full space-y-5 p-5 md:p-10">
      <h1>Show some cool example</h1>
      <Suspense fallback={<div>Loading ....</div>}>
        <CardList />
      </Suspense>
    </div>
  );
};

export default Home;
