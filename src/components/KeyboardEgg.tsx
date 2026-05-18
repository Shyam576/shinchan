"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Bugchan from "@/components/Bugchan";

const lines = [
  "QA mode activated. 😏",
  "Found another one.",
  "She would have caught this first.",
  "All systems: birthday. 🎂",
];

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

export default function KeyboardEgg() {
  const [visible, setVisible] = useState(false);
  const [line, setLine] = useState(lines[0]);
  const qTime = useRef(0);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const konamiIdx = useRef(0);
  const router = useRouter();

  useEffect(() => {
    console.log(
      "%c🐞 You opened DevTools. Of course you did.",
      "color:#FF5A5F;font-size:14px;font-weight:bold;"
    );
    console.log(
      "%cPsst — there's a cheat code somewhere on this page 🎮",
      "color:#9CA3AF;font-size:12px;"
    );
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      // Konami code
      if (e.key === KONAMI[konamiIdx.current]) {
        konamiIdx.current += 1;
        if (konamiIdx.current === KONAMI.length) {
          konamiIdx.current = 0;
          router.push("/secret?via=konami");
          return;
        }
      } else {
        konamiIdx.current = e.key === KONAMI[0] ? 1 : 0;
      }

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
  }, [router]);

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
