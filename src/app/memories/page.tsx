"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
  {
    id: 6,
    front: "Three Years Ahead",
    color: "#FF5A5F",
    back: "She got here three years before most. She knows things. She has been patient about it. That is not nothing.",
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
          className="mb-10"
        >
          <h1
            className="text-4xl text-[#1F1F1F] mb-2"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
          >
            A Few Moments
          </h1>
          <p className="text-[#9CA3AF]">Tap each card.</p>
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
                  className="absolute inset-0 border-2 border-[#1F1F1F] rounded-2xl flex items-center justify-center p-6 shadow-[4px_4px_0px_#1F1F1F] select-none"
                  style={{ backgroundColor: card.color, backfaceVisibility: "hidden" }}
                >
                  <p
                    className="text-[#1F1F1F] text-lg text-center"
                    style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
                  >
                    {card.front}
                  </p>
                </div>
                <div
                  className="absolute inset-0 bg-white border-2 border-[#1F1F1F] rounded-2xl flex items-center justify-center p-6 shadow-[4px_4px_0px_#1F1F1F] select-none"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <p className="text-[#1F1F1F] text-sm font-medium leading-relaxed text-center">
                    {card.back}
                  </p>
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
              href="/final"
              className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              The End →
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
