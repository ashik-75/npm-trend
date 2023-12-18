import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url") as string;

    const data = await fetch(url).then((d) => d.json());
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}
