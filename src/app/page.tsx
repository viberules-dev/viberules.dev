import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-16">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
          VibeRules.dev
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Discover, Share, and Master Coding Rules.
        </p>
        <p className="text-lg text-slate-500 max-w-xl mx-auto">
          A professional community for AI-powered development tools, bringing together best practices, resources, and cutting-edge insights.
        </p>
      </section>

      {/* Navigation Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/cursor-rules" className="group">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 h-full">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Cursor Rules
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Community-driven collection of Cursor rules to enhance your AI coding experience.
              </p>
            </div>
          </div>
        </Link>

        <Link href="/llm-txt" className="group">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 h-full">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-green-600 transition-colors">
                LLM.txt
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Curated collection of LLM prompts and documentation to optimize AI interactions.
              </p>
            </div>
          </div>
        </Link>

        <Link href="/playground" className="group">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-300 h-full">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                Playground
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Interactive platform to test and share your AI coding configurations.
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* Additional Section */}
      <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Join Our Community
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Connect with developers worldwide to explore the infinite possibilities of AI-powered coding, share experiences, and grow together.
          </p>
        </div>
      </section>
    </main>
  );
}
