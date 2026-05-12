"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const truths = [
  "She is annoying, but only in the way people secretly miss.",
  "She finds the bug other people swore did not exist.",
  "She has been here longer than the system — and the system is better for it.",
  "She makes things feel lighter once you are in her circle.",
  "She is both smart and fun. That combination is rarer than it sounds.",
  "She will outlast every bad day she has ever had.",
];

export default function TestCasesPage() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  const allChecked = checked.size === truths.length;

  return (
    <div className="min-h-screen px-5 py-12">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1
            className="text-4xl text-[#1F1F1F] mb-2"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
          >
            True Things
          </h1>
          <p className="text-[#9CA3AF]">Verified. No test cases needed.</p>
        </motion.div>

        <div className="space-y-4">
          {truths.map((truth, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => toggle(i)}
              className={[
                "w-full text-left p-5 border-2 border-[#1F1F1F] rounded-2xl transition-all shadow-[4px_4px_0px_#1F1F1F]",
                checked.has(i) ? "bg-[#4ECDC4]" : "bg-white hover:bg-[#FFF8E7]",
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                <div
                  className={[
                    "mt-0.5 w-6 h-6 rounded-full border-2 border-[#1F1F1F] flex items-center justify-center shrink-0 transition-colors",
                    checked.has(i) ? "bg-[#1F1F1F]" : "bg-white",
                  ].join(" ")}
                >
                  {checked.has(i) && <span className="text-white text-xs">✓</span>}
                </div>
                <p className="text-[#1F1F1F] font-medium leading-snug">{truth}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {allChecked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p
              className="text-[#1F1F1F] mb-4"
              style={{ fontFamily: "var(--font-fredoka)", fontSize: "1.2rem" }}
            >
              All confirmed. Case closed. 🎯
            </p>
            <Link
              href="/roast-mode"
              className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Field Notes →
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
