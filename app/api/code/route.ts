// app/api/chat/route.ts

import { OpenAI } from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";

export const runtime = "edge";

const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  try {
    const { messages } = await req.json();

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log("[CODE_GENERATION]", error);
    return new NextResponse("Internal sever error", { status: 500 });
  }
}
