"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type PhotoPagination = {
  page?: number;
  total_page?: number;
};

function PhotoPagination({ page, total_page }: PhotoPagination) {
  const router = useRouter();

  if (!page || !total_page) return null;
  return (
    <div className="flex items-center">
      <Button
        disabled={page === 1}
        onClick={() => router.push(`?page=${page - 1}`)}
        variant={"ghost"}
        className="space-x-2"
      >
        <ChevronLeft size={20} />
        <span className="text-sm">Previous</span>
      </Button>

      <Button
        disabled={page === total_page}
        onClick={() => router.push(`?page=${page + 1}`)}
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
