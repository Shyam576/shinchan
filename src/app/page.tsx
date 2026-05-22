"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";

// ── Update these to her actual birthday ──
const BIRTHDAY_MONTH = 7; // July
const BIRTHDAY_DAY   = 15;

function getBirthdaySubtitle() {
  const now = new Date();
  const isToday =
    now.getMonth() + 1 === BIRTHDAY_MONTH && now.getDate() === BIRTHDAY_DAY;
  return isToday
    ? "Today is the day."
    : "Built on her birthday, July 15.";
}

const taps = [
  "Hehe… you tapped me 😏",
  "Again? Bold.",
  "Okay fine, I like the attention.",
  "You have a problem.",
  "…okay same.",
  "Go inside already. The birthday is in there 👆",
];

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [bubble, setBubble] = useState<string | null>(null);
  const [shakeKey, setShakeKey] = useState(0);
  const subtitle = getBirthdaySubtitle();
  const bubbleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleTap() {
    const next = count + 1;
    setCount(next);
    setBubble(taps[Math.min(next - 1, taps.length - 1)]);
    setShakeKey((k) => k + 1);
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(null), 2200);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-center mb-8"
      >
        {/* Speech bubble */}
        <AnimatePresence>
          {bubble && (
            <motion.div
              key={bubble}
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              transition={{ duration: 0.22 }}
              className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white border-2 border-[#1F1F1F] rounded-2xl px-4 py-2 text-sm font-semibold whitespace-nowrap shadow-[3px_3px_0px_#1F1F1F] z-10"
            >
              {bubble}
              {/* tail */}
              <span className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#1F1F1F]" />
              <span className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          key={shakeKey}
          onClick={handleTap}
          animate={shakeKey > 0 ? { rotate: [-4, 4, -3, 3, 0], scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 0.35 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.93 }}
          className="cursor-pointer focus:outline-none select-none"
          aria-label="Tap the mascot"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bugchan size={140} />
          </motion.div>
        </motion.button>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl md:text-6xl text-[#1F1F1F] mb-3 leading-tight"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
      >
        A tiny birthday world.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-4"
      >
        <span className="inline-block bg-[#1F1F1F] text-[#FFE66D] rounded-full px-3 py-0.5 text-xs font-mono font-semibold tracking-wide">
          Birthday Release v1.0.0
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-[#9CA3AF] mb-10 max-w-sm"
      >
        Made for someone who deserves more than a group chat message.{" "}
        <span className="text-[#FF5A5F] font-semibold">{subtitle}</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        <Link
          href="/intro"
          className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-8 py-3 text-lg font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Enter →
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-16 group relative inline-flex justify-center"
      >
        <span
          className="text-2xl opacity-[0.18] group-hover:opacity-50 transition-opacity duration-300 cursor-default select-none"
          aria-hidden="true"
        >
          🎮
        </span>
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1F1F1F] text-white text-xs font-mono rounded-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md">
          ↑↑↓↓←→←→BA
        </div>
      </motion.div>
    </div>
  );
}
