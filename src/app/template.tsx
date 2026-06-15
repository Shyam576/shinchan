"use client";
import { motion } from "framer-motion";

// Next.js App Router: template.tsx creates a NEW instance on every navigation,
// so this motion.div animates fresh on every route change — no per-page changes needed.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}
