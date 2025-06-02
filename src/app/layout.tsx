import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VibeRules.dev',
  description: 'Discover, Share, and Master Coding Rules. A professional community for AI-powered development tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Header Navigation */}
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
          <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              VibeRules.dev
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/cursor-rules" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200">
                Rules
              </Link>
              <Link href="/llm-txt" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200">
                LLM.txt
              </Link>
              <Link href="/playground" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full">
                Playground
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="pt-16 min-h-screen">
          <div className="max-w-6xl mx-auto px-6 py-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
