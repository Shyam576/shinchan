"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import BugchanSay from "@/components/BugchanSay";

const bugs = [
  {
    id: "QA-001",
    severity: "Low",
    sevColor: "#4ECDC4",
    title: "Typo Detection Overdrive",
    status: "WONTFIX",
    note: "She will find a typo in your birthday message. And she will tell you. That is love.",
  },
  {
    id: "QA-002",
    severity: "Medium",
    sevColor: "#FFE66D",
    title: "Off-Hours Production Check",
    status: "BY DESIGN",
    note: "She asked for the day off. She spent half of it checking if someone broke production.",
  },
  {
    id: "QA-003",
    severity: "Low",
    sevColor: "#4ECDC4",
    title: "Compliment Gate Threshold Too High",
    status: "WONTFIX",
    note: "She will not say 'good job' easily. Which is exactly why, when she does — keep it forever.",
  },
  {
    id: "QA-004",
    severity: "Low",
    sevColor: "#4ECDC4",
    title: "Age vs Energy Mismatch",
    status: "WONTFIX",
    note: "She is three years older. Somehow still the most chaotic energy in any room.",
  },
  {
    id: "QA-005",
    severity: "Critical",
    sevColor: "#FF5A5F",
    title: "Pre-Emptive Bug Detection",
    status: "WORKING AS INTENDED",
    note: "Every meeting she joins: one bug caught before anyone else noticed. Every time.",
  },
  {
    id: "QA-006",
    severity: "Medium",
    sevColor: "#FFE66D",
    title: "Sentimental Memory Buffer",
    status: "WONTFIX",
    note: "She acts like she is not sentimental. She remembers everything.",
  },
  {
    id: "QA-007",
    severity: "Low",
    sevColor: "#4ECDC4",
    title: "Birthday Ideal-State Definition",
    status: "CLOSED",
    note: "Her idea of a good birthday: zero Slack pings, clean logs, and someone else doing regression.",
  },
  {
    id: "QA-008",
    severity: "Critical",
    sevColor: "#FF5A5F",
    title: "Unreported Site Bug (This One)",
    status: "PENDING",
    note: "She found a bug in this website. She has not told anyone yet. She is waiting for the right moment.",
  },
];

export default function RoastModePage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function next() {
    setDirection(1);
    setCurrent((c) => (c + 1) % bugs.length);
  }

  function prev() {
    setDirection(-1);
    setCurrent((c) => (c - 1 + bugs.length) % bugs.length);
  }

  const bug = bugs[current];

  return (
    <div className="min-h-screen px-5 py-12">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex items-start gap-5"
        >
          <div className="flex-1">
            <div className="inline-block bg-[#1F1F1F] text-[#FFE66D] rounded-full px-3 py-0.5 text-xs font-mono font-semibold mb-2 tracking-wide">
              BUG TRACKER v1.0
            </div>
            <h1
              className="text-4xl text-[#1F1F1F] mb-2"
              style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
            >
              Known Features,<br />Not Bugs
            </h1>
            <p className="text-[#9CA3AF]">
              Filed, reviewed, and closed as WONTFIX.
            </p>
          </div>
          <BugchanSay text="These are features. I confirmed it." size={72} />
        </motion.div>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.28 }}
              className="bg-white border-2 border-[#1F1F1F] rounded-2xl shadow-[6px_6px_0px_#1F1F1F] overflow-hidden"
            >
              {/* Ticket header */}
              <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b-2 border-[#1F1F1F]">
                <span className="text-xs font-mono font-bold text-[#9CA3AF] tracking-widest">{bug.id}</span>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full border border-[#1F1F1F]"
                    style={{ backgroundColor: bug.sevColor }}
                  >
                    {bug.severity}
                  </span>
                  <span className="text-xs font-semibold text-[#9CA3AF] border border-[#9CA3AF] rounded-full px-2 py-0.5">
                    {bug.status}
                  </span>
                </div>
              </div>
              {/* Ticket body */}
              <div className="px-6 py-5">
                <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-2">{bug.title}</p>
                <p className="text-[#1F1F1F] text-lg font-medium leading-relaxed">
                  &ldquo;{bug.note}&rdquo;
                </p>
              </div>
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
            {bugs.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="w-2 h-2 rounded-full border border-[#1F1F1F] transition-all"
                style={{ backgroundColor: i === current ? "#FF5A5F" : "#E5E7EB" }}
                aria-label={`Bug ${i + 1}`}
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

        {current === bugs.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center"
          >
            <Link
              href="/memories"
              className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Evidence Logs →
            </Link>
          </motion.div>
        )}

        {/* Things she has definitely said */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14"
        >
          <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest mb-4">
            Logged console output
          </p>
          <div className="flex flex-col gap-3">
            {[
              { text: "Did you even test this?", align: "left" },
              { text: "This is not a bug, this is a feature. I refuse.", align: "right" },
              { text: "I will just check one more thing…", align: "left" },
              { text: "Someone broke prod. I am not saying who. But someone.", align: "right" },
            ].map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: q.align === "left" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className={`flex ${q.align === "right" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] px-4 py-3 rounded-2xl border-2 border-[#1F1F1F] text-sm font-medium shadow-[3px_3px_0px_#1F1F1F] ${
                    q.align === "right"
                      ? "bg-[#FFE66D] rounded-br-sm"
                      : "bg-white rounded-bl-sm"
                  }`}
                >
                  {q.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
