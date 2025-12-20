import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Identity-Preserving Creator Studio',
  description: 'Generate images while preserving identity using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}








