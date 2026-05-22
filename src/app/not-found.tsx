"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
          <Bugchan size={100} />
        </motion.div>

        <div className="inline-block bg-[#FF5A5F] text-white rounded-full px-3 py-0.5 text-xs font-mono font-semibold mb-4 uppercase tracking-wide">
          ERROR 404
        </div>

        <h1
          className="text-4xl text-[#1F1F1F] mb-3 leading-snug"
          style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
        >
          Birthday Cake Not Found
        </h1>

        <p className="text-[#9CA3AF] mb-1 text-base">You went out of bounds. I respect that.</p>
        <p className="text-[#9CA3AF] mb-6 text-base">Here is a secret cupcake.</p>

        <div className="text-6xl mb-8 select-none">🧁</div>

        <div className="bg-white border-2 border-[#1F1F1F] rounded-2xl p-5 shadow-[4px_4px_0px_#1F1F1F] mb-8 text-left font-mono text-xs space-y-1">
          <p className="text-[#9CA3AF] uppercase tracking-widest mb-2 text-[10px]">Stack Trace</p>
          <p className="text-[#FF5A5F]">RouteNotFoundException: No route found</p>
          <p className="text-[#9CA3AF]">  at BirthdayApp.navigate(unknown route)</p>
          <p className="text-[#9CA3AF]">  at CuriousUser.explore()</p>
          <p className="text-[#4ECDC4]">  // Severity: Low — this is fine</p>
          <p className="text-[#4ECDC4]">  // Status: WONTFIX — feature, not bug</p>
        </div>

        <Link
          href="/"
          className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-8 py-3 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          ← Return to Safety
        </Link>
      </motion.div>
    </div>
  );
}
