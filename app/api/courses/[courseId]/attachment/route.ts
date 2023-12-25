import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const courseId = params.courseId;
    const { url } = await req.json();
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const course = await db.course.findUnique({
      where: {
        userId,
        id: courseId,
      },
    });

    if (!course) {
      return new NextResponse("Course Not found", { status: 400 });
    }

    const attachment = await db.attachment.create({
      data: {
        name: url?.split("/")?.pop(),
        url,
        courseId,
      },
    });

    return NextResponse.json(attachment);
  } catch {
    console.log("[Attachment]");
    return new NextResponse("Server Error", {
      status: 500,
    });
  }
}
