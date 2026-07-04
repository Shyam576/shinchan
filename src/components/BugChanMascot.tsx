"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Bugchan, { BugchanMood } from "@/components/Bugchan";
import SpeechBubble from "@/components/SpeechBubble";

const DEFAULT_LINES = [
  "Age says senior. Energy says cartoon villain.",
  "QA detected. Mischief level: critical.",
  "Bug Chan found 0 bugs, but 99% attitude.",
];

const REACTION_MOODS: BugchanMood[] = ["happy", "shocked", "angry", "proud", "thinking"];

export default function BugChanMascot({
  size = 140,
  dancing = false,
  lines = DEFAULT_LINES,
  className = "",
}: {
  size?: number;
  dancing?: boolean;
  /** Lines Bug Chan cycles through when tapped */
  lines?: string[];
  className?: string;
}) {
  const [mood, setMood] = useState<BugchanMood>("naughty");
  const [bubble, setBubble] = useState<string | null>(null);
  const idx = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleTap() {
    const line = lines[idx.current % lines.length];
    idx.current += 1;
    setBubble(line);
    setMood(REACTION_MOODS[Math.floor(Math.random() * REACTION_MOODS.length)]);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setBubble(null);
      setMood("naughty");
    }, 2200);
  }

  return (
    <div className={`relative inline-flex flex-col items-center gap-3 ${className}`}>
      <div className="absolute -top-2 -translate-y-full">
        <SpeechBubble text={bubble ?? ""} show={!!bubble} />
      </div>

      <motion.button
        type="button"
        onClick={handleTap}
        aria-label="Tap Bug Chan"
        whileHover={{ scale: 1.06, rotate: [0, -4, 4, 0] }}
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="cursor-pointer select-none focus:outline-none"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bugchan size={size} dancing={dancing} mood={mood} />
        </motion.div>
      </motion.button>
    </div>
  );
}
