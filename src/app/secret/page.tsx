"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";
import { useTypewriter } from "@/hooks/useTypewriter";

const message =
  "Okay. You found it. That means you were curious enough to look, which is very you.\n\nI am not good at saying things directly. So I made a website instead.\n\nYou probably already know everything I would say. But I wanted you to have somewhere that says it anyway.\n\nYou are one of those people who makes a place better just by being in it. Not loudly. Just — the room is different when you are there.\n\nThat is rare. And I am glad I got to be in the same room.\n\nHappy Birthday. 🎂";

export default function SecretPage() {
  const { displayed } = useTypewriter(message, 28, 300);

  const lines = displayed.split("\n");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1F1F1F] text-white border-2 border-[#1F1F1F] rounded-2xl p-10 shadow-[8px_8px_0px_#FFE66D]"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6 opacity-90"
          >
            <Bugchan size={90} />
          </motion.div>

          <div className="inline-block bg-[#FFE66D] text-[#1F1F1F] rounded-full px-3 py-0.5 text-xs font-semibold mb-6 uppercase tracking-wide">
            you found it 🔍
          </div>

          <div className="space-y-3 text-[#E5E7EB] text-base leading-relaxed font-medium min-h-[280px]">
            {lines.map((line, i) =>
              line === "" ? (
                <div key={i} className="h-2" />
              ) : (
                <p key={i}>{line}</p>
              )
            )}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="inline-block w-[2px] h-[1em] bg-[#FFE66D] align-middle ml-0.5"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <Link
            href="/"
            className="text-sm text-[#9CA3AF] hover:text-[#1F1F1F] transition-colors font-medium"
          >
            ← Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
