"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const notes = [
  "She will find a typo in your birthday message. And she will tell you. That is love.",
  "She asked for the day off. She spent half of it checking if someone broke production.",
  "She will not say ‘good job’ easily. Which is exactly why, when she does — keep it forever.",
  "She is three years older. Somehow still the most chaotic energy in any room.",
  "Every meeting she joins: one bug caught before anyone else noticed. Every time.",
  "She acts like she is not sentimental. She remembers everything.",
  "Her idea of a good birthday: zero Slack pings, clean logs, and someone else doing regression.",
  "She found a bug in this website. She has not told anyone yet. She is waiting for the right moment.",
];

export default function RoastModePage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function next() {
    setDirection(1);
    setCurrent((c) => (c + 1) % notes.length);
  }

  function prev() {
    setDirection(-1);
    setCurrent((c) => (c - 1 + notes.length) % notes.length);
  }

  return (
    <div className="min-h-screen px-5 py-12">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1
            className="text-4xl text-[#1F1F1F] mb-2"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
          >
            Field Notes
          </h1>
          <p className="text-[#9CA3AF]">
            Observations from someone who was probably annoying before she was.
          </p>
        </motion.div>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.28 }}
              className="bg-white border-2 border-[#1F1F1F] rounded-2xl p-8 shadow-[6px_6px_0px_#1F1F1F]"
            >
              <div className="text-xs font-semibold text-[#9CA3AF] mb-4 uppercase tracking-widest">
                Note {current + 1} of {notes.length}
              </div>
              <p className="text-[#1F1F1F] text-xl font-medium leading-relaxed">
                &ldquo;{notes[current]}&rdquo;
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            className="border-2 border-[#1F1F1F] rounded-full px-5 py-2 text-sm font-semibold hover:bg-[#FFE66D] transition-all"
          >
            ← prev
          </button>
          <div className="flex gap-2">
            {notes.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="w-2 h-2 rounded-full border border-[#1F1F1F] transition-all"
                style={{ backgroundColor: i === current ? "#FF5A5F" : "#E5E7EB" }}
                aria-label={`Note ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="border-2 border-[#1F1F1F] rounded-full px-5 py-2 text-sm font-semibold hover:bg-[#FFE66D] transition-all"
          >
            next →
          </button>
        </div>

        {current === notes.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center"
          >
            <Link
              href="/memories"
              className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Memories →
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
