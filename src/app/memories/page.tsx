"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const memories = [
  {
    id: 1,
    emoji: "🐛",
    label: "The Great Bug Hunt",
    color: "#4D96FF",
    message:
      "That one time you found a bug in production at 4:58 PM on a Friday… and fixed it anyway. True QA royalty. 👑",
  },
  {
    id: 2,
    emoji: "☕",
    label: "Coffee & Test Cases",
    color: "#FF9A3C",
    message:
      "Early mornings, endless coffee, and a test suite that never slept. The real senior tester energy. 💪",
  },
  {
    id: 3,
    emoji: "🎯",
    label: "Zero Defect Sprint",
    color: "#6BCB77",
    message:
      "That legendary sprint where the entire team shipped clean. We all knew who was holding the fort. 🏆",
  },
  {
    id: 4,
    emoji: "🤝",
    label: "The Kindest Senior",
    color: "#C77DFF",
    message:
      "Never once said 'that's not my job.' Always helped the team, even when she had a mountain of her own work. 💖",
  },
  {
    id: 5,
    emoji: "🚀",
    label: "Release Day Hero",
    color: "#FF4D4D",
    message:
      "While everyone panicked on release day, she had already written the rollback plan. Two steps ahead, always. 🧠",
  },
  {
    id: 6,
    emoji: "😂",
    label: "The Funniest Stand-Up",
    color: "#FFD93D",
    message:
      "'My blocker is that devs keep creating features for me to break.' — her, probably, at every stand-up. 🎤",
  },
];

export default function MemoriesPage() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  function flip(id: number) {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#C77DFF] border-4 border-[#1E1E1E] rounded-[24px] shadow-[8px_8px_0px_#1E1E1E] p-6 text-center mb-8"
        >
          <h1 className="text-4xl font-black text-white drop-shadow-[2px_2px_0px_#1E1E1E] mb-2">
            📸 Memory Cards
          </h1>
          <p className="text-white font-bold">
            Flip each card to unlock a memory! 🎴
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {memories.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ scale: 0, rotate: Math.random() * 10 - 5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
              className="cursor-pointer"
              style={{ perspective: 1000 }}
              onClick={() => flip(m.id)}
            >
              <motion.div
                animate={{ rotateY: flipped.has(m.id) ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ transformStyle: "preserve-3d", position: "relative", height: 200 }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 border-4 border-[#1E1E1E] rounded-[24px] shadow-[6px_6px_0px_#1E1E1E] flex flex-col items-center justify-center gap-3 select-none"
                  style={{
                    backgroundColor: m.color,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <span className="text-5xl">{m.emoji}</span>
                  <p className="font-black text-[#1E1E1E] text-center px-4 text-sm leading-tight">
                    {m.label}
                  </p>
                  <span className="text-xs font-bold text-[#1E1E1E] opacity-70">Tap to reveal 👆</span>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-[#FFF4D6] border-4 border-[#1E1E1E] rounded-[24px] shadow-[6px_6px_0px_#1E1E1E] flex items-center justify-center p-4 select-none"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="font-bold text-[#1E1E1E] text-center text-sm leading-relaxed">
                    {m.message}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {flipped.size === memories.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-[#FFD93D] border-4 border-[#1E1E1E] rounded-[24px] shadow-[8px_8px_0px_#1E1E1E] p-6 text-center"
          >
            <p className="text-2xl font-black">
              💖 All memories unlocked! She&apos;s truly one of a kind. Happy Birthday! 🎂
            </p>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 text-sm font-bold text-[#1E1E1E]"
        >
          {flipped.size} / {memories.length} memories unlocked 🗝️
        </motion.p>
      </div>
    </div>
  );
}
