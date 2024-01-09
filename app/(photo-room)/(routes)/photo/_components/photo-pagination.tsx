"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

type PhotoPagination = {
  total_page?: number;
};

function PhotoPagination({ total_page }: PhotoPagination) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const per_page = searchParams.get("per_page")
    ? Number(searchParams.get("per_page"))
    : 5;
  const search = searchParams.get("search");

  if (!total_page) return null;

  function handleQs(pageNumber: number) {
    return qs.stringify(
      {
        search,
        page: pageNumber,
        per_page,
      },
      { skipNull: true, skipEmptyString: true },
    );
  }
  const handlePagination = (btnType: "previous" | "next") => {
    if (btnType === "previous") {
      const query = handleQs(page - 1);
      router.push(`/photo/?${query}`);
    } else {
      const query = handleQs(page + 1);
      router.push(`/photo/?${query}`);
    }
  };

  return (
    <div className="flex items-center">
      <Button
        disabled={page === 1}
        onClick={() => handlePagination("previous")}
        variant={"ghost"}
        className="space-x-2"
      >
        <ChevronLeft size={20} />
        <span className="text-sm">Previous</span>
      </Button>

      <Button
        disabled={page === total_page}
        onClick={() => handlePagination("next")}
        variant={"ghost"}
        className="space-x-2"
      >
        <span className="text-sm">Next</span>
        <ChevronRight size={20} />
      </Button>
    </div>
  );
}

export default PhotoPagination;
