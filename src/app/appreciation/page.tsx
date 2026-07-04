"use client";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";
import BouncyLink from "@/components/BouncyLink";
import { useTypewriter } from "@/hooks/useTypewriter";

const lines = [
  "Not a test case.",
  "Not a bug report.",
  "Just things I noticed.",
  "",
  "You make ordinary days feel lighter.",
  "Not by doing anything special —",
  "just by being the version of yourself",
  "you are when you are comfortable.",
  "",
  "You are intelligent in the way that matters.",
  "The kind that asks the right question,",
  "not just the clever one.",
  "",
  "You are funny without trying.",
  "Annoying in a way that only good people are.",
  "Somehow both mature and childish at the same time.",
  "",
  "I do not say things like this easily.",
  "So I built a website instead.",
  "",
  "You know what this means.",
];

function TypewriterLines({ onDone }: { onDone: () => void }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [shown, setShown] = useState<string[]>([]);
  const { displayed, done } = useTypewriter(
    lineIdx < lines.length ? lines[lineIdx] : "",
    28
  );

  useEffect(() => {
    if (!done) return;
    const delay = lines[lineIdx] === "" ? 80 : 380;
    const t = setTimeout(() => {
      setShown((prev) => [...prev, lines[lineIdx]]);
      if (lineIdx + 1 >= lines.length) {
        onDone();
      } else {
        setLineIdx((i) => i + 1);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [done, lineIdx, onDone]);

  return (
    <div className="space-y-1 text-[#1F1F1F] text-base leading-relaxed font-medium min-h-[280px]">
      {shown.map((l, i) =>
        l === "" ? (
          <div key={i} className="h-3" />
        ) : (
          <p key={i}>{l}</p>
        )
      )}
      {lineIdx < lines.length && lines[lineIdx] !== "" && (
        <p>
          {displayed}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="inline-block w-[2px] h-[1em] bg-[#1F1F1F] ml-0.5 align-middle"
          />
        </p>
      )}
    </div>
  );
}

export default function AppreciationPage() {
  const [started, setStarted] = useState(false);
  const [writingDone, setWritingDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(t);
  }, []);

  const handleDone = useCallback(() => setWritingDone(true), []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-[#1F1F1F] rounded-2xl p-6 sm:p-10 shadow-[8px_8px_0px_#1F1F1F]"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <Bugchan size={90} />
          </motion.div>

          <div className="inline-block bg-[#4ECDC4] border-2 border-[#1F1F1F] rounded-full px-3 py-0.5 text-xs font-semibold mb-5 uppercase tracking-wide">
            Off the record
          </div>

          <h1
            className="text-4xl text-[#1F1F1F] mb-8 leading-snug"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
          >
            Things I Don&apos;t Say Properly
          </h1>

          {started && <TypewriterLines onDone={handleDone} />}

          {writingDone && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <BouncyLink
                href="/qa-stats"
                className="inline-block bg-[#1F1F1F] text-white border-2 border-[#1F1F1F] rounded-full px-8 py-3 font-semibold shadow-[4px_4px_0px_#FFE66D] w-full text-center"
              >
                QA Dashboard →
              </BouncyLink>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <Link
            href="/memories"
            className="text-sm text-[#9CA3AF] hover:text-[#1F1F1F] transition-colors font-medium"
          >
            ← Evidence Logs
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
