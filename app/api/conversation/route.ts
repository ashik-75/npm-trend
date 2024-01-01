import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const payload = await req.json();
    const { messages } = payload;

    if (!userId) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Message is required", { status: 403 });
    }

    const response = await openai.chat.completions.create({
      messages,
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_API]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
