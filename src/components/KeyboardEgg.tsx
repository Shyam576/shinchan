"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bugchan from "@/components/Bugchan";

const lines = [
  "QA mode activated. 😏",
  "Found another one.",
  "She would have caught this first.",
  "All systems: birthday. 🎂",
];

export default function KeyboardEgg() {
  const [visible, setVisible] = useState(false);
  const [line, setLine] = useState(lines[0]);
  const qTime = useRef(0);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key === "q" || e.key === "Q") {
        qTime.current = Date.now();
        return;
      }
      if ((e.key === "a" || e.key === "A") && Date.now() - qTime.current < 1500) {
        qTime.current = 0;
        setLine(lines[Math.floor(Math.random() * lines.length)]);
        setVisible(true);
        if (dismissTimer.current) clearTimeout(dismissTimer.current);
        dismissTimer.current = setTimeout(() => setVisible(false), 2800);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => setVisible(false)}
          className="fixed bottom-6 right-6 z-[100] bg-white border-2 border-[#1F1F1F] rounded-2xl shadow-[6px_6px_0px_#1F1F1F] p-4 flex items-center gap-3 max-w-xs cursor-pointer select-none"
        >
          <Bugchan size={48} />
          <div>
            <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-widest mb-0.5">
              q → a
            </p>
            <p className="text-sm font-semibold text-[#1F1F1F] leading-snug">{line}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
