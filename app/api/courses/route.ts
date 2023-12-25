export const dynamic = "force-dynamic";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const course = await db.course.create({
      data: {
        title,
        userId,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE]", error);
    return new NextResponse("Something went wrong", {
      status: 401,
    });
  }
}

export async function GET() {
  try {
    const { userId } = auth();
    console.log({ userId });
    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }
    const courses = await db.course.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.log("[COURSE]", error);
    return new NextResponse("Something went wrong", {
      status: 401,
    });
  }
}
