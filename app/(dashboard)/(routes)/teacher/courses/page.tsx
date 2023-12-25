import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Courses = async () => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/sign-in");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1>All Courses</h1>

        <Link href={`/teacher/create`}>
          <Button>Add Coureses</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id} className="border p-4">
            <Link href={`/teacher/courses/${course.id}`}>
              <h1>{course.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
