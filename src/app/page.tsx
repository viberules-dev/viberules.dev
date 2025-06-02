import Link from "next/link";
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <main className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-20 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"></div>

        <div className="relative z-10">
          <h1 className={`text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 ${firaCode.className}`}>
            <span className="text-slate-400">&lt;</span>
            VibeRules
            <span className="text-slate-500">.dev</span>
            <span className="text-slate-400"> /&gt;</span>
          </h1>
          <p className="text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
            <span className="text-slate-500">Discover, Share, and Master </span>
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              Vibe Coding
            </span>
            <span className="text-slate-500"> Rules.</span>
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
            A professional community for AI-powered development tools, bringing together best practices, resources, and cutting-edge insights.
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="/cursor-rules" className="group">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-indigo-100/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200/50 transition-all duration-500 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-indigo-500/25 transition-all duration-300">
                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                Cursor Rules
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Community-driven collection of Cursor rules to enhance your AI coding experience.
              </p>
            </div>
          </div>
        </Link>

        <Link href="/llm-txt" className="group">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-200/50 transition-all duration-500 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-xl group-hover:shadow-emerald-500/25 transition-all duration-300">
                <svg className="w-8 h-8 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                LLM.txt
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Curated collection of LLM prompts and documentation to optimize AI interactions.
              </p>
            </div>
          </div>
        </Link>

        <Link href="/playground" className="group md:col-span-2 lg:col-span-1">
          <div className="bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-300/50 transition-all duration-500 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-purple-500/25 transition-all duration-300">
                <svg className="w-8 h-8 text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                Playground
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Interactive platform to test and share your AI coding configurations.
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* Community Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-indigo-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-indigo-100/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl transform -translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl transform translate-x-8 translate-y-8"></div>

          <div className="text-center space-y-6 relative z-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Connect with developers worldwide to explore the infinite possibilities of AI-powered coding, share experiences, and grow together.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 hover:from-indigo-600 hover:via-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
