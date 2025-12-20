export async function generateImage({
  prompt,
  imageBase64,
}: {
  prompt: string
  imageBase64?: string
}) {
  const response = await fetch(
    `https://api-inference.huggingface.co/models/${process.env.HF_MODEL_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: {
          prompt,
          image: imageBase64, // identity reference
        },
        parameters: {
          guidance_scale: 7.5,
          num_inference_steps: 30,
        },
      }),
    }
  )

  if (!response.ok) {
    throw new Error("HF inference failed")
  }

  const blob = await response.blob()
  return Buffer.from(await blob.arrayBuffer()).toString("base64")
}








