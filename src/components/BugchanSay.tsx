"use client";
import { motion } from "framer-motion";
import Bugchan from "@/components/Bugchan";
import SpeechBubble from "@/components/SpeechBubble";

export default function BugchanSay({ text, size = 72 }: { text: string; size?: number }) {
  return (
    <div className="relative inline-flex flex-col items-center gap-1 shrink-0">
      <SpeechBubble text={text} maxWidth={180} className="text-xs" />
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
