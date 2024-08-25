import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(request: NextRequest) {
  try {
    const session = await request.json();
    const { count, keywords }: { count: number; keywords: string[] } = session;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `${keywords.join(
            ", "
          )}가 들어간 ${count}자 이내의 리뷰를 작성해줘.`,
        },
      ],
    });

    console.log(completion.choices[0].message.content);
    return NextResponse.json({
      ok: true,
      content: completion.choices[0].message.content,
    });
  } catch (err: any) {
    return NextResponse.json({ ok: false, status: err.status, code: err.code });
  }
}
