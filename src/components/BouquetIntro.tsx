"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// One 5-petal anime flower
function Flower({
  petalColor,
  centerColor,
  petalSize = 1,
}: {
  petalColor: string;
  centerColor: string;
  petalSize?: number;
}) {
  const pw = 9 * petalSize;
  const ph = 15 * petalSize;
  const pd = 17 * petalSize;
  const cr = 10 * petalSize;

  return (
    <g>
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx={0}
          cy={-pd}
          rx={pw}
          ry={ph}
          fill={petalColor}
          stroke="#2A1400"
          strokeWidth={0.8}
          transform={`rotate(${deg})`}
          opacity={0.92}
        />
      ))}
      {/* petal sheen */}
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={`hi-${deg}`}
          cx={-1.5 * petalSize}
          cy={-(pd + 5 * petalSize)}
          rx={2.5 * petalSize}
          ry={4 * petalSize}
          fill="white"
          opacity={0.22}
          transform={`rotate(${deg})`}
        />
      ))}
      {/* center */}
      <circle r={cr} fill={centerColor} stroke="#2A1400" strokeWidth={0.9} />
      <circle r={cr * 0.55} fill="white" opacity={0.3} />
      {/* center dots */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <circle
          key={`dot-${deg}`}
          cx={Math.cos((deg * Math.PI) / 180) * cr * 0.55}
          cy={Math.sin((deg * Math.PI) / 180) * cr * 0.55}
          r={1.5 * petalSize}
          fill="#2A1400"
          opacity={0.35}
        />
      ))}
    </g>
  );
}

