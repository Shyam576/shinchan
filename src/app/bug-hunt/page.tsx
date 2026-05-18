"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BugchanSay from "@/components/BugchanSay";

const things = [
  { id: 1, emoji: "👀", reveal: "She notices things other people miss. In code, in conversations, in the room." },
  { id: 2, emoji: "😂", reveal: "She laughs at her own jokes first. And it makes everyone else laugh harder." },
  { id: 3, emoji: "🐛", reveal: "She will find the bug. Even if everyone swore there was no bug. Especially then." },
  { id: 4, emoji: "🧠", reveal: "She remembers things no one else bothered to remember." },
  { id: 5, emoji: "⚡",   reveal: "She is three years older. Still brings the most chaotic energy to any sprint." },
  { id: 6, emoji: "🛡️", reveal: "She is the reason the team does not ship broken things. Whether they know it or not." },
  { id: 7, emoji: "🤫", reveal: "She pretends not to care. She cares more than anyone in the room." },
  { id: 8, emoji: "🎯", reveal: "Getting comfortable around her means you passed a real test. Not everyone does." },
];

export default function BugHuntPage() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  function flip(id: number) {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const count = flipped.size;
  const allDone = count === things.length;

  return (
    <div className="min-h-screen px-5 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex items-start gap-5"
        >
          <div className="flex-1">
            <div className="inline-block bg-[#1F1F1F] text-[#FFE66D] rounded-full px-3 py-0.5 text-xs font-mono font-semibold mb-2 tracking-wide">
              OBSERVATION LOG
            </div>
            <h1
              className="text-4xl text-[#1F1F1F] mb-2"
              style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
            >
              Observed Behaviors
            </h1>
            <p className="text-[#9CA3AF]">
              Behavioral patterns detected in the wild.{" "}
              {count > 0 && (
                <span className="text-[#FF5A5F] font-medium">
                  {count} / {things.length} revealed.
                </span>
              )}
            </p>
          </div>
          <BugchanSay text="Logging observations. Do not panic." size={72} />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {things.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              style={{ perspective: 800 }}
              onClick={() => flip(t.id)}
              className="cursor-pointer"
            >
              <motion.div
                animate={{ rotateY: flipped.has(t.id) ? 180 : 0 }}
                transition={{ duration: 0.45 }}
                style={{ transformStyle: "preserve-3d", position: "relative", height: 160 }}
              >
                <div
                  className="absolute inset-0 bg-white border-2 border-[#1F1F1F] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[4px_4px_0px_#1F1F1F] select-none"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="text-4xl">{t.emoji}</span>
                  <span className="text-xs text-[#9CA3AF] font-medium">tap</span>
                </div>
                <div
                  className="absolute inset-0 bg-[#FFE66D] border-2 border-[#1F1F1F] rounded-2xl flex items-center justify-center p-4 shadow-[4px_4px_0px_#1F1F1F] select-none"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="text-[#1F1F1F] text-xs font-medium text-center leading-snug">
                    {t.reveal}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {allDone && (
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
              That is all of them. Now you know. 🎯
            </p>
            <Link
              href="/test-cases"
              className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Test Cases →
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
