"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roasts = [
  {
    emoji: "🐛",
    setup: "Why did the birthday girl cross the road?",
    punchline: "To file a bug report on the other side. 🔍",
  },
  {
    emoji: "📋",
    setup: "What do you call a QA engineer at a birthday party?",
    punchline: "The one who finds the missing candle before anyone else. 🕯️",
  },
  {
    emoji: "🚀",
    setup: "She said she'd take the day off for her birthday…",
    punchline: "But then spotted a typo in the birthday banner and raised a ticket. 🎫",
  },
  {
    emoji: "💻",
    setup: "How does the birthday girl blow out candles?",
    punchline: "She tests each flame individually and documents the behavior. 🔬",
  },
  {
    emoji: "🤔",
    setup: "What's her idea of a perfect birthday?",
    punchline: "A zero-bug release, a clean test report, and someone else doing regression. 😌",
  },
  {
    emoji: "🎂",
    setup: "Someone put 'Happy Birthday' on her cake…",
    punchline: "She replied: 'font size inconsistent, spacing off, please fix before EOD.' 🖊️",
  },
  {
    emoji: "🏆",
    setup: "She doesn't age…",
    punchline: "She just increments her version number. Currently at v{age}.0.0 — still in beta! 🔢",
  },
  {
    emoji: "🎉",
    setup: "But for real though…",
    punchline: "She's the reason bugs cry at night. Absolute QA royalty. Happy Birthday, Boss! 👑",
  },
];

export default function RoastModePage() {
  const [current, setCurrent] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);
  const [used, setUsed] = useState<Set<number>>(new Set());

  const roast = roasts[current];

  function nextRoast() {
    setShowPunchline(false);
    const next = (current + 1) % roasts.length;
    setCurrent(next);
    setUsed((prev) => new Set(prev).add(current));
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#FF9A3C] border-4 border-[#1E1E1E] rounded-[24px] shadow-[8px_8px_0px_#1E1E1E] p-6 text-center mb-8"
        >
          <h1 className="text-4xl font-black text-white drop-shadow-[2px_2px_0px_#1E1E1E] mb-1">
            🔥 Roast Mode
          </h1>
          <p className="text-white font-bold">
            Playful roasts for the QA Queen — all in love! 💖
          </p>
          <div className="mt-2 bg-white border-2 border-[#1E1E1E] rounded-full px-3 py-0.5 inline-block text-sm font-black">
            {used.size + (showPunchline ? 1 : 0)} / {roasts.length} roasts delivered 🎤
          </div>
        </motion.div>

        {/* Joke card */}
        <motion.div
          key={current}
          initial={{ scale: 0.8, rotate: -4, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="bg-[#FFF4D6] border-4 border-[#1E1E1E] rounded-[24px] shadow-[8px_8px_0px_#1E1E1E] p-8 text-center"
        >
          <div className="text-6xl mb-4">{roast.emoji}</div>
          <p className="text-xl font-black text-[#1E1E1E] mb-6 leading-snug">
            &ldquo;{roast.setup}&rdquo;
          </p>

          <AnimatePresence>
            {showPunchline && (
              <motion.div
                initial={{ scale: 0, rotate: -6 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#FFD93D] border-4 border-[#1E1E1E] rounded-[20px] shadow-[6px_6px_0px_#1E1E1E] p-4 mb-6"
              >
                <p className="text-xl font-black text-[#1E1E1E]">{roast.punchline}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-4 justify-center flex-wrap">
            {!showPunchline ? (
              <button
                onClick={() => setShowPunchline(true)}
                className="bg-[#FF4D4D] border-4 border-[#1E1E1E] rounded-full px-6 py-3 font-black text-white shadow-[6px_6px_0px_#1E1E1E] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:scale-105"
              >
                Reveal Roast 🥁
              </button>
            ) : (
              <button
                onClick={nextRoast}
                className="bg-[#4D96FF] border-4 border-[#1E1E1E] rounded-full px-6 py-3 font-black text-white shadow-[6px_6px_0px_#1E1E1E] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:scale-105"
              >
                Next Roast 🎤
              </button>
            )}
          </div>
        </motion.div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          {roasts.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setShowPunchline(false); }}
              className="w-4 h-4 rounded-full border-2 border-[#1E1E1E] transition-all"
              style={{ backgroundColor: i === current ? "#FF4D4D" : used.has(i) ? "#6BCB77" : "#E5E7EB" }}
              aria-label={`Go to roast ${i + 1}`}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-4 text-sm font-bold text-[#1E1E1E]"
        >
          ⚠️ Warning: These jokes were tested by QA and approved with 0 bugs. 😄
        </motion.p>
      </div>
    </div>
  );
}
