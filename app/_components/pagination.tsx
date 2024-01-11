"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import qs from "query-string";

const Pagination = ({ total_page }: { total_page?: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const q = searchParams.get("q");

  if (!total_page || total_page < 2) {
    return null;
  }

  const handlePagination = (type: "prev" | "next") => {
    let query;
    if (type === "prev") {
      query = qs.stringify(
        {
          q,
          page: page - 1,
        },
        { skipEmptyString: true, skipNull: true },
      );
    } else {
      query = qs.stringify(
        {
          q,
          page: page + 1,
        },
        { skipEmptyString: true, skipNull: true },
      );
    }
    router.push(`?${query}`);
  };
  return (
    <div className="space-x-2 py-10">
      <Button
        variant={"outline"}
        disabled={page < 2}
        onClick={() => handlePagination("prev")}
      >
        Previous
      </Button>
      <Button
        variant={"outline"}
        disabled={page === total_page}
        onClick={() => handlePagination("next")}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
