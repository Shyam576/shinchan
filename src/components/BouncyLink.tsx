"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function BouncyLink({ href, className, children }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.07, y: -4 }}
      whileTap={{ scale: 0.91, y: 0 }}
      transition={{ type: "spring", stiffness: 440, damping: 16 }}
      style={{ display: "inline-block" }}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
