import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } },
) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chapter = await db.chapter.findFirst({
      where: {
        courseId,
      },
      orderBy: {
        position: "desc",
      },
    });

    const lastPosition = chapter?.position ? chapter.position + 1 : 1;

    const newChapter = await db.chapter.create({
      data: {
        title,
        position: lastPosition,
        courseId,
      },
    });

    return NextResponse.json(newChapter);
  } catch (error) {
    console.log("[CHAPTER]", error);

    return new NextResponse("Internal error", {
      status: 500,
      statusText: "Internal Error",
    });
  }
}
