import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; attachmentId: string } },
) {
  try {
    const { userId } = auth();
    const { attachmentId, courseId } = params;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownerOfCourse = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!ownerOfCourse) {
      return new NextResponse("Access your own course", {
        status: 401,
      });
    }

    const attachment = await db.attachment.delete({
      where: {
        id: attachmentId,
        courseId,
      },
    });
    return NextResponse.json(attachment);
  } catch {
    console.log("[ATTACHMENT_DELETE]");

    return new NextResponse("Server error", { status: 500 });
  }
}
