"use client";

import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent, useState } from "react";
import qs from "query-string";

const PhotoSearch: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("search") || "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const per_page = searchParams.get("per_page");

    const info = qs.stringify(
      {
        search,
        page: 1,
        per_page,
      },
      { skipNull: true, skipEmptyString: true },
    );

    router.push(`/photo/?${info}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md">
        <Input
          value={search}
          placeholder={`e.g: "search photo"`}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default PhotoSearch;
