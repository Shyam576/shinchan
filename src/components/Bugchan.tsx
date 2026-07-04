"use client";
import { motion } from "framer-motion";

export type BugchanMood = "naughty" | "happy" | "shocked" | "angry" | "proud" | "thinking";

const MOOD_SRC: Record<BugchanMood, string> = {
  naughty: "/default-sinchan.png",
  happy: "/happy-sinchan.png",
  shocked: "/shocked-sinchan.png",
  angry: "/angry-sinchan.png",
  proud: "/proud-sinchan.png",
  thinking: "/thinking-sinchan.png",
};

export default function Bugchan({
  size = 160,
  dancing = false,
  mood,
  winking = false,
  naughty = false,
}: {
  /** Rendered height in px; width follows the image's natural aspect ratio */
  size?: number;
  dancing?: boolean;
  mood?: BugchanMood;
  /** @deprecated kept for older call sites — maps to the "happy" expression */
  winking?: boolean;
  /** @deprecated kept for older call sites — "naughty" is already the default face */
  naughty?: boolean;
}) {
  void naughty;
  const resolvedMood: BugchanMood = mood ?? (winking ? "happy" : "naughty");

  return (
    <motion.div
      animate={dancing ? {
        rotate: [-12, 12, -12, 12, -12],
        y: [0, -14, 2, -14, 0],
        scaleX: [1, 0.9, 1.1, 0.9, 1],
        scaleY: [1, 1.08, 0.94, 1.08, 1],
      } : {
        rotate: [-1.5, 1.5, -1.5],
      }}
      transition={dancing ? {
        duration: 0.52,
        repeat: Infinity,
        ease: "easeInOut",
      } : {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ display: "inline-block", height: size, transformOrigin: "bottom center" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- fixed illustrated asset, not a content image */}
      <img
        src={MOOD_SRC[resolvedMood]}
        alt="Bug Chan"
        draggable={false}
        style={{ display: "block", height: size, width: "auto", userSelect: "none" }}
      />
    </motion.div>
  );
}
