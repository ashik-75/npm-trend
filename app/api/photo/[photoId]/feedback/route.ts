import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import clerkClient from "@clerk/clerk-sdk-node";
export async function POST(
  req: Request,
  { params }: { params: { photoId: string } },
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }
    const user = await clerkClient.users.getUser(userId);
    const payload = await req.json();

    const photo = await db.feedback.create({
      data: {
        userId,
        photoId: params.photoId,
        username: user.firstName || "",
        photoUrl: user?.imageUrl,
        description: payload.description,
      },
    });

    return NextResponse.json(photo);
  } catch (error) {
    console.log("[FEEDBACK_CREATE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
