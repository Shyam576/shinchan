"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BugchanSay from "@/components/BugchanSay";
import BouncyLink from "@/components/BouncyLink";

const truths = [
  "She is annoying, but only in the way people secretly miss.",
  "She finds the bug other people swore did not exist.",
  "She has been here longer than the system — and the system is better for it.",
  "She makes things feel lighter once you are in her circle.",
  "She is both smart and fun. That combination is rarer than it sounds.",
  "She will outlast every bad day she has ever had.",
];

const RUNAWAY_IDX = 4;

export default function TestCasesPage() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [runawayPos, setRunawayPos] = useState({ x: 0, y: 0 });
  const [runawayCaught, setRunawayCaught] = useState(false);
  const [showCaughtMsg, setShowCaughtMsg] = useState(false);
  const runawayRef = useRef<HTMLButtonElement>(null);

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  function handlePointerProximity(clientX: number, clientY: number) {
    if (runawayCaught || checked.has(RUNAWAY_IDX)) return;
    const btn = runawayRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dist = Math.hypot(clientX - cx, clientY - cy);
    if (dist < 90) {
      const angle = Math.atan2(cy - clientY, cx - clientX);
      setRunawayPos((prev) => ({
        x: Math.max(-80, Math.min(80, prev.x + Math.cos(angle) * 55 + (Math.random() - 0.5) * 30)),
        y: Math.max(-18, Math.min(18, prev.y + Math.sin(angle) * 22 + (Math.random() - 0.5) * 14)),
      }));
    }
  }

  function handleMouseMove(e: React.MouseEvent) { handlePointerProximity(e.clientX, e.clientY); }
  function handleTouchMove(e: React.TouchEvent) {
    const t = e.touches[0];
    if (t) handlePointerProximity(t.clientX, t.clientY);
  }

  const allChecked = checked.size === truths.length;

  useEffect(() => {
    if (!allChecked) return;
    import("canvas-confetti").then(({ default: confetti }) => {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 }, colors: ["#4ECDC4", "#FFE66D", "#FF5A5F"] });
    });
  }, [allChecked]);

  return (
    <div className="min-h-screen px-5 py-12" onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-col sm:flex-row items-start gap-4"
        >
          <div className="flex-1">
            <div className="inline-block bg-[#1F1F1F] text-[#FFE66D] rounded-full px-3 py-0.5 text-xs font-mono font-semibold mb-2 tracking-wide">
              TEST SUITE v1.0
            </div>
            <h1
              className="text-4xl text-[#1F1F1F] mb-2"
              style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
            >
              Passed Test Cases
            </h1>
            <p className="text-[#9CA3AF]">All assertions verified. No edge cases remain.</p>
          </div>
          <BugchanSay text="All checks must pass before deployment." size={72} />
        </motion.div>

        <div className="space-y-4">
          {truths.map((truth, i) => (
            <motion.button
              key={i}
              ref={i === RUNAWAY_IDX ? (runawayRef as React.RefObject<HTMLButtonElement>) : undefined}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => {
                toggle(i);
                if (i === RUNAWAY_IDX && !checked.has(i)) {
                  setRunawayCaught(true);
                  setRunawayPos({ x: 0, y: 0 });
                  setShowCaughtMsg(true);
                  setTimeout(() => setShowCaughtMsg(false), 3500);
                }
              }}
              style={
                i === RUNAWAY_IDX && !checked.has(RUNAWAY_IDX)
                  ? {
                      transform: `translate(${runawayPos.x}px, ${runawayPos.y}px)`,
                      transition: "transform 0.12s ease",
                    }
                  : {}
              }
              className={[
                "w-full text-left p-5 border-2 border-[#1F1F1F] rounded-2xl transition-all shadow-[4px_4px_0px_#1F1F1F]",
                checked.has(i) ? "bg-[#4ECDC4]" : "bg-white hover:bg-[#FEF6E7]",
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                <div
                  className={[
                    "mt-0.5 w-6 h-6 rounded-full border-2 border-[#1F1F1F] flex items-center justify-center shrink-0 transition-colors",
                    checked.has(i) ? "bg-[#1F1F1F]" : "bg-white",
                  ].join(" ")}
                >
                  {checked.has(i) && <span className="text-white text-xs">✓</span>}
                </div>
                <p className="text-[#1F1F1F] font-medium leading-snug">{truth}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {showCaughtMsg && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-5 bg-[#4ECDC4] border-2 border-[#1F1F1F] rounded-2xl px-5 py-3 shadow-[4px_4px_0px_#1F1F1F] text-center"
            >
              <p className="text-[#1F1F1F] text-sm font-semibold font-mono">
                Excellent dexterity. Edge case handled. ✓
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {allChecked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p
              className="text-[#1F1F1F] mb-4"
              style={{ fontFamily: "var(--font-fredoka)", fontSize: "1.2rem" }}
            >
              All confirmed. Case closed. 🎯
            </p>
            <BouncyLink
              href="/roast-mode"
              className="inline-block bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-6 py-2.5 text-sm font-semibold shadow-[4px_4px_0px_#1F1F1F]"
            >
              Feature Log →
            </BouncyLink>
          </motion.div>
        )}
      </div>
    </div>
  );
}
