"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BugchanSay from "@/components/BugchanSay";
import BouncyLink from "@/components/BouncyLink";

// ── Update this to when you two actually met/became friends ──
const FRIENDSHIP_START = new Date(2019, 0, 1); // Jan 1, 2019

function daysSince(date: Date) {
  return Math.max(0, Math.floor((Date.now() - date.getTime()) / 86_400_000));
}

function CountUp({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        function tick(now: number) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

const metrics = [
  { label: "Days of Friendship", value: daysSince(FRIENDSHIP_START), suffix: "", color: "#FF5A5F" },
  { label: "Bugs Found in Production", value: 1248932, suffix: "", color: "#4DCDB6" },
  { label: "Sprints Survived", value: 214, suffix: "", color: "#FFD34D" },
  { label: "Roasts Delivered", value: 9001, suffix: "", color: "#FF5A5F" },
  { label: "Compliments Given", value: 3, suffix: "", color: "#4DCDB6" },
  { label: "Times Right in Meetings", value: 100, suffix: "%", color: "#FFD34D" },
];

const gauges = [
  { label: "Patience Level", value: 97, note: "mostly with me" },
  { label: "Sarcasm Coverage", value: 100, note: "full test coverage" },
  { label: "Chaotic Energy", value: 88, note: "despite being the senior dev" },
];

const activity = [
  { tag: "fix", msg: "reduced group chat response time from 3 days to instant when it's gossip" },
  { tag: "feat", msg: "added spontaneous nap module, deploys without warning" },
  { tag: "chore", msg: "refactored Monday standup into extra sarcasm" },
  { tag: "fix", msg: "patched vulnerability where someone almost got away with a bad excuse" },
  { tag: "feat", msg: "shipped unconditional support, no changelog needed" },
];

const TAG_COLOR: Record<string, string> = {
  fix: "#FF5A5F",
  feat: "#4DCDB6",
  chore: "#9CA3AF",
};

export default function QaStatsPage() {
  return (
    <div className="min-h-screen px-5 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-col sm:flex-row items-start gap-4"
        >
          <div className="flex-1">
            <div className="inline-block bg-[#222222] text-[#FFD34D] rounded-full px-3 py-0.5 text-xs font-mono font-semibold mb-2 tracking-wide">
              QA DASHBOARD — LIVE
            </div>
            <h1
              className="text-4xl text-[#222222] mb-2"
              style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
            >
              Performance Report
            </h1>
            <p className="text-[#9CA3AF]">Auto-generated. Peer-reviewed. Slightly biased.</p>
          </div>
          <BugchanSay text="These metrics are 100% accurate. Trust the dashboard." size={72} />
        </motion.div>

        {/* Status banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 bg-[#4DCDB6] border-2 border-[#222222] rounded-2xl px-5 py-3 shadow-[4px_4px_0px_#222222] flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#222222] shrink-0" />
          <p className="text-[#222222] font-semibold text-sm font-mono">
            ALL SYSTEMS: ICONIC — no incidents reported, ever
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="bg-white border-2 border-[#222222] rounded-2xl p-4 shadow-[4px_4px_0px_#222222]"
            >
              <p className="text-[10px] uppercase tracking-wide text-[#9CA3AF] font-mono font-semibold mb-1">
                {m.label}
              </p>
              <p
                className="text-2xl sm:text-3xl font-semibold leading-none"
                style={{ fontFamily: "var(--font-fredoka)", color: m.color }}
              >
                <CountUp target={m.value} />
                {m.suffix}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gauges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white border-2 border-[#222222] rounded-2xl p-5 shadow-[4px_4px_0px_#222222] mb-8"
        >
          <p className="text-xs uppercase tracking-wide text-[#9CA3AF] font-mono font-semibold mb-4">
            System Gauges
          </p>
          <div className="space-y-4">
            {gauges.map((g, i) => (
              <div key={g.label}>
                <div className="flex justify-between text-sm font-semibold text-[#222222] mb-1.5">
                  <span>{g.label}</span>
                  <span className="text-[#9CA3AF] font-normal">{g.note}</span>
                </div>
                <div className="h-3 rounded-full bg-[#FEF6E7] border-2 border-[#222222] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${g.value}%` }}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.9, ease: "easeOut" }}
                    className="h-full bg-[#FF5A5F]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Activity log */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-[#222222] rounded-2xl p-5 shadow-[4px_4px_0px_#222222] mb-10 font-mono text-sm"
        >
          <p className="text-[#9CA3AF] text-xs uppercase tracking-wide font-semibold mb-3">
            Recent Activity
          </p>
          <div className="space-y-2">
            {activity.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.08 }}
                className="flex gap-2"
              >
                <span className="font-semibold shrink-0" style={{ color: TAG_COLOR[a.tag] }}>
                  {a.tag}:
                </span>
                <span className="text-[#E5E7EB]">{a.msg}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <BouncyLink
            href="/final"
            className="inline-block bg-[#FF5A5F] text-white border-2 border-[#222222] rounded-full px-8 py-3 font-semibold shadow-[4px_4px_0px_#222222]"
          >
            Deploy to Production →
          </BouncyLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-center"
        >
          <Link
            href="/appreciation"
            className="text-sm text-[#9CA3AF] hover:text-[#222222] transition-colors font-medium"
          >
            ← Off the Record
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
