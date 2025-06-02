import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VibeRules.dev',
  description: 'Cursor Rules 社区',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
