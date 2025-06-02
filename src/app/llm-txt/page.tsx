import { Fira_Code } from 'next/font/google'
import { supabase, type LlmTxtProject } from '../../../lib/supabase'

const firaCode = Fira_Code({ subsets: ['latin'] })

async function getProjects(): Promise<LlmTxtProject[]> {
  if (!supabase) {
    console.error('Supabase admin client not available')
    return []
  }

  const { data, error } = await supabase
    .from('public_llm_txt_projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }

  return data || []
}

export default async function LlmTxtPage() {
  const projects = await getProjects()

  const formatTokens = (tokens: number) => {
    if (tokens >= 1000000) {
      return `${(tokens / 1000000).toFixed(1)}M`
    }
    if (tokens >= 1000) {
      return `${(tokens / 1000).toFixed(1)}K`
    }
    return tokens.toString()
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="text-6xl">🤖</div>
          <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent ${firaCode.className}`}>
            llm.txt
          </h1>
        </div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Discover projects and websites that support the <span className="font-mono bg-slate-100 px-2 py-1 rounded text-emerald-600">llm.txt</span> standard for LLM-friendly documentation
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://llmstxt.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Official Spec
          </a>
          <a
            href="https://llmstxt.site"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View Directory
          </a>
        </div>
      </section>

      {/* Projects List */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Projects Supporting llm.txt</h2>

        {projects.length === 0 ? (
          <div className="text-center text-slate-600 py-12">
            <p className="text-lg">No projects found. Be the first to submit one!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-bold text-lg text-slate-900">{project.name}</h4>
                  <div className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {formatTokens(project.tokens)} tokens
                  </div>
                </div>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <a
                    href={project.llms_txt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-emerald-600 hover:text-emerald-700 font-mono"
                  >
                    📄 llms.txt
                  </a>
                  {project.llms_full_txt && (
                    <a
                      href={project.llms_full_txt}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-emerald-600 hover:text-emerald-700 font-mono"
                    >
                      📄 llms-full.txt ({formatTokens(project.full_tokens || 0)} tokens)
                    </a>
                  )}
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-blue-600 hover:text-blue-700"
                  >
                    🔗 Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Implementation Guide */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Quick Implementation</h2>

        <div className="bg-slate-900 rounded-xl p-6 text-white">
          <h3 className="text-lg font-bold mb-4 text-emerald-400">Basic llm.txt Structure</h3>
          <pre className={`text-sm overflow-x-auto ${firaCode.className}`}>
{`# Project Name

> Brief summary of the project

## Documentation

- [Getting Started](https://example.com/quickstart.md): Overview of project features
- [API Reference](https://example.com/api.md): Detailed API documentation

## Examples

- [Example App](https://example.com/example.py): Complete example application`}
          </pre>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-2">1. Create File</h4>
            <p className="text-sm text-emerald-700">
              Add <code>/llms.txt</code> to your website root
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">2. Add Content</h4>
            <p className="text-sm text-blue-700">
              Include project overview and key resources
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-2">3. Submit</h4>
            <p className="text-sm text-purple-700">
              Add your project to the <a href="https://llmstxt.site" className="underline">directory</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}