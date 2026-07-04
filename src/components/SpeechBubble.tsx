"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export default function SpeechBubble({
  text,
  show = true,
  className = "",
  maxWidth = 220,
}: {
  text: ReactNode;
  /** When used inside AnimatePresence, controls mount/unmount */
  show?: boolean;
  className?: string;
  maxWidth?: number;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={typeof text === "string" ? text : "bubble"}
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.95 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={`relative bg-[#FFFDF8] border-[3px] border-[#222222] rounded-3xl px-4 py-2.5 text-sm font-semibold text-[#222222] shadow-[3px_3px_0px_#222222] text-center leading-snug ${className}`}
          style={{ maxWidth }}
        >
          {text}
          {/* tail pointing down toward the mascot */}
          <span className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[9px] border-r-[9px] border-t-[11px] border-l-transparent border-r-transparent border-t-[#222222]" />
          <span className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#FFFDF8]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
