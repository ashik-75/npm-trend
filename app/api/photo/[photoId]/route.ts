import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { photoId: string } },
) => {
  try {
    return NextResponse.json({ protoId: params.photoId });
  } catch (error) {
    console.log("GET_PHOTO", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

// export async function GET()
