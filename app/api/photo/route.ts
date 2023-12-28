import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }

    const body = await req.json();

    const photo = await db.photo.create({
      data: {
        userId,
        ...body,
      },
    });

    console.log({ photo });

    return NextResponse.json(photo);
  } catch (error) {
    console.log("[PHOTO_CREATE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET() {
  try {
    const photos = await db.photo.findMany();

    return NextResponse.json(photos);
  } catch (error) {
    console.log("[ALL_PHOTO_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
