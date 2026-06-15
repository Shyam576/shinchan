"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";
import BouncyLink from "@/components/BouncyLink";

const reactions = [
  "I knew you would. Classic.",
  "Still doing it?",
  "…okay this is kind of impressive.",
  "Fine. You win. Happy Birthday. 🎂",
];

export default function IntroPage() {
  const [presses, setPresses] = useState(0);
  const [show, setShow] = useState(false);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function press() {
    setPresses((p) => p + 1);
    setShow(true);
    if (pressTimer.current) clearTimeout(pressTimer.current);
    pressTimer.current = setTimeout(() => setShow(false), 2000);
  }

  const reaction = reactions[Math.min(presses - 1, reactions.length - 1)] ?? "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="flex justify-center mb-8"
        >
          <div className="relative inline-flex flex-col items-center">
            <div className="relative mb-2 bg-white border-2 border-[#1F1F1F] rounded-2xl px-4 py-2 text-sm font-semibold text-[#1F1F1F] shadow-[2px_2px_0px_#1F1F1F] max-w-[260px] text-center">
              User appears older. Behavior says otherwise.
              <span className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-r-[7px] border-t-[9px] border-l-transparent border-r-transparent border-t-[#1F1F1F]" />
              <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent border-t-white" />
            </div>
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Bugchan size={130} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border-2 border-[#1F1F1F] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#1F1F1F]"
        >
          <div className="inline-block bg-[#FFE66D] border-2 border-[#1F1F1F] rounded-full px-3 py-0.5 text-xs font-semibold mb-5 tracking-wide uppercase">
            QA Case #001 — Special Subject
          </div>

          <h1
            className="text-4xl text-[#FF5A5F] mb-6 leading-snug"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
          >
            A naughty little tester entered the system.
          </h1>

          <div className="space-y-4 text-[#1F1F1F] text-base leading-relaxed">
            <p>
              She was here before most of us. Quietly finding bugs that no one else could see.
              Making things work that had no business working.
            </p>
            <p>
              You are older by three years — but somehow you carry the most playful energy
              in any room you walk into.
            </p>
            <p className="text-[#FF5A5F] font-semibold">
              Smart enough to find every bug. Fun enough to make even boring sprints feel lighter.
            </p>
            <p>
              This is a small corner of the internet made just for you. No test cases, no tickets.
              Just a birthday, and the people who noticed.
            </p>
          </div>

          {/* Do NOT press easter egg */}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <div className="relative">
              <motion.button
                onClick={press}
                whileTap={{ scale: 0.93, rotate: -2 }}
                className="border-2 border-dashed border-[#9CA3AF] rounded-full px-4 py-1.5 text-xs text-[#9CA3AF] font-semibold hover:border-[#FF5A5F] hover:text-[#FF5A5F] transition-all select-none"
              >
                Do NOT press this
              </motion.button>
              <AnimatePresence>
                {show && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1F1F1F] text-white rounded-xl px-3 py-1.5 text-xs font-semibold whitespace-nowrap z-10"
                  >
                    {reaction}
                    <span className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#1F1F1F]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <BouncyLink
              href="/bug-hunt"
              className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F]"
            >
              Observed Behaviors →
            </BouncyLink>
            <BouncyLink
              href="/final"
              className="inline-block border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold bg-white"
            >
              Skip to Release
            </BouncyLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
