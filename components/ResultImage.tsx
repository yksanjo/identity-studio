export default function ResultImage({ src }: { src?: string }) {
  if (!src) return null

  return (
    <img
      src={src}
      alt="Generated"
      className="mt-4 max-w-full rounded"
    />
  )
}








