import { db } from "@/lib/db";
import React from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ChapterDescriptionForm from "./_components/chapter-description-form";
import ChapterTitleForm from "./_components/chapter-title-form";
import ChapterAccessForm from "./_components/chapter-access-form";
import ChapterVideoForm from "./_components/chapter-video-upload";

const ChapterDetails = async ({
  params,
}: {
  params: { chapterId: string; courseId: string };
}) => {
  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId,
    },
    include: {
      muxData: true,
    },
  });

  if (!chapter) {
    return redirect("/");
  }

  return (
    <div className="space-y-5 p-6">
      <Link href={`/teacher/courses/${params.courseId}`}>
        <Button
          variant={"ghost"}
          className="flex items-end justify-between gap-x-2"
        >
          <ArrowLeft size={15} /> Back to course
        </Button>
      </Link>
      <div>
        <h1 className="text-xl font-medium">Chapter Details</h1>
        <p className="text-sm text-zinc-700">
          Figure what what needs in chapter to show the student
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-4">
          <ChapterTitleForm
            initialData={chapter}
            chapterId={params.chapterId}
            courseId={params.courseId}
          />

          <ChapterDescriptionForm
            initialData={chapter}
            chapterId={params.chapterId}
            courseId={params.courseId}
          />
        </div>

        <div className="space-y-5">
          <ChapterAccessForm
            initialData={chapter}
            chapterId={params.chapterId}
            courseId={params.courseId}
          />
          <ChapterVideoForm
            initialData={chapter}
            chapterId={params.chapterId}
            courseId={params.courseId}
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterDetails;
