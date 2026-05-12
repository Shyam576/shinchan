"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bugs = [
  { id: 1, emoji: "🐛", wish: "May your test cases always pass on the first try! ✅", color: "#6BCB77" },
  { id: 2, emoji: "🦗", wish: "May your bug reports come with instant fixes! 🔧", color: "#4D96FF" },
  { id: 3, emoji: "🐜", wish: "May your birthday be as smooth as a zero-defect release! 🚀", color: "#FFD93D" },
  { id: 4, emoji: "🪲", wish: "May you find only happiness, not bugs, today! 🌟", color: "#C77DFF" },
  { id: 5, emoji: "🦟", wish: "May your cake have no syntax errors and unlimited slices! 🎂", color: "#FF9A3C" },
  { id: 6, emoji: "🐞", wish: "May your logs be clean and your weekend be long! 🏖️", color: "#FF4D4D" },
  { id: 7, emoji: "🪳", wish: "May every PR you raise get approved in 30 seconds! ⚡", color: "#4D96FF" },
  { id: 8, emoji: "🦂", wish: "May the production server never crash on your birthday! 🙏", color: "#6BCB77" },
];

export default function BugHuntPage() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);

  function clickBug(id: number) {
    if (!revealed.has(id)) {
      setRevealed((prev) => new Set(prev).add(id));
      setScore((s) => s + 1);
    }
  }

  const allFound = score === bugs.length;

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#FF4D4D] border-4 border-[#1E1E1E] rounded-[24px] shadow-[8px_8px_0px_#1E1E1E] p-6 text-center mb-8"
        >
          <h1 className="text-4xl font-black text-white drop-shadow-[2px_2px_0px_#1E1E1E] mb-2">
            🐛 Bug Hunt Mode!
          </h1>
          <p className="text-white font-bold text-lg">
            Click every bug to reveal a birthday wish!
          </p>
          <div className="mt-3 flex justify-center gap-3 flex-wrap">
            <div className="bg-white border-2 border-[#1E1E1E] rounded-full px-4 py-1 font-black">
              🏆 Score: {score} / {bugs.length}
            </div>
            {allFound && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#FFD93D] border-2 border-[#1E1E1E] rounded-full px-4 py-1 font-black"
              >
                🎉 ALL BUGS CAUGHT! You&apos;re a QA Legend!
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Bug Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {bugs.map((bug, i) => (
            <motion.div
              key={bug.id}
              initial={{ scale: 0, rotate: Math.random() * 20 - 10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 160 }}
            >
              <button
                onClick={() => clickBug(bug.id)}
                className="w-full aspect-square"
                aria-label={`Bug ${bug.id}`}
              >
                <AnimatePresence mode="wait">
                  {!revealed.has(bug.id) ? (
                    <motion.div
                      key="bug"
                      exit={{ scale: 0, rotate: 20 }}
                      className="w-full h-full bg-white border-4 border-[#1E1E1E] rounded-[24px] shadow-[6px_6px_0px_#1E1E1E] flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none cursor-pointer"
                    >
                      <motion.span
                        className="text-5xl"
                        animate={{ rotate: [-5, 5, -5], y: [0, -4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {bug.emoji}
                      </motion.span>
                      <span className="text-xs font-black text-[#FF4D4D]">TAP ME!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="wish"
                      initial={{ scale: 0, rotate: -15 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      style={{ backgroundColor: bug.color }}
                      className="w-full h-full border-4 border-[#1E1E1E] rounded-[24px] shadow-[6px_6px_0px_#1E1E1E] flex items-center justify-center p-3"
                    >
                      <p className="text-[#1E1E1E] font-black text-xs text-center leading-tight">
                        {bug.wish}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {allFound && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-[#FFD93D] border-4 border-[#1E1E1E] rounded-[24px] shadow-[8px_8px_0px_#1E1E1E] p-6 text-center"
          >
            <p className="text-2xl font-black">
              🎊 You caught all {bugs.length} bugs! Classic QA energy. Now go eat cake! 🎂
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
