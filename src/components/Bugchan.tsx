"use client";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";

export default function Bugchan({ size = 160, dancing = false, winking = false }: { size?: number; dancing?: boolean; winking?: boolean }) {
  const h = Math.round(size * 1.35);
  const partyHat = useSyncExternalStore(
    () => () => {},
    () => sessionStorage.getItem("birthdayParty") === "1",
    () => false
  );

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
      style={{ display: "inline-block", transformOrigin: "bottom center" }}
    >
    <svg
      width={size}
      height={h}
      viewBox="0 0 160 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bugchan mascot"
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* ── Skin ── */}
        <radialGradient id="bc-skin-face" cx="44%" cy="36%" r="64%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="#FFE8D4" />
          <stop offset="65%"  stopColor="#FFCBA4" />
          <stop offset="100%" stopColor="#F0B07A" />
        </radialGradient>
        <linearGradient id="bc-skin-limb" x1="0%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%"   stopColor="#FFD4B0" />
          <stop offset="100%" stopColor="#F0A870" />
        </linearGradient>

        {/* ── Hair ── */}
        <linearGradient id="bc-hair" x1="35%" y1="0%" x2="65%" y2="100%">
          <stop offset="0%"   stopColor="#2E1A00" />
          <stop offset="100%" stopColor="#0E0700" />
        </linearGradient>
        <radialGradient id="bc-hair-hi" cx="32%" cy="22%" r="55%">
          <stop offset="0%"  stopColor="#7A4D18" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2E1A00" stopOpacity="0" />
        </radialGradient>

        {/* ── Eyes ── */}
        <radialGradient id="bc-iris" cx="40%" cy="35%" r="68%">
          <stop offset="0%"   stopColor="#D4924A" />
          <stop offset="50%"  stopColor="#9A5A18" />
          <stop offset="100%" stopColor="#5A2E00" />
        </radialGradient>
        <radialGradient id="bc-iris-top" cx="50%" cy="0%" r="55%">
          <stop offset="0%"   stopColor="#1A0800" stopOpacity="0.40" />
          <stop offset="100%" stopColor="#1A0800" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bc-shine-big" cx="28%" cy="18%" r="72%">
          <stop offset="0%"   stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* ── Clothing ── */}
        <linearGradient id="bc-shirt" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%"   stopColor="#FF7E7E" />
          <stop offset="48%"  stopColor="#FF4848" />
          <stop offset="100%" stopColor="#CC2424" />
        </linearGradient>
        <linearGradient id="bc-shorts" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%"   stopColor="#FFF280" />
          <stop offset="100%" stopColor="#FFD000" />
        </linearGradient>

        {/* ── Blush ── */}
        <radialGradient id="bc-blush" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFAABB" stopOpacity="0.75" />
          <stop offset="70%"  stopColor="#FFAABB" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#FFAABB" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ══════════ ANTENNAS ══════════ */}
      <motion.g
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "71px 24px" }}
      >
        <line x1="71" y1="24" x2="51" y2="4" stroke="#2A1400" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="51" cy="4" r="6.5" fill="#FF4848" stroke="#2A1400" strokeWidth="2" />
        <circle cx="49" cy="2" r="2.5" fill="white" fillOpacity="0.65" />
      </motion.g>
      <motion.g
        animate={{ rotate: [6, -6, 6] }}
        transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "89px 24px" }}
      >
        <line x1="89" y1="24" x2="109" y2="4" stroke="#2A1400" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="109" cy="4" r="6.5" fill="#3EC8C0" stroke="#2A1400" strokeWidth="2" />
        <circle cx="107" cy="2" r="2.5" fill="white" fillOpacity="0.65" />
      </motion.g>

      {/* ══════════ HAIR — BACK ══════════ */}
      <path d="M 28 72 C 26 16 52 -1 80 11 C 108 -1 134 16 132 72" fill="url(#bc-hair)" />
      {/* Hair highlight on back */}
      <path d="M 28 72 C 28 30 48 8 68 10 C 56 16 40 34 36 60 Z" fill="url(#bc-hair-hi)" opacity="0.55" />

      {/* ══════════ HEAD ══════════ */}
      <ellipse cx="80" cy="69" rx="52" ry="51" fill="url(#bc-skin-face)" stroke="#C8804A" strokeWidth="2" />

      {/* ══════════ EARS ══════════ */}
      <ellipse cx="28" cy="70" rx="11" ry="14" fill="url(#bc-skin-face)" stroke="#C8804A" strokeWidth="2" />
      <ellipse cx="28" cy="70" rx="6.5" ry="8.5" fill="#FFAD8A" />
      <ellipse cx="28" cy="70" rx="3.5" ry="5" fill="#F09070" opacity="0.55" />
      <ellipse cx="132" cy="70" rx="11" ry="14" fill="url(#bc-skin-face)" stroke="#C8804A" strokeWidth="2" />
      <ellipse cx="132" cy="70" rx="6.5" ry="8.5" fill="#FFAD8A" />
      <ellipse cx="132" cy="70" rx="3.5" ry="5" fill="#F09070" opacity="0.55" />

      {/* ══════════ HAIR — FRONT / BANGS ══════════ */}
      <path
        d="M 30 62 C 28 36 44 17 60 14 Q 67 12 74 16 Q 78 19 79 26 Q 81 19 84 16 Q 91 12 100 14 C 116 17 132 36 130 62"
        fill="url(#bc-hair)"
      />
      {/* Top tuft */}
      <path d="M 74 10 Q 80 0 86 10 Q 83 15 80 13 Q 77 15 74 10 Z" fill="url(#bc-hair)" />
      {/* Shine streaks on front bangs */}
      <path d="M 48 24 C 53 15 65 11 73 13 C 66 17 57 25 52 34 Z" fill="url(#bc-hair-hi)" opacity="0.52" />
      <path d="M 88 13 C 94 12 102 15 106 22 C 100 19 93 19 88 22 Z" fill="url(#bc-hair-hi)" opacity="0.32" />

      {/* ══════════ EYEBROWS ══════════ */}
      <path d="M 44 56 Q 58 47 74 52" stroke="#2A1400" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M 86 52 Q 102 47 116 56" stroke="#2A1400" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* ══════════ LEFT EYE ══════════ */}
      {/* White */}
      <ellipse cx="63" cy="71" rx="18" ry="17" fill="#FEFDF8" stroke="#2A1400" strokeWidth="2" />
      {/* Upper eyelid shadow */}
      <path d="M 45 64 Q 63 58 81 64 L 81 71 Q 63 65 45 71 Z" fill="#2A1400" opacity="0.08" />
      {/* Iris */}
      <circle cx="64" cy="73" r="12.5" fill="url(#bc-iris)" />
      {/* Iris top shadow (eyelid shadow) */}
      <circle cx="64" cy="73" r="12.5" fill="url(#bc-iris-top)" />
      {/* Iris outer ring */}
      <circle cx="64" cy="73" r="12.5" fill="none" stroke="#1A0800" strokeWidth="1.5" />
      {/* Pupil */}
      <circle cx="65" cy="74" r="5.5" fill="#090200" />
      {/* Big catchlight top-left — solid white so it reads at small sizes */}
      <ellipse cx="57" cy="65" rx="5" ry="5.5" fill="white" opacity="0.96" />
      {/* Small catchlight bottom-right */}
      <circle cx="71" cy="81" r="3" fill="white" opacity="0.65" />
      {/* Micro sparkle */}
      <circle cx="58" cy="80" r="1.6" fill="white" opacity="0.5" />
      {/* Upper eyelash bar */}
      <path d="M 45 63 Q 63 56 81 63" stroke="#2A1400" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      {/* Lower lash */}
      <path d="M 47 80 Q 63 87 79 80" stroke="#2A1400" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* ══════════ RIGHT EYE ══════════ */}
      <ellipse cx="97" cy="71" rx="18" ry="17" fill="#FEFDF8" stroke="#2A1400" strokeWidth="2" />
      <path d="M 79 64 Q 97 58 115 64 L 115 71 Q 97 65 79 71 Z" fill="#2A1400" opacity="0.08" />
      <circle cx="98" cy="73" r="12.5" fill="url(#bc-iris)" />
      <circle cx="98" cy="73" r="12.5" fill="url(#bc-iris-top)" />
      <circle cx="98" cy="73" r="12.5" fill="none" stroke="#1A0800" strokeWidth="1.5" />
      <circle cx="99" cy="74" r="5.5" fill="#090200" />
      <ellipse cx="91" cy="65" rx="5" ry="5.5" fill="white" opacity="0.96" />
      <circle cx="105" cy="81" r="3" fill="white" opacity="0.62" />
      <circle cx="92" cy="80" r="1.6" fill="white" opacity="0.45" />
      <path d="M 79 63 Q 97 56 115 63" stroke="#2A1400" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <path d="M 81 80 Q 97 87 113 80" stroke="#2A1400" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* ══════════ BLINK / WINK ══════════ */}
      <motion.ellipse
        key={winking ? "wink" : "blink-left"}
        cx="63" cy="71" rx={18} ry={0}
        fill="#FFCBA4"
        animate={winking
          ? { ry: [0, 18, 18, 18, 18, 0] }
          : { ry: [0, 18, 0] }
        }
        transition={winking
          ? { duration: 1.4, ease: "easeInOut", times: [0, 0.12, 0.35, 0.65, 0.88, 1] }
          : { duration: 0.18, ease: "easeInOut", repeat: Infinity, repeatDelay: 4.5 }
        }
      />
      <motion.ellipse
        cx="97" cy="71" rx={18} ry={0}
        fill="#FFCBA4"
        animate={{ ry: [0, 18, 0] }}
        transition={{ duration: 0.18, ease: "easeInOut", repeat: Infinity, repeatDelay: 4.5 }}
      />

      {/* ══════════ NOSE ══════════ */}
      <path d="M 75 90 Q 80 96 85 90" stroke="#C07038" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ══════════ MOUTH ══════════ */}
      <path d="M 55 99 Q 80 127 105 99" stroke="#2A1400" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Inner mouth fill */}
      <path d="M 61 103 Q 80 121 99 103" fill="#E04858" />
      {/* Teeth */}
      <path d="M 65 103 Q 80 107 95 103 L 94 112 Q 80 116 66 112 Z" fill="white" opacity="0.9" />
      {/* Tongue hint */}
      <ellipse cx="80" cy="115" rx="10" ry="5" fill="#E06070" opacity="0.6" />

      {/* ══════════ BLUSH ══════════ */}
      <ellipse cx="38" cy="85" rx="21" ry="13" fill="url(#bc-blush)" />
      <ellipse cx="122" cy="85" rx="21" ry="13" fill="url(#bc-blush)" />

      {/* ══════════ FACE SHADING ══════════ */}
      {/* Subtle chin shadow */}
      <path d="M 56 108 Q 80 119 104 108 Q 100 118 80 120 Q 60 118 56 108 Z" fill="#C8804A" opacity="0.13" />

      {/* ══════════ NECK ══════════ */}
      <rect x="73" y="116" width="14" height="14" rx="5" fill="#FFCBA4" stroke="#C8804A" strokeWidth="2" />

      {/* ══════════ LEFT ARM ══════════ */}
      <path
        d="M 39 121 C 22 124, 15 138, 17 151 C 19 160, 31 163, 41 157 C 44 148, 44 132, 41 122 Z"
        fill="url(#bc-shirt)" stroke="#2A1400" strokeWidth="2"
      />
      {/* arm sheen */}
      <path d="M 28 126 C 24 134 24 146 28 154 C 32 148 32 134 30 126 Z" fill="white" opacity="0.10" />

      {/* ══════════ RIGHT ARM ══════════ */}
      <path
        d="M 121 121 C 138 124, 145 138, 143 151 C 141 160, 129 163, 119 157 C 116 148, 116 132, 119 122 Z"
        fill="url(#bc-shirt)" stroke="#2A1400" strokeWidth="2"
      />
      <path d="M 130 126 C 128 134 128 146 132 154 C 136 148 136 134 134 126 Z" fill="white" opacity="0.10" />

      {/* ══════════ SHIRT BODY ══════════ */}
      <path
        d="M 42 120 C 36 124, 34 139, 36 153 C 40 163, 58 167, 80 167 C 102 167, 120 163, 124 153 C 126 139, 124 124, 118 120 C 110 114, 96 112, 80 112 C 64 112, 50 114, 42 120 Z"
        fill="url(#bc-shirt)" stroke="#2A1400" strokeWidth="2.5"
      />
      {/* Shirt highlight */}
      <path d="M 52 122 C 48 132 48 146 52 155 C 57 148 58 132 56 122 Z" fill="white" opacity="0.08" />
      {/* Collar V */}
      <path d="M 73 117 L 80 128 L 87 117" stroke="#2A1400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* ══════════ HANDS ══════════ */}
      <circle cx="19" cy="157" r="11" fill="url(#bc-skin-limb)" stroke="#C8804A" strokeWidth="2" />
      <circle cx="141" cy="157" r="11" fill="url(#bc-skin-limb)" stroke="#C8804A" strokeWidth="2" />
      <path d="M 12 153 Q 13 157 12 161" stroke="#C8804A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M 26 153 Q 27 157 26 161" stroke="#C8804A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M 134 153 Q 133 157 134 161" stroke="#C8804A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M 148 153 Q 149 157 148 161" stroke="#C8804A" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* ══════════ SHORTS ══════════ */}
      <path
        d="M 46 165 C 44 174, 44 184, 48 191 C 54 199, 68 202, 80 202 C 92 202, 106 199, 112 191 C 116 184, 116 174, 114 165 Z"
        fill="url(#bc-shorts)" stroke="#2A1400" strokeWidth="2.5"
      />
      {/* Shorts highlight */}
      <path d="M 52 167 C 50 175 50 184 54 190 C 58 184 58 175 56 167 Z" fill="white" opacity="0.16" />
      {/* Belt loop */}
      <rect x="61" y="173" width="15" height="11" rx="3.5" fill="none" stroke="#2A1400" strokeWidth="1.5" />

      {/* ══════════ LEGS ══════════ */}
      <path d="M 49 198 C 47 207, 49 215, 55 218 C 61 221, 73 221, 77 215 C 79 211, 77 202, 73 198 Z"
        fill="url(#bc-skin-limb)" stroke="#C8804A" strokeWidth="2" />
      <path d="M 83 198 C 83 202, 83 211, 85 215 C 89 221, 99 221, 105 218 C 111 215, 113 207, 111 198 Z"
        fill="url(#bc-skin-limb)" stroke="#C8804A" strokeWidth="2" />

      {/* ══════════ SHOES ══════════ */}
      {/* Left shoe */}
      <ellipse cx="63" cy="220" rx="17" ry="8" fill="#1A0800" />
      <ellipse cx="63" cy="218" rx="15" ry="6" fill="#2E1400" />
      <ellipse cx="57" cy="215" rx="6" ry="3" fill="#4A2800" opacity="0.55" />
      <path d="M 50 217 Q 63 215 76 217" stroke="#4A2800" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Right shoe */}
      <ellipse cx="97" cy="220" rx="17" ry="8" fill="#1A0800" />
      <ellipse cx="97" cy="218" rx="15" ry="6" fill="#2E1400" />
      <ellipse cx="91" cy="215" rx="6" ry="3" fill="#4A2800" opacity="0.55" />
      <path d="M 84 217 Q 97 215 110 217" stroke="#4A2800" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

      {/* ══════════ PARTY HAT ══════════ */}
      {partyHat && (
        <g transform="translate(80, 19) rotate(12)">
          <polygon points="0,-34 -15,0 15,0" fill="#FF4848" stroke="#2A1400" strokeWidth="2" />
          <polygon points="0,-34 -15,0 -9,0 0,-20" fill="white" fillOpacity="0.25" />
          <circle cx="3" cy="-20" r="2.5" fill="white" fillOpacity="0.7" />
          <circle cx="-5" cy="-11" r="2" fill="#FFE66D" fillOpacity="0.8" />
          <rect x="-17" y="-3" width="34" height="5" rx="2.5" fill="#FFE66D" stroke="#2A1400" strokeWidth="1.5" />
          <circle cx="0" cy="-36" r="5.5" fill="#FFE66D" stroke="#2A1400" strokeWidth="1.5" />
        </g>
      )}
    </svg>
    </motion.div>
  );
}
