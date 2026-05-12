"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";

export default function IntroPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 160 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bugchan size={130} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border-2 border-[#1F1F1F] rounded-2xl p-8 shadow-[6px_6px_0px_#1F1F1F]"
        >
          <div className="inline-block bg-[#FFE66D] border-2 border-[#1F1F1F] rounded-full px-3 py-0.5 text-xs font-semibold mb-5 tracking-wide uppercase">
            System initializing…
          </div>

          <h1
            className="text-4xl text-[#FF5A5F] mb-6 leading-snug"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
          >
            A naughty little tester entered the system.
          </h1>

          <div className="space-y-4 text-[#1F1F1F] text-base leading-relaxed">
            <p>
              She was here before most of us. Quietly finding bugs that no one else could see.
              Making things work that had no business working.
            </p>
            <p>
              You are older by three years — but somehow you carry the most playful energy
              in any room you walk into.
            </p>
            <p className="text-[#FF5A5F] font-semibold">
              Smart enough to find every bug. Fun enough to make even boring sprints feel lighter.
            </p>
            <p>
              This is a small corner of the internet made just for you. No test cases, no tickets.
              Just a birthday, and the people who noticed.
            </p>
          </div>

          <div className="mt-8 flex gap-3 flex-wrap">
            <Link
              href="/bug-hunt"
              className="bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Little Things →
            </Link>
            <Link
              href="/final"
              className="border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[#FFE66D] transition-all"
            >
              Skip to end
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
