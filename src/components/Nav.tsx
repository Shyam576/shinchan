"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

const links = [
  { href: "/intro",        label: "QA Case"      },
  { href: "/bug-hunt",     label: "Observed"     },
  { href: "/test-cases",   label: "Test Cases"   },
  { href: "/roast-mode",   label: "Feature Log"  },
  { href: "/memories",     label: "Evidence"     },
  { href: "/appreciation", label: "Appreciation" },
  { href: "/qa-stats",     label: "Dashboard"    },
  { href: "/final",        label: "Release"      },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const tapCount = useRef(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const step = links.findIndex((l) => l.href === pathname);

  function handleLogTap() {
    tapCount.current += 1;
    if (tapTimer.current) clearTimeout(tapTimer.current);
    if (tapCount.current >= 5) {
      tapCount.current = 0;
      router.push("/secret");
      return;
    }
    tapTimer.current = setTimeout(() => { tapCount.current = 0; }, 2000);
  }

  return (
    <nav className="bg-[#FEF6E7]/90 backdrop-blur-sm border-b-2 border-[#1F1F1F] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center gap-2">
        {/* Logo + version */}
        <button
          onClick={handleLogTap}
          className="text-[#FF5A5F] text-lg font-semibold shrink-0 hover:opacity-70 transition-opacity cursor-pointer select-none focus:outline-none"
          style={{ fontFamily: "var(--font-fredoka)" }}
          aria-label="Home"
        >
          🐞
        </button>
        <span className="text-[10px] text-[#9CA3AF] font-mono shrink-0 select-none">v1.0.0</span>

        {/* Step dots — hidden on very small screens */}
        {step >= 0 && (
          <div className="hidden sm:flex items-center gap-1 ml-1 shrink-0">
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

        {/* Scrollable nav links */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none ml-1 flex-1 min-w-0">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={[
                "px-2.5 py-1 rounded-full border-2 border-[#1F1F1F] text-xs font-semibold transition-all duration-200 whitespace-nowrap shrink-0",
                pathname === l.href
                  ? "bg-[#FFE66D] shadow-[2px_2px_0px_#1F1F1F]"
                  : "bg-transparent hover:bg-[#FFE66D] hover:shadow-[2px_2px_0px_#1F1F1F]",
              ].join(" ")}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
