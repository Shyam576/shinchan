"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";

const floatingEmojis = ["🎂", "🎉", "🐛", "🚀", "⭐", "🎁", "✨", "🥳", "🔍", "💥"];

export default function IntroPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden relative">
      {/* Floating background emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-4xl select-none pointer-events-none"
          style={{
            left: `${(i * 11 + 5) % 95}%`,
            top: `${(i * 17 + 8) % 85}%`,
          }}
          animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.25,
          }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Main card */}
      <motion.div
        initial={{ scale: 0, rotate: -8 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="bg-white border-4 border-[#1E1E1E] rounded-[24px] shadow-[8px_8px_0px_#1E1E1E] p-8 max-w-2xl w-full text-center z-10"
      >
        {/* Doodle top stripe */}
        <div className="h-3 rounded-full mb-6 bg-[repeating-linear-gradient(90deg,#FF4D4D_0px,#FF4D4D_20px,#FFD93D_20px,#FFD93D_40px,#4D96FF_40px,#4D96FF_60px)]" />

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-4"
        >
          <Bugchan size={180} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="inline-block bg-[#FFD93D] border-3 border-[#1E1E1E] rounded-full px-4 py-1 text-sm font-black mb-3 shadow-[3px_3px_0px_#1E1E1E]">
            🚨 SYSTEM ALERT 🚨
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#FF4D4D] leading-tight mb-3 drop-shadow-[3px_3px_0px_#FFD93D]">
            A naughty little<br />birthday tester<br />entered the system…
          </h1>
          <p className="text-xl font-bold text-[#1E1E1E] mb-2">
            👑 <span className="text-[#4D96FF]">QA Queen</span> detected.
          </p>
          <p className="text-lg text-[#1E1E1E] mb-1">
            Complaint against birthday girl: <span className="line-through text-[#FF4D4D]">REJECTED</span>
          </p>
          <p className="text-lg font-black text-[#6BCB77] mb-6">
            She has <span className="bg-[#6BCB77] text-white px-2 py-0.5 rounded border-2 border-[#1E1E1E]">ADMIN RIGHTS</span>. 👑
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Link
            href="/bug-hunt"
            className="bg-[#FFD93D] border-4 border-[#1E1E1E] rounded-full px-6 py-3 font-black shadow-[6px_6px_0px_#1E1E1E] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:scale-105 text-[#1E1E1E]"
          >
            Start Adventure 🐛
          </Link>
          <Link
            href="/final"
            className="bg-[#FF4D4D] border-4 border-[#1E1E1E] rounded-full px-6 py-3 font-black shadow-[6px_6px_0px_#1E1E1E] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:scale-105 text-white"
          >
            Skip to Wish 🎂
          </Link>
        </motion.div>

        {/* Bottom stripe */}
        <div className="h-3 rounded-full mt-6 bg-[repeating-linear-gradient(90deg,#4D96FF_0px,#4D96FF_20px,#6BCB77_20px,#6BCB77_40px,#C77DFF_40px,#C77DFF_60px)]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 text-[#1E1E1E] font-bold text-center z-10"
      >
        Presented with 🐞 by <span className="text-[#FF4D4D]">Bugchan</span>, the naughty tester
      </motion.p>
    </div>
  );
}
