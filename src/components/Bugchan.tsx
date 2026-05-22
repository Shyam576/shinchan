"use client";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";

// Mascot — anime chibi-style character for Sonam Deki Tshering (Tiger).
export default function Bugchan({ size = 160 }: { size?: number }) {
  const h = Math.round(size * 1.35);
  const partyHat = useSyncExternalStore(
    () => () => {},
    () => sessionStorage.getItem("birthdayParty") === "1",
    () => false
  );

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 160 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tiger's mascot"
      style={{ overflow: "visible" }}
    >
      {/* ── Left antenna ── */}
      <motion.g
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "71px 24px" }}
      >
        <line x1="71" y1="24" x2="52" y2="5" stroke="#1F1F1F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="52" cy="4" r="5.5" fill="#FF5A5F" stroke="#1F1F1F" strokeWidth="2" />
      </motion.g>

      {/* ── Right antenna ── */}
      <motion.g
        animate={{ rotate: [6, -6, 6] }}
        transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "89px 24px" }}
      >
        <line x1="89" y1="24" x2="108" y2="5" stroke="#1F1F1F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="108" cy="4" r="5.5" fill="#4ECDC4" stroke="#1F1F1F" strokeWidth="2" />
      </motion.g>

      {/* ── Hair back layer ── */}
      <path
        d="M 30 68 C 28 18 54 2 80 12 C 106 2 132 18 130 68"
        fill="#2A1A00"
      />
      {/* Front hair — defined bangs covering forehead */}
      <path
        d="M 34 56 C 36 36 46 22 58 18 Q 65 15 72 18 Q 76 20 78 26 Q 80 20 82 18 Q 88 15 95 18 C 108 22 122 36 126 56"
        fill="#2A1A00"
      />
      {/* Small top tuft */}
      <path d="M 73 12 Q 80 3 87 12 Q 84 16 80 14 Q 76 16 73 12 Z" fill="#2A1A00" />

      {/* ── Head — rounder & bigger for anime chibi look ── */}
      <ellipse cx="80" cy="68" rx="50" ry="50" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="3" />

      {/* ── Ears ── */}
      <ellipse cx="30" cy="68" rx="10" ry="13" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />
      <ellipse cx="130" cy="68" rx="10" ry="13" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />
      <ellipse cx="30" cy="68" rx="5" ry="7" fill="#FFAD90" />
      <ellipse cx="130" cy="68" rx="5" ry="7" fill="#FFAD90" />

      {/* ── Eyebrows — thick anime arches ── */}
      <path d="M 47 55 Q 61 47 76 53" stroke="#1F1F1F" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M 84 53 Q 99 47 113 55" stroke="#1F1F1F" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* ── Eye whites — large, round, anime-style ── */}
      <circle cx="63" cy="70" r="15" fill="white" stroke="#1F1F1F" strokeWidth="2.5" />
      <circle cx="97" cy="70" r="15" fill="white" stroke="#1F1F1F" strokeWidth="2.5" />

      {/* ── Iris (warm dark brown) ── */}
      <circle cx="65" cy="72" r="10" fill="#3D1F00" />
      <circle cx="99" cy="72" r="10" fill="#3D1F00" />

      {/* ── Pupils ── */}
      <circle cx="66" cy="73" r="6" fill="#0D0500" />
      <circle cx="100" cy="73" r="6" fill="#0D0500" />

      {/* ── Eye shines — big primary + small secondary ── */}
      <circle cx="60" cy="67" r="4" fill="white" />
      <circle cx="94" cy="67" r="4" fill="white" />
      <circle cx="68" cy="77" r="2" fill="white" opacity="0.7" />
      <circle cx="102" cy="77" r="2" fill="white" opacity="0.7" />

      {/* ── Eyelids — blink animation ── */}
      <motion.ellipse
        cx="63" cy="70" rx={15} ry={0}
        fill="#FFCBA4"
        animate={{ ry: [0, 16, 0] }}
        transition={{ duration: 0.18, ease: "easeInOut", repeat: Infinity, repeatDelay: 4.5 }}
      />
      <motion.ellipse
        cx="97" cy="70" rx={15} ry={0}
        fill="#FFCBA4"
        animate={{ ry: [0, 16, 0] }}
        transition={{ duration: 0.18, ease: "easeInOut", repeat: Infinity, repeatDelay: 4.5 }}
      />

      {/* ── Nose — simple Shinchan-style upturned arch ── */}
      <path d="M 74 88 Q 80 96 86 88" stroke="#C87040" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* ── Mouth — wide open anime U-smile ── */}
      <path d="M 56 97 Q 80 122 104 97" stroke="#1F1F1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 61 101 Q 80 116 99 101" fill="#FF8080" />

      {/* ── Blush — big soft circles ── */}
      <ellipse cx="40" cy="83" rx="15" ry="9" fill="#FFB3BA" fillOpacity="0.72" />
      <ellipse cx="120" cy="83" rx="15" ry="9" fill="#FFB3BA" fillOpacity="0.72" />

      {/* ── Neck ── */}
      <rect x="73" y="114" width="14" height="14" rx="5" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />

      {/* ── Left arm (sleeve) ── */}
      <path
        d="M 40 120 C 24 122, 17 134, 19 147 C 21 155, 32 157, 41 152 C 44 144, 44 131, 41 122 Z"
        fill="#FF5A5F" stroke="#1F1F1F" strokeWidth="2.5"
      />
      {/* ── Right arm (sleeve) ── */}
      <path
        d="M 120 120 C 136 122, 143 134, 141 147 C 139 155, 128 157, 119 152 C 116 144, 116 131, 119 122 Z"
        fill="#FF5A5F" stroke="#1F1F1F" strokeWidth="2.5"
      />

      {/* ── Shirt body ── */}
      <path
        d="M 43 119 C 37 123, 35 137, 37 150 C 41 159, 58 163, 80 163 C 102 163, 119 159, 123 150 C 125 137, 123 123, 117 119 C 109 114, 96 112, 80 112 C 64 112, 51 114, 43 119 Z"
        fill="#FF5A5F" stroke="#1F1F1F" strokeWidth="3"
      />

      {/* ── Collar V ── */}
      <path d="M 73 116 L 80 125 L 87 116" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* ── Hands ── */}
      <circle cx="21" cy="152" r="9.5" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />
      <circle cx="139" cy="152" r="9.5" fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />

      {/* ── Shorts ── */}
      <path
        d="M 47 161 C 45 168, 45 178, 49 185 C 55 192, 68 194, 80 194 C 92 194, 105 192, 111 185 C 115 178, 115 168, 113 161 Z"
        fill="#FFE66D" stroke="#1F1F1F" strokeWidth="3"
      />
      <rect x="61" y="169" width="14" height="11" rx="3.5" fill="none" stroke="#1F1F1F" strokeWidth="1.5" />

      {/* ── Legs ── */}
      <path d="M 50 191 C 48 199, 50 209, 56 212 C 62 215, 74 215, 78 209 C 80 205, 78 196, 74 191 Z"
        fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />
      <path d="M 82 191 C 82 196, 82 205, 84 209 C 88 215, 98 215, 104 212 C 110 209, 112 199, 110 191 Z"
        fill="#FFCBA4" stroke="#1F1F1F" strokeWidth="2.5" />

      {/* ── Shoes ── */}
      <ellipse cx="63" cy="213" rx="15" ry="7" fill="#1F1F1F" />
      <ellipse cx="97" cy="213" rx="15" ry="7" fill="#1F1F1F" />

      {/* ── Party hat ── */}
      {partyHat && (
        <g transform="translate(80, 19) rotate(12)">
          <polygon points="0,-34 -15,0 15,0" fill="#FF5A5F" stroke="#1F1F1F" strokeWidth="2" />
          <polygon points="0,-34 -15,0 -9,0 0,-20" fill="white" fillOpacity="0.25" />
          <circle cx="3" cy="-20" r="2.5" fill="white" fillOpacity="0.7" />
          <circle cx="-5" cy="-11" r="2" fill="#FFE66D" fillOpacity="0.8" />
          <rect x="-17" y="-3" width="34" height="5" rx="2.5" fill="#FFE66D" stroke="#1F1F1F" strokeWidth="1.5" />
          <circle cx="0" cy="-36" r="5.5" fill="#FFE66D" stroke="#1F1F1F" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}
