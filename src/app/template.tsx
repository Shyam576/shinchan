"use client";
import { motion } from "framer-motion";

// Next.js App Router: template.tsx creates a NEW instance on every navigation,
// so this motion.div animates fresh on every route change — no per-page changes needed.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
