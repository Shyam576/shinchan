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
  const step = links.findIndex((l) => l.href === pathname);

  return (
    <nav className="bg-[#FFF8E7]/90 backdrop-blur-sm border-b-2 border-[#1F1F1F] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-5 py-3 flex items-center gap-2 flex-wrap">
        <Link
          href="/"
          className="text-[#FF5A5F] text-lg font-semibold mr-3 shrink-0 hover:opacity-70 transition-opacity"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          🐞
        </Link>

        {/* Step dots — compact progress indicator */}
        {step >= 0 && (
          <div className="flex items-center gap-1 mr-3 shrink-0">
            {links.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full border border-[#1F1F1F] transition-all duration-300"
                style={{
                  backgroundColor: i <= step ? "#FF5A5F" : "#E5E7EB",
                  transform: i === step ? "scale(1.35)" : "scale(1)",
                }}
              />
            ))}
          </div>
        )}

        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={[
              "px-3 py-1 rounded-full border-2 border-[#1F1F1F] text-sm font-semibold transition-all duration-200",
              pathname === l.href
                ? "bg-[#FFE66D] shadow-[2px_2px_0px_#1F1F1F]"
                : "bg-transparent hover:bg-[#FFE66D] hover:shadow-[2px_2px_0px_#1F1F1F]",
            ].join(" ")}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
