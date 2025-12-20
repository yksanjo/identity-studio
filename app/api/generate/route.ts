import { NextResponse } from "next/server"
import { generateImage } from "@/lib/hf"

export async function POST(req: Request) {
  try {
    const { prompt, imageBase64 } = await req.json()

    const image = await generateImage({
      prompt,
      imageBase64,
    })

    return NextResponse.json({
      image: `data:image/png;base64,${image}`,
    })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
}








