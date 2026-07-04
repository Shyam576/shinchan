"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BirthdayHero from "@/components/BirthdayHero";

const DANCE_THRESHOLD = 5;

// ── Update these to her actual birthday ──
const BIRTHDAY_MONTH = 7; // July
const BIRTHDAY_DAY = 15;

function getBirthdaySubtitle() {
  const now = new Date();
  const isToday =
    now.getMonth() + 1 === BIRTHDAY_MONTH && now.getDate() === BIRTHDAY_DAY;
  return isToday ? "Today is the day." : "Built for her birthday, July 15.";
}

const taps = [
  "Hehe… you tapped me 😏",
  "Again? Bold.",
  "Okay fine, I like the attention.",
  "You have a problem.",
  "…okay same.",
  "Go inside already. The birthday is in there 👆",
];

export default function HomePage() {
  const subtitle = getBirthdaySubtitle();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <BirthdayHero
        size={140}
        lines={taps}
        danceThreshold={DANCE_THRESHOLD}
        heading="A tiny birthday world."
        badge={
          <span className="inline-block bg-[#222222] text-[#FFD34D] rounded-full px-3 py-0.5 text-xs font-mono font-semibold tracking-wide">
            Birthday Release v1.0.0
          </span>
        }
        subtitle={
          <>
            Made for someone who deserves more than a group chat message.{" "}
            <span className="text-[#FF5A5F] font-semibold">{subtitle}</span>
          </>
        }
        cta={
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.92, y: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 16 }}
            style={{ display: "inline-block" }}
          >
            <Link
              href="/intro"
              className="inline-block bg-[#FF5A5F] text-white border-2 border-[#222222] rounded-full px-8 py-3 text-lg font-semibold shadow-[4px_4px_0px_#222222]"
            >
              Enter →
            </Link>
          </motion.div>
        }
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-16 group relative inline-flex justify-center"
      >
        <span
          className="text-2xl opacity-[0.18] group-hover:opacity-50 transition-opacity duration-300 cursor-default select-none"
          aria-hidden="true"
        >
          🎮
        </span>
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1F1F1F] text-white text-xs font-mono rounded-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md">
          ↑↑↓↓←→←→BA
        </div>
      </motion.div>
    </div>
  );
}
