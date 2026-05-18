"use client";
import { motion } from "framer-motion";
import Bugchan from "@/components/Bugchan";

export default function BugchanSay({ text, size = 72 }: { text: string; size?: number }) {
  return (
    <div className="relative inline-flex flex-col items-center gap-1 shrink-0">
      <div className="relative bg-white border-2 border-[#1F1F1F] rounded-2xl px-3 py-2 text-xs font-semibold text-[#1F1F1F] shadow-[2px_2px_0px_#1F1F1F] max-w-[180px] text-center leading-snug">
        {text}
        <span className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-r-[7px] border-t-[9px] border-l-transparent border-r-transparent border-t-[#1F1F1F]" />
        <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent border-t-white" />
      </div>
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="mt-1"
      >
        <Bugchan size={size} />
      </motion.div>
    </div>
  );
}
