"use client"

import { useState } from "react"

export default function PromptForm({
  onSubmit,
}: {
  onSubmit: (prompt: string) => void
}) {
  const [prompt, setPrompt] = useState("")

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image style..."
        className="w-full border p-2"
      />
      <button
        onClick={() => onSubmit(prompt)}
        className="mt-2 px-4 py-2 bg-black text-white"
      >
        Generate
      </button>
    </div>
  )
}








