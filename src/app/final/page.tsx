"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Bugchan from "@/components/Bugchan";

export default function FinalPage() {
  const fired = useRef(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    // Lazy-load canvas-confetti only in browser
    import("canvas-confetti").then(({ default: confetti }) => {
      const end = Date.now() + 4000;
      const colors = ["#FFD93D", "#FF4D4D", "#4D96FF", "#6BCB77", "#C77DFF", "#FF9A3C"];

      const frame = () => {
        confetti({
          particleCount: 6,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 6,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors,
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();

      // Center burst
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.55 },
        colors,
      });

      setTimeout(() => setShowMessage(true), 600);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center overflow-hidden relative">
      {/* Decorative corner stars */}
      {["top-4 left-4", "top-4 right-4", "bottom-20 left-4", "bottom-20 right-4"].map((pos, i) => (
        <motion.span
          key={i}
          className={`absolute text-3xl select-none ${pos}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
        >
          ⭐
        </motion.span>
      ))}

      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 12 }}
        className="bg-white border-4 border-[#1E1E1E] rounded-[24px] shadow-[10px_10px_0px_#1E1E1E] p-8 max-w-xl w-full z-10"
      >
        {/* Rainbow top bar */}
        <div className="h-4 rounded-full mb-6 bg-[repeating-linear-gradient(90deg,#FF4D4D_0,#FF4D4D_16%,#FF9A3C_16%,#FF9A3C_32%,#FFD93D_32%,#FFD93D_48%,#6BCB77_48%,#6BCB77_64%,#4D96FF_64%,#4D96FF_80%,#C77DFF_80%,#C77DFF_100%)]" />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-4"
        >
          <Bugchan size={150} />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 180, delay: 0.2 }}
        >
          <div className="text-5xl mb-3">🎂</div>
          <h1 className="text-4xl md:text-5xl font-black text-[#FF4D4D] leading-tight mb-4 drop-shadow-[3px_3px_0px_#FFD93D]">
            Happy Birthday,<br />
            <span className="text-[#4D96FF]">Senior QA</span><br />
            <span className="text-[#6BCB77]">Baby Boss!</span>
          </h1>
        </motion.div>

        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#FFF4D6] border-3 border-[#1E1E1E] rounded-[20px] p-4 mb-4 text-left">
              <p className="font-black text-[#1E1E1E] text-lg mb-2">🧾 Birthday Test Report:</p>
              <ul className="space-y-1 text-sm font-bold">
                <li>✅ Awesomeness: <span className="text-[#6BCB77]">PASS</span></li>
                <li>✅ Bug-Finding Skills: <span className="text-[#6BCB77]">PASS (legendary)</span></li>
                <li>✅ Deserving of Cake: <span className="text-[#6BCB77]">PASS (unlimited slices)</span></li>
                <li>✅ Admin Rights on Birthday: <span className="text-[#6BCB77]">PASS</span></li>
                <li>✅ Overall Status: <span className="text-[#4D96FF]">PROMOTED to Birthday Queen 👑</span></li>
              </ul>
            </div>

            <p className="text-lg font-bold text-[#1E1E1E] mb-2">
              May your year be bug-free,<br />
              your deployments be smooth,<br />
              and your birthday cake be <em>perfectly formatted</em>. 🎂
            </p>
            <p className="text-sm text-[#FF4D4D] font-black mb-4">
              — Bugchan &amp; the whole team 💖
            </p>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97, x: 2, y: 2 }}
          onClick={() => {
            import("canvas-confetti").then(({ default: confetti }) => {
              confetti({
                particleCount: 200,
                spread: 120,
                origin: { y: 0.6 },
                colors: ["#FFD93D", "#FF4D4D", "#4D96FF", "#6BCB77", "#C77DFF"],
              });
            });
          }}
          className="bg-[#FFD93D] border-4 border-[#1E1E1E] rounded-full px-8 py-4 font-black text-xl shadow-[6px_6px_0px_#1E1E1E] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all mb-4"
        >
          Deploy Birthday Wish 🚀
        </motion.button>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/intro"
            className="bg-[#4D96FF] border-3 border-[#1E1E1E] rounded-full px-4 py-2 font-black text-white text-sm shadow-[4px_4px_0px_#1E1E1E] hover:scale-105 transition-all"
          >
            ← Back to Start
          </Link>
          <Link
            href="/bug-hunt"
            className="bg-[#6BCB77] border-3 border-[#1E1E1E] rounded-full px-4 py-2 font-black text-[#1E1E1E] text-sm shadow-[4px_4px_0px_#1E1E1E] hover:scale-105 transition-all"
          >
            Hunt More Bugs 🐛
          </Link>
        </div>

        {/* Rainbow bottom bar */}
        <div className="h-4 rounded-full mt-6 bg-[repeating-linear-gradient(90deg,#C77DFF_0,#C77DFF_16%,#4D96FF_16%,#4D96FF_32%,#6BCB77_32%,#6BCB77_48%,#FFD93D_48%,#FFD93D_64%,#FF9A3C_64%,#FF9A3C_80%,#FF4D4D_80%,#FF4D4D_100%)]" />
      </motion.div>
    </div>
  );
}
