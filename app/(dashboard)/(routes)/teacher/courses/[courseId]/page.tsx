import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import TitleForm from "./_components/title-form";
import DescriptionForm from "./_components/description-form";
import ImageUploadForm from "./_components/image-upload";
import CategoryForm from "./_components/category-form";
import PriceForm from "./_components/price-form";
import AttachmentForm from "./_components/attachment-form";
import ChapterForm from "./_components/chapter-form";

const CourseDetails = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();
  const courseId = params.courseId;

  if (!userId) {
    return redirect("/");
  }

  const course = await db.course.findUnique({
    where: {
      userId,
      id: params.courseId,
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          name: "asc",
        },
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.price,
    course.imageUrl,
    course.isPublished,
  ];
  const completedFields = requiredFields.filter(Boolean);

  const fieldStatus = `${completedFields.length}/${requiredFields.length}`;

  return (
    <div className="space-y-10 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-zinc-600">Course Setup</h1>
        <span className=" text-zinc-600">Completed field({fieldStatus})</span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-5">
          <TitleForm initialData={course} courseId={courseId} />
          <DescriptionForm initialData={course} courseId={courseId} />
          <ImageUploadForm initialData={course} courseId={courseId} />
          <CategoryForm
            initialData={course}
            courseId={courseId}
            options={categories.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
          />
        </div>

        <div className="space-y-5">
          <PriceForm initialData={course} courseId={courseId} />
          <AttachmentForm initialData={course} courseId={courseId} />
          <ChapterForm initialData={course} courseId={courseId} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
