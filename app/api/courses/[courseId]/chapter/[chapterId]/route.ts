import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!,
);

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } },
) {
  try {
    const values = await req.json();
    const { chapterId, courseId } = params;
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("UnAuthorized", { status: 4000 });
    }

    const ownerChapter = await db.course.findFirst({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!ownerChapter) {
      return new NextResponse("Unauthorized", { status: 400 });
    }

    const updatedChapter = await db.chapter.update({
      where: {
        id: chapterId,
        courseId,
      },
      data: {
        ...values,
      },
    });

    if (values.videoUrl) {
      const existingMuxData = await db.muxData.findFirst({
        where: {
          chapterId: params.chapterId,
        },
      });

      if (existingMuxData) {
        await Video.Assets.del(existingMuxData.assetId);
        await db.muxData.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }

      const asset = await Video.Assets.create({
        input: values.videoUrl,
        playback_policy: "public",
        test: false,
      });

      await db.muxData.create({
        data: {
          chapterId: params.chapterId,
          assetId: asset.id,
          playbackId: asset.playback_ids?.[0]?.id,
        },
      });
    }

    return NextResponse.json(updatedChapter);
  } catch (error) {
    console.log("[CHAPTER_UPDATE]", error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
