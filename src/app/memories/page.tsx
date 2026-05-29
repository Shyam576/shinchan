"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BugchanSay from "@/components/BugchanSay";

const cards = [
  {
    id: 1,
    front: "The Bug That Wasn’t",
    color: "#FFE66D",
    back: "Everyone said it was a feature. She said it was a bug. She was right. She is always right about this.",
  },
  {
    id: 2,
    front: "That Quiet Fix",
    color: "#4ECDC4",
    back: "She fixed something that had been broken for months. Did not announce it. Just closed the ticket.",
  },
  {
    id: 3,
    front: "The Energy Shift",
    color: "#FF5A5F",
    back: "Some days the whole team feels heavy. Then she says something. The room changes. She does not even notice she did it.",
  },
  {
    id: 4,
    front: "The 4:58 PM Bug",
    color: "#FFE66D",
    back: "Friday. Almost weekend. Production. She found it, fixed it, shipped it, and acted like it was normal. It was not normal.",
  },
  {
    id: 5,
    front: "When She’s Comfortable",
    color: "#4ECDC4",
    back: "She is guarded at first. Then one day she is just — herself. That version is someone worth knowing.",
  },
  // ── This last card is yours. Replace the back with something real you remember. ──
  {
    id: 6,
    front: "One Real Thing",
    color: "#1F1F1F",
    back: "I do not say things easily. So I built a whole website instead. But this card is just me saying it directly: I am glad I got to know this version of you. Happy Birthday.",
  },
];

export default function MemoriesPage() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  function flip(id: number) {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="min-h-screen px-5 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-col sm:flex-row items-start gap-4"
        >
          <div className="flex-1">
            <div className="inline-block bg-[#1F1F1F] text-[#FFE66D] rounded-full px-3 py-0.5 text-xs font-mono font-semibold mb-2 tracking-wide">
              EVIDENCE ROOM
            </div>
            <h1
              className="text-4xl text-[#1F1F1F] mb-2"
              style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
            >
              Evidence Logs
            </h1>
            <p className="text-[#9CA3AF]">Exhibits A through F. Tap each to open.</p>
          </div>
          <BugchanSay text="Evidence collected. Case is strong." size={72} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="cursor-pointer"
              style={{ perspective: 800 }}
              onClick={() => flip(card.id)}
            >
              <motion.div
                animate={{ rotateY: flipped.has(card.id) ? 180 : 0 }}
                transition={{ duration: 0.45 }}
                style={{ transformStyle: "preserve-3d", position: "relative", height: 200 }}
              >
                <div
                  className="absolute inset-0 border-2 border-[#1F1F1F] rounded-2xl flex flex-col items-start justify-between p-5 shadow-[4px_4px_0px_#1F1F1F] select-none"
                  style={{ backgroundColor: card.color, backfaceVisibility: "hidden" }}
                >
                  <span
                    className="text-[10px] font-mono font-bold opacity-60"
                    style={{ color: card.color === "#1F1F1F" ? "#FFE66D" : "#1F1F1F" }}
                  >
                    {`EXHIBIT-0${card.id}`}
                  </span>
                  <p
                    className="text-lg"
                    style={{
                      fontFamily: "var(--font-fredoka)",
                      fontWeight: 500,
                      color: card.color === "#1F1F1F" ? "#FFE66D" : "#1F1F1F",
                    }}
                  >
                    {card.front}
                  </p>
                  <span
                    className="text-[10px] font-semibold opacity-40"
                    style={{ color: card.color === "#1F1F1F" ? "#FFE66D" : "#1F1F1F" }}
                  >
                    tap to open →
                  </span>
                </div>
                <div
                  className="absolute inset-0 bg-white border-2 border-[#1F1F1F] rounded-2xl overflow-hidden shadow-[4px_4px_0px_#1F1F1F] select-none"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="bg-[#1F1F1F] px-4 py-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#FFE66D] tracking-widest">EVIDENCE LOG</span>
                  </div>
                  <div className="flex items-center justify-center p-5 h-[calc(100%-28px)]">
                    <p className="text-[#1F1F1F] text-sm font-medium leading-relaxed text-center">
                      {card.back}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {flipped.size === cards.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              href="/appreciation"
              className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Appreciation →
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
