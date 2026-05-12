"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/intro",      label: "Intro"         },
  { href: "/bug-hunt",   label: "Little Things" },
  { href: "/test-cases", label: "True Things"   },
  { href: "/roast-mode", label: "Field Notes"   },
  { href: "/memories",   label: "Memories"      },
  { href: "/final",      label: "The End"       },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="bg-[#FFF8E7] border-b-2 border-[#1F1F1F] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-5 py-3 flex items-center gap-2 flex-wrap">
        <Link
          href="/"
          className="text-[#FF5A5F] text-lg font-semibold mr-4 shrink-0"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          🐞 Birthday
        </Link>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={[
              "px-3 py-1 rounded-full border-2 border-[#1F1F1F] text-sm font-semibold transition-all",
              pathname === l.href
                ? "bg-[#FFE66D] shadow-[2px_2px_0px_#1F1F1F]"
                : "hover:bg-[#FFE66D]",
            ].join(" ")}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
