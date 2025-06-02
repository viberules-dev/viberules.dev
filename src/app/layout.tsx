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
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        {/* Header Navigation */}
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300">
              VibeRules.dev
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/cursor-rules" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 relative group">
                Rules
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/llm-txt" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 relative group">
                LLM.txt
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/playground" className="text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 hover:from-indigo-600 hover:via-blue-600 hover:to-purple-600 px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:scale-105">
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