// Leaf shape
function Leaf({ x, y, rotate, size = 1 }: { x: number; y: number; rotate: number; size?: number }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate})`}>
      <path
        d={`M 0 0 C ${-10 * size} ${-8 * size} ${-14 * size} ${-20 * size} 0 ${-28 * size} C ${14 * size} ${-20 * size} ${10 * size} ${-8 * size} 0 0 Z`}
        fill="#4CAF50"
        stroke="#2E7D32"
        strokeWidth={0.8}
      />
      <path
        d={`M 0 0 L 0 ${-26 * size}`}
        stroke="#2E7D32"
        strokeWidth={0.7}
        strokeLinecap="round"
        opacity={0.6}
      />
      {/* leaf sheen */}
      <path
        d={`M ${-2 * size} ${-4 * size} C ${-8 * size} ${-10 * size} ${-8 * size} ${-18 * size} ${-2 * size} ${-24 * size}`}
        stroke="white"
        strokeWidth={1.2}
        strokeLinecap="round"
        opacity={0.28}
        fill="none"
      />
    </g>
  );
}

const FLOWERS = [
  { x: 62,  y: 90,  ps: 0.88, petal: "#FF9BAA", center: "#FFE66D", rot: -8,  delay: 0.05 },
  { x: 100, y: 64,  ps: 1.08, petal: "#FF5A5F", center: "#FFE66D", rot:  4,  delay: 0.22 },
  { x: 138, y: 90,  ps: 0.88, petal: "#FFE66D", center: "#FF5A5F", rot:  10, delay: 0.38 },
  { x: 78,  y: 116, ps: 0.72, petal: "#4ECDC4", center: "#FEFEFE", rot: -12, delay: 0.12 },
  { x: 122, y: 113, ps: 0.72, petal: "#FFCBA4", center: "#4ECDC4", rot:  14, delay: 0.30 },
];

export default function BouquetIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("bouquetSeen")) return;
    setVisible(true);
    const leaveTimer = setTimeout(() => setLeaving(true), 3200);
    const doneTimer  = setTimeout(() => {
      sessionStorage.setItem("bouquetSeen", "1");
      setVisible(false);
    }, 4000);
    return () => { clearTimeout(leaveTimer); clearTimeout(doneTimer); };
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="bouquet-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFF8E7]"
        >
          {/* floating confetti dots */}
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 6 + (i % 4) * 3,
                height: 6 + (i % 4) * 3,
                left: `${5 + (i * 53) % 90}%`,
                top:  `${8 + (i * 37) % 80}%`,
                backgroundColor: ["#FF5A5F","#FFE66D","#4ECDC4","#FF9BAA","#FFCBA4"][i % 5],
                opacity: 0.45,
              }}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2.4 + (i % 3) * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (i * 0.13) % 1.2,
              }}
            />
          ))}

          {/* bouquet */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.1 }}
          >
            <svg
              width={220}
              height={280}
              viewBox="0 0 200 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: "visible" }}
            >
              {/* ── stems ── */}
              <path d="M 62 90  C 62 145, 88 185, 97 222"  stroke="#388E3C" strokeWidth={3.5} strokeLinecap="round" />
              <path d="M 100 64 L 100 222"                  stroke="#388E3C" strokeWidth={3.5} strokeLinecap="round" />
              <path d="M 138 90 C 138 145, 112 185, 103 222" stroke="#388E3C" strokeWidth={3.5} strokeLinecap="round" />
              <path d="M 78 116 C 78 160, 90 195, 96 222"   stroke="#388E3C" strokeWidth={2.8} strokeLinecap="round" />
              <path d="M 122 113 C 122 158, 110 195, 104 222" stroke="#388E3C" strokeWidth={2.8} strokeLinecap="round" />

              {/* ── leaves ── */}
              {[
                { x: 72,  y: 155, rot: -38, s: 0.92, delay: 0.55 },
                { x: 128, y: 152, rot:  38, s: 0.92, delay: 0.65 },
                { x: 93,  y: 178, rot: -22, s: 0.72, delay: 0.75 },
                { x: 107, y: 176, rot:  22, s: 0.72, delay: 0.80 },
              ].map((l, i) => (
                <motion.g
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18, delay: l.delay }}
                  style={{ transformOrigin: `${l.x}px ${l.y}px` }}
                >
                  <Leaf x={l.x} y={l.y} rotate={l.rot} size={l.s} />
                </motion.g>
              ))}

              {/* ── ribbon wrap ── */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
                style={{ transformOrigin: "100px 220px" }}
              >
                {/* wrap band */}
                <path d="M 82 218 Q 100 224 118 218 Q 116 235 100 238 Q 84 235 82 218 Z" fill="#FF9BAA" stroke="#2A1400" strokeWidth={1.2} />
                {/* bow left loop */}
                <ellipse cx={84} cy={214} rx={14} ry={9} fill="#FF5A5F" stroke="#2A1400" strokeWidth={1.2} transform="rotate(-28, 84, 214)" />
                <ellipse cx={83} cy={213} rx={6} ry={4} fill="white" opacity={0.2} transform="rotate(-28, 83, 213)" />
                {/* bow right loop */}
                <ellipse cx={116} cy={214} rx={14} ry={9} fill="#FF5A5F" stroke="#2A1400" strokeWidth={1.2} transform="rotate(28, 116, 214)" />
                <ellipse cx={117} cy={213} rx={6} ry={4} fill="white" opacity={0.2} transform="rotate(28, 117, 213)" />
                {/* bow knot */}
                <circle cx={100} cy={216} r={7} fill="#FF5A5F" stroke="#2A1400" strokeWidth={1.2} />
                <circle cx={100} cy={216} r={3.5} fill="white" opacity={0.25} />
                {/* ribbon tails */}
                <path d="M 93 224 C 88 242 84 252 86 260" stroke="#FF5A5F" strokeWidth={3} strokeLinecap="round" />
                <path d="M 107 224 C 112 242 116 252 114 260" stroke="#FF5A5F" strokeWidth={3} strokeLinecap="round" />
              </motion.g>

              {/* ── flowers ── */}
              {FLOWERS.map((f, i) => (
                <motion.g
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 16,
                    delay: f.delay,
                  }}
                  style={{ transformOrigin: `${f.x}px ${f.y}px` }}
                >
                  <g transform={`translate(${f.x},${f.y}) rotate(${f.rot})`}>
                    <Flower petalColor={f.petal} centerColor={f.center} petalSize={f.ps} />
                  </g>
                </motion.g>
              ))}

              {/* ── sparkle stars around bouquet ── */}
              {[
                { x: 38,  y: 60,  d: 0.15 },
                { x: 165, y: 55,  d: 0.30 },
                { x: 30,  y: 120, d: 0.45 },
                { x: 172, y: 118, d: 0.20 },
                { x: 55,  y: 42,  d: 0.35 },
                { x: 148, y: 42,  d: 0.10 },
              ].map((s, i) => (
                <motion.g
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.7] }}
                  transition={{ delay: 0.8 + s.d, duration: 0.5, ease: "backOut" }}
                  transform={`translate(${s.x},${s.y})`}
                >
                  <path d="M0,-7 L1.5,-1.5 L7,0 L1.5,1.5 L0,7 L-1.5,1.5 L-7,0 L-1.5,-1.5 Z"
                    fill="#FFE66D" stroke="#2A1400" strokeWidth={0.5} />
                </motion.g>
              ))}
            </svg>
          </motion.div>

          {/* text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
            className="mt-2 text-3xl text-[#FF5A5F]"
            style={{ fontFamily: "var(--font-fredoka)", fontWeight: 600 }}
          >
            Happy Birthday! 🎂
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-1 text-sm text-[#9CA3AF] font-medium"
          >
            This one&apos;s just for you.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
