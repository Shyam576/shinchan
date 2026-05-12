"use client";
import { motion } from "framer-motion";

// Bugchan — original cartoon mascot inspired by chibi style.
// Round face, red shirt, yellow shorts, bug antennae.
// Smooth bezier paths, animated blink + antenna wiggle.
export default function Bugchan({ size = 160 }: { size?: number }) {
  const h = Math.round(size * 1.35);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 160 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bugchan the naughty tester mascot"
    >
      {/* ── Left antenna (wiggle outward) ── */}
      <motion.g
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "73px 22px" }}
      >
        <line x1="73" y1="22" x2="55" y2="5" stroke="#1F1F1F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="55" cy="4" r="5" fill="#FF5A5F" stroke="#1F1F1F" strokeWidth="2" />
      </motion.g>

      {/* ── Right antenna (wiggle opposite phase) ── */}
      <motion.g
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "87px 20px" }}
      >
        <line x1="87" y1="20" x2="105" y2="5" stroke="#1F1F1F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="105" cy="4" r="5" fill="#4ECDC4" stroke="#1F1F1F" strokeWidth="2" />
      </motion.g>

      {/* ── Hair (behind head) ── */}
      <path
        d="M 37 62 C 35 22 56 4 80 14 C 104 4 125 22 123 62"
        fill="#2D2D2D"
      />

      {/* ── Head ── */}
      <ellipse cx="80" cy="68" rx="44" ry="48" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="3" />

      {/* ── Ears ── */}
      <ellipse cx="36" cy="68" rx="9" ry="12" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />
      <ellipse cx="124" cy="68" rx="9" ry="12" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />
      <ellipse cx="36" cy="68" rx="4.5" ry="6.5" fill="#FFB08A" />
      <ellipse cx="124" cy="68" rx="4.5" ry="6.5" fill="#FFB08A" />

      {/* ── Eyebrows (mischievous inward slant) ── */}
      <path d="M 54 52 Q 64 46 73 51" stroke="#1F1F1F" strokeWidth="3" strokeLinecap="round" />
      <path d="M 87 51 Q 96 46 106 52" stroke="#1F1F1F" strokeWidth="3" strokeLinecap="round" />

      {/* ── Eye whites ── */}
      <ellipse cx="65" cy="67" rx="10" ry="11" fill="white" stroke="#1F1F1F" strokeWidth="2.5" />
      <ellipse cx="95" cy="67" rx="10" ry="11" fill="white" stroke="#1F1F1F" strokeWidth="2.5" />

      {/* ── Pupils (slightly right-looking for mischief) ── */}
      <circle cx="67" cy="69" r="6" fill="#1F1F1F" />
      <circle cx="97" cy="69" r="6" fill="#1F1F1F" />

      {/* ── Eye shines ── */}
      <circle cx="69" cy="66" r="2.5" fill="white" />
      <circle cx="99" cy="66" r="2.5" fill="white" />

      {/* ── Eyelids — animated blink (skin-colored, on top of eyes) ── */}
      <motion.ellipse
        cx="65"
        cy="67"
        rx={10.5}
        fill="#FFCBA4"
        animate={{ ry: [0, 11, 0] }}
        transition={{ duration: 0.22, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.8 }}
      />
      <motion.ellipse
        cx="95"
        cy="67"
        rx={10.5}
        fill="#FFCBA4"
        animate={{ ry: [0, 11, 0] }}
        transition={{ duration: 0.22, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.8 }}
      />

      {/* ── Nose ── */}
      <ellipse cx="80" cy="79" rx="5" ry="3.5" fill="#FFAD90" stroke="#1F1F1F" strokeWidth="1.5" />

      {/* ── Mouth (upward smirk curve) ── */}
      <path d="M 64 90 Q 80 104 96 90" stroke="#1F1F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 68 93 Q 80 102 92 93" fill="#FF8080" />

      {/* ── Rosy cheeks ── */}
      <ellipse cx="51" cy="82" rx="9" ry="6" fill="#FFB3BA" fillOpacity="0.55" />
      <ellipse cx="109" cy="82" rx="9" ry="6" fill="#FFB3BA" fillOpacity="0.55" />

      {/* ── Neck ── */}
      <rect x="73" y="114" width="14" height="14" rx="5" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />

      {/* ── Left arm (sleeve) ── */}
      <path
        d="M 40 120 C 24 122, 17 134, 19 147 C 21 155, 32 157, 41 152 C 44 144, 44 131, 41 122 Z"
        fill="#FF5A5F"
        stroke="#1F1F1F"
        strokeWidth="2.5"
      />
      {/* ── Right arm (sleeve) ── */}
      <path
        d="M 120 120 C 136 122, 143 134, 141 147 C 139 155, 128 157, 119 152 C 116 144, 116 131, 119 122 Z"
        fill="#FF5A5F"
        stroke="#1F1F1F"
        strokeWidth="2.5"
      />

      {/* ── Shirt body ── */}
      <path
        d="M 43 119 C 37 123, 35 137, 37 150 C 41 159, 58 163, 80 163 C 102 163, 119 159, 123 150 C 125 137, 123 123, 117 119 C 109 114, 96 112, 80 112 C 64 112, 51 114, 43 119 Z"
        fill="#FF5A5F"
        stroke="#1F1F1F"
        strokeWidth="3"
      />

      {/* ── Collar V ── */}
      <path d="M 73 116 L 80 125 L 87 116" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* ── Hands ── */}
      <circle cx="21" cy="152" r="9.5" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />
      <circle cx="139" cy="152" r="9.5" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />

      {/* ── Shorts ── */}
      <path
        d="M 47 161 C 45 168, 45 178, 49 185 C 55 192, 68 194, 80 194 C 92 194, 105 192, 111 185 C 115 178, 115 168, 113 161 Z"
        fill="#FFE66D"
        stroke="#1F1F1F"
        strokeWidth="3"
      />
      {/* Pocket */}
      <rect x="61" y="169" width="14" height="11" rx="3.5" fill="none" stroke="#1F1F1F" strokeWidth="1.5" />

      {/* ── Legs ── */}
      <path
        d="M 50 191 C 48 199, 50 209, 56 212 C 62 215, 74 215, 78 209 C 80 205, 78 196, 74 191 Z"
        fill="#FFCBA4"
        stroke="#1F1F1F"
        strokeWidth="2.5"
      />
      <path
        d="M 82 191 C 82 196, 82 205, 84 209 C 88 215, 98 215, 104 212 C 110 209, 112 199, 110 191 Z"
        fill="#FFCBA4"
        stroke="#1F1F1F"
        strokeWidth="2.5"
      />

      {/* ── Shoes ── */}
      <ellipse cx="63" cy="213" rx="15" ry="7" fill="#1F1F1F" />
      <ellipse cx="97" cy="213" rx="15" ry="7" fill="#1F1F1F" />
    </svg>
  );
}
