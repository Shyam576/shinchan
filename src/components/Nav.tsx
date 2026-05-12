"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/intro", label: "🎉 Intro" },
  { href: "/bug-hunt", label: "🐛 Bug Hunt" },
  { href: "/test-cases", label: "📋 Test Cases" },
  { href: "/roast-mode", label: "🔥 Roast Mode" },
  { href: "/memories", label: "📸 Memories" },
  { href: "/final", label: "🎂 Final Wish" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="bg-[#FF4D4D] border-b-4 border-[#1E1E1E] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 flex-wrap">
        <Link
          href="/"
          className="font-black text-white text-xl mr-4 shrink-0 drop-shadow-[2px_2px_0px_#1E1E1E]"
        >
          🐞 Bugchan
        </Link>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`px-3 py-1 rounded-full border-2 border-[#1E1E1E] text-sm font-bold transition-all
              ${
                pathname === l.href
                  ? "bg-[#FFD93D] text-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E]"
                  : "bg-white text-[#1E1E1E] hover:bg-[#FFD93D] hover:shadow-[3px_3px_0px_#1E1E1E]"
              }
            `}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
