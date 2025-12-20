"use client"

import { useState } from "react"
import ImageUpload from "@/components/ImageUpload"
import PromptForm from "@/components/PromptForm"
import ResultImage from "@/components/ResultImage"

export default function Home() {
  const [imageBase64, setImageBase64] = useState<string>()
  const [result, setResult] = useState<string>()
  const [loading, setLoading] = useState(false)

  const generate = async (prompt: string) => {
    setLoading(true)
    setResult(undefined)

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        imageBase64,
      }),
    })

    const data = await res.json()
    setResult(data.image)
    setLoading(false)
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">
        Identity-Preserving Creator Studio
      </h1>

      <ImageUpload onChange={setImageBase64} />
      <PromptForm onSubmit={generate} />

      {loading && <p>Generating…</p>}
      <ResultImage src={result} />
    </main>
  )
}








