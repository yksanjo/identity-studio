"use client"

export default function ImageUpload({
  onChange,
}: {
  onChange: (base64: string) => void
}) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      onChange(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleFile}
    />
  )
}








