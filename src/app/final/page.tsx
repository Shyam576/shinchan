"use client";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";
import SignaturePad from "@/components/SignaturePad";
import { useTypewriter } from "@/hooks/useTypewriter";

const lines = [
  "I made this because you remind me of that rare kind of person —",
  "intelligent, funny, slightly chaotic,",
  "and somehow still childlike in the best way.",
  "",
  "You make things feel lighter once you are comfortable around someone.",
  "That is not a small thing.",
  "",
  "Complaint reviewed.",
  "Verdict: she is annoying, but in a way people secretly miss.",
  "",
  "So today — no bugs, no test cases, no tickets.",
  "Just a small birthday world, made for you.",
  "",
  "Have a good one. You have earned it. 🎂",
];

function TypewriterLines({ onDone }: { onDone: () => void }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [shown, setShown] = useState<string[]>([]);
  const { displayed, done } = useTypewriter(
    lineIdx < lines.length ? lines[lineIdx] : "",
    30
  );

  useEffect(() => {
    if (!done) return;
    const delay = lines[lineIdx] === "" ? 100 : 420;
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
    <div className="space-y-1 text-[#1F1F1F] text-base leading-relaxed font-medium min-h-[220px]">
      {shown.map((l, i) =>
        l === "" ? (
          <div key={i} className="h-3" />
        ) : (
          <p
            key={i}
            className={l.startsWith("Complaint") || l.startsWith("Verdict") ? "text-[#FF5A5F]" : ""}
          >
            {l}
          </p>
        )
      )}
      {lineIdx < lines.length && lines[lineIdx] !== "" && (
        <p className={lines[lineIdx].startsWith("Complaint") || lines[lineIdx].startsWith("Verdict") ? "text-[#FF5A5F]" : ""}>
          {displayed}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="inline-block w-[2px] h-[1em] bg-[#FF5A5F] ml-0.5 align-middle"
          />
        </p>
      )}
    </div>
  );
}

export default function FinalPage() {
  const [started, setStarted] = useState(false);
  const [writingDone, setWritingDone] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 600);
    return () => clearTimeout(t);
  }, []);

  const handleDone = useCallback(() => setWritingDone(true), []);

  useEffect(() => {
    if (!writingDone) return;
    sessionStorage.setItem("birthdayParty", "1");
    import("canvas-confetti").then(({ default: confetti }) => {
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.55 }, colors: ["#FFE66D", "#FF5A5F", "#4ECDC4", "#1F1F1F"] });
      setTimeout(() => confetti({ particleCount: 80, spread: 120, origin: { y: 0.5, x: 0.2 }, colors: ["#FFE66D", "#FF5A5F"] }), 400);
      setTimeout(() => confetti({ particleCount: 80, spread: 120, origin: { y: 0.5, x: 0.8 }, colors: ["#4ECDC4", "#1F1F1F"] }), 700);
    });
  }, [writingDone]);

  function fireConfetti() {
    import("canvas-confetti").then(({ default: confetti }) => {
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#FFE66D", "#FF5A5F", "#4ECDC4", "#1F1F1F"],
      });
    });
  }

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
            <Bugchan size={100} />
          </motion.div>

          <div className="inline-block bg-[#FFE66D] border-2 border-[#1F1F1F] rounded-full px-3 py-0.5 text-xs font-semibold mb-5 uppercase tracking-wide">
            Production Release
          </div>

          <h1
            className="text-4xl text-[#FF5A5F] mb-8 leading-snug"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
          >
            Happy Birthday.
          </h1>

          {started && (
            <TypewriterLines onDone={handleDone} />
          )}

          <AnimatePresence>
            {writingDone && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 border-2 border-[#1F1F1F] rounded-2xl overflow-hidden"
              >
                <div className="bg-[#1F1F1F] px-5 py-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFE66D] font-mono">
                    Final QA Report — v1.0.0
                  </span>
                </div>
                <div className="px-5 py-4 space-y-2 bg-white">
                  {([
                    ["Test Subject",       "Birthday Girl"],
                    ["Build Version",      "+1 year"],
                    ["Bugs Found",         "Many (filed, closed)"],
                    ["Charm Level",        "CRITICAL"],
                    ["Fix Recommendation", "DO NOT FIX"],
                    ["Release Status",     "✅ APPROVED"],
                  ] as [string, string][]).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center gap-4">
                      <span className="text-[#9CA3AF] font-mono text-xs">{key}</span>
                      <span className="text-[#1F1F1F] font-semibold text-sm text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {writingDone && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <SignaturePad
                  onSigned={() => setHasSigned(true)}
                  onCleared={() => setHasSigned(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {writingDone && hasSigned && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={fireConfetti}
                className="mt-4 bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-8 py-3 font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all w-full"
              >
                Deploy Birthday Wish 🚀
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <Link
            href="/"
            className="text-sm text-[#9CA3AF] hover:text-[#1F1F1F] transition-colors font-medium"
          >
            ← Back to start
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
