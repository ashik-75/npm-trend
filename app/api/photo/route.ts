import { db } from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const photo = await db.photo.create({
      data: {
        userId: 101,
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

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const page = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;
    const limit = searchParams.get("limit")
      ? Number(searchParams.get("limit"))
      : 5;

    const totalItems = await db.photo.count();
    const itemPerpage = 5;
    const totalPage = Math.ceil(totalItems / itemPerpage);

    const photos = await db.photo.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return NextResponse.json({
      page,
      totalPage,
      data: photos,
    });
  } catch (error) {
    console.log("[ALL_PHOTO_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
