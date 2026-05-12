"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";

export default function FinalPage() {
  const fired = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    const t = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  function fireConfetti() {
    import("canvas-confetti").then(({ default: confetti }) => {
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#FFE66D", "#FF5A5F", "#4ECDC4", "#1F1F1F"],
      });
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-[#1F1F1F] rounded-2xl p-10 shadow-[8px_8px_0px_#1F1F1F]"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <Bugchan size={100} />
          </motion.div>

          <div className="inline-block bg-[#FFE66D] border-2 border-[#1F1F1F] rounded-full px-3 py-0.5 text-xs font-semibold mb-5 uppercase tracking-wide">
            Final Message
          </div>

          <h1
            className="text-4xl text-[#FF5A5F] mb-8 leading-snug"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 500 }}
          >
            Happy Birthday.
          </h1>

          {ready && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 text-[#1F1F1F] text-base leading-relaxed"
            >
              <p>
                I made this because you remind me of that rare kind of person — intelligent,
                funny, slightly chaotic, and somehow still childlike in the best way.
              </p>
              <p>
                You make things feel lighter once you are comfortable around someone.
                That is not a small thing. Most people never figure out how to do that.
              </p>
              <p className="text-[#FF5A5F] font-semibold">
                Complaint reviewed. Verdict: she is annoying, but in a way people secretly miss.
              </p>
              <p>
                So today — no bugs, no test cases, no tickets. Just a small birthday world
                made for you.
              </p>
              <p className="font-semibold">
                Have a good one. You have earned it. 🎂
              </p>
            </motion.div>
          )}

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: ready ? 1 : 0 }}
            transition={{ delay: 0.6 }}
            onClick={fireConfetti}
            className="mt-8 bg-[#FF5A5F] text-white border-2 border-[#1F1F1F] rounded-full px-8 py-3 font-semibold shadow-[4px_4px_0px_#1F1F1F] hover:shadow-[2px_2px_0px_#1F1F1F] hover:translate-x-[2px] hover:translate-y-[2px] transition-all w-full"
          >
            Deploy Birthday Wish 🚀
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center"
        >
          <Link
            href="/"
            className="text-sm text-[#9CA3AF] hover:text-[#1F1F1F] transition-colors font-medium"
          >
            ← Back to start
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
