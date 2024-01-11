"use client";

import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import qs from "query-string";
import { useDebounce } from "use-debounce";

const Filtering = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState(() => searchParams.get("q") ?? "");
  const [value] = useDebounce(search, 1000);

  useEffect(() => {
    const query = qs.stringify(
      {
        q: search,
      },
      { skipNull: true, skipEmptyString: true },
    );

    router.push(`?${query}`);
  }, [value, router, search]);

  return (
    <>
      <Input
        className="max-w-md"
        type="search"
        placeholder={`e.g: "search something ..."`}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </>
  );
};

export default Filtering;
