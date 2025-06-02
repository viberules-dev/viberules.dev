import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">VibeRules.dev 社区首页</h1>
      <ul className="space-y-2 text-xl">
        <li><Link href="/vibecoding">Vibecoding 资料、工具与新闻</Link></li>
        <li><Link href="/llm-txt">LLM TXT Collections</Link></li>
        <li><Link href="/cursor-rules">Cursor Rules 社区</Link></li>
        <li><Link href="/playground">Cursor Rules Playground</Link></li>
      </ul>
    </main>
  );
}
