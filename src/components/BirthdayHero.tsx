"use client";
import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import Bugchan, { BugchanMood } from "@/components/Bugchan";
import SpeechBubble from "@/components/SpeechBubble";

const REACTION_MOODS: BugchanMood[] = ["happy", "shocked", "angry", "proud", "thinking"];

export default function BirthdayHero({
  size = 140,
  lines,
  danceThreshold = 5,
  heading,
  badge,
  subtitle,
  cta,
}: {
  size?: number;
  /** Lines Bug Chan cycles through when tapped */
  lines: string[];
  /** Number of taps before Bug Chan starts dancing */
  danceThreshold?: number;
  heading: ReactNode;
  badge?: ReactNode;
  subtitle?: ReactNode;
  cta?: ReactNode;
}) {
  const [count, setCount] = useState(0);
  const [bubble, setBubble] = useState<string | null>(null);
  const [mood, setMood] = useState<BugchanMood>("naughty");
  const [shakeKey, setShakeKey] = useState(0);
  const bubbleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dancing = count >= danceThreshold;

  function handleTap() {
    const next = count + 1;
    setCount(next);
    setBubble(lines[Math.min(next - 1, lines.length - 1)]);
    setMood(REACTION_MOODS[Math.floor(Math.random() * REACTION_MOODS.length)]);
    setShakeKey((k) => k + 1);
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => {
      setBubble(null);
      setMood("naughty");
    }, 2200);
  }

  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-center mb-8"
      >
        <div className="absolute -top-3 -translate-y-full z-10">
          <SpeechBubble text={bubble ?? ""} show={!!bubble} />
        </div>

        <motion.button
          key={shakeKey}
          type="button"
          onClick={handleTap}
          animate={dancing ? {} : shakeKey > 0 ? { rotate: [-4, 4, -3, 3, 0], scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 0.35 }}
          whileHover={dancing ? {} : { scale: 1.06, rotate: [0, -4, 4, 0] }}
          whileTap={{ scale: 0.92 }}
          className="cursor-pointer focus:outline-none select-none"
          aria-label="Tap Bug Chan"
        >
          <motion.div
            animate={dancing ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bugchan size={size} dancing={dancing} mood={mood} />
          </motion.div>
        </motion.button>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl md:text-6xl text-[#222222] mb-3 leading-tight"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
      >
        {heading}
      </motion.h1>

      {badge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          {badge}
        </motion.div>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-[#9CA3AF] mb-10 max-w-sm"
        >
          {subtitle}
        </motion.p>
      )}

      {cta && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          {cta}
        </motion.div>
      )}
    </div>
  );
}
