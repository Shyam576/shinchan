"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-8"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bugchan size={140} />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl md:text-6xl text-[#1F1F1F] mb-4 leading-tight"
        style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
      >
        A tiny birthday world.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-[#9CA3AF] mb-10 max-w-sm"
      >
        Made for someone who deserves more than a group chat message.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        <Link
          href="/intro"
          className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-8 py-3 text-lg font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Enter →
        </Link>
      </motion.div>
    </div>
  );
}
