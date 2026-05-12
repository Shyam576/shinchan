"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";

const sections = [
  { href: "/intro", label: "🎉 Funny Intro", desc: "Welcome animation & Bugchan arrival", color: "#FF4D4D" },
  { href: "/bug-hunt", label: "🐛 Bug Hunt", desc: "Click bugs to reveal birthday wishes", color: "#4D96FF" },
  { href: "/test-cases", label: "📋 QA Test Cases", desc: "Run the birthday test suite", color: "#6BCB77" },
  { href: "/roast-mode", label: "🔥 Roast Mode", desc: "Playful jokes — all in love!", color: "#FF9A3C" },
  { href: "/memories", label: "📸 Memories", desc: "Flip cards to unlock memories", color: "#C77DFF" },
  { href: "/final", label: "🎂 Final Wish", desc: "Confetti + the big birthday wish", color: "#FFD93D" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="flex justify-center mb-6"
        >
          <Bugchan size={160} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-black text-[#FF4D4D] mb-3 drop-shadow-[4px_4px_0px_#FFD93D]"
        >
          Happy Birthday! 🎂
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl font-bold text-[#1E1E1E] mb-2"
        >
          Senior QA Baby Boss — your birthday adventure awaits!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block bg-[#4D96FF] text-white border-4 border-[#1E1E1E] rounded-full px-4 py-1 font-black text-sm mb-10 shadow-[4px_4px_0px_#1E1E1E]"
        >
          Presented by Bugchan 🐞 — the naughty tester
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {sections.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ scale: 0, rotate: i % 2 === 0 ? 4 : -4 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1 * i + 0.3, type: "spring", stiffness: 160 }}
            >
              <Link
                href={s.href}
                style={{ backgroundColor: s.color }}
                className="block border-4 border-[#1E1E1E] rounded-[24px] shadow-[6px_6px_0px_#1E1E1E] p-6 text-left hover:scale-105 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <div className="text-3xl mb-2">{s.label.split(" ")[0]}</div>
                <p className="font-black text-[#1E1E1E] text-lg leading-tight">
                  {s.label.slice(3)}
                </p>
                <p className="text-sm font-bold text-[#1E1E1E] opacity-80 mt-1">
                  {s.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <Link
            href="/intro"
            className="bg-[#FF4D4D] border-4 border-[#1E1E1E] rounded-full px-8 py-4 font-black text-white text-xl shadow-[8px_8px_0px_#1E1E1E] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all hover:scale-105 inline-block"
          >
            Start the Adventure 🚀
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
