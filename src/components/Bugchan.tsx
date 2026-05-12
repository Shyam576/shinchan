// Bugchan — original cartoon mascot (not Shinchan)
// Round-faced naughty kid in red shirt + yellow shorts
export default function Bugchan({ size = 160 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bugchan the naughty tester mascot"
    >
      {/* Yellow shorts */}
      <rect x="62" y="148" width="76" height="46" rx="10" fill="#FFD93D" stroke="#1E1E1E" strokeWidth="4" />
      {/* Left leg */}
      <rect x="65" y="185" width="28" height="28" rx="8" fill="#FFCBA4" stroke="#1E1E1E" strokeWidth="3.5" />
      {/* Right leg */}
      <rect x="107" y="185" width="28" height="28" rx="8" fill="#FFCBA4" stroke="#1E1E1E" strokeWidth="3.5" />
      {/* Left shoe */}
      <ellipse cx="79" cy="214" rx="16" ry="8" fill="#1E1E1E" />
      {/* Right shoe */}
      <ellipse cx="121" cy="214" rx="16" ry="8" fill="#1E1E1E" />

      {/* Red shirt body */}
      <rect x="54" y="110" width="92" height="50" rx="14" fill="#FF4D4D" stroke="#1E1E1E" strokeWidth="4" />
      {/* Left arm */}
      <rect x="28" y="112" width="30" height="22" rx="10" fill="#FF4D4D" stroke="#1E1E1E" strokeWidth="3.5" />
      {/* Right arm */}
      <rect x="142" y="112" width="30" height="22" rx="10" fill="#FF4D4D" stroke="#1E1E1E" strokeWidth="3.5" />
      {/* Left hand */}
      <circle cx="34" cy="138" r="12" fill="#FFCBA4" stroke="#1E1E1E" strokeWidth="3" />
      {/* Right hand — holding magnifying glass */}
      <circle cx="166" cy="138" r="12" fill="#FFCBA4" stroke="#1E1E1E" strokeWidth="3" />

      {/* Magnifying glass */}
      <circle cx="181" cy="125" r="14" fill="white" stroke="#1E1E1E" strokeWidth="3.5" />
      <circle cx="181" cy="125" r="9" fill="#4D96FF" fillOpacity="0.35" stroke="#1E1E1E" strokeWidth="2" />
      <line x1="191" y1="135" x2="200" y2="146" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" />

      {/* Shirt detail — star badge */}
      <text x="90" y="142" fontSize="18" textAnchor="middle">⭐</text>

      {/* Neck */}
      <rect x="88" y="100" width="24" height="18" rx="6" fill="#FFCBA4" stroke="#1E1E1E" strokeWidth="3" />

      {/* Head */}
      <ellipse cx="100" cy="72" rx="52" ry="56" fill="#FFCBA4" stroke="#1E1E1E" strokeWidth="4.5" />

      {/* Hair — spiky top */}
      <path d="M58 44 Q68 12 80 30 Q88 8 100 26 Q112 8 120 30 Q132 12 142 44" fill="#1E1E1E" />

      {/* Left ear */}
      <ellipse cx="49" cy="74" rx="10" ry="13" fill="#FFCBA4" stroke="#1E1E1E" strokeWidth="3.5" />
      {/* Right ear */}
      <ellipse cx="151" cy="74" rx="10" ry="13" fill="#FFCBA4" stroke="#1E1E1E" strokeWidth="3.5" />

      {/* Eyes — wide mischievous */}
      <ellipse cx="82" cy="68" rx="11" ry="12" fill="white" stroke="#1E1E1E" strokeWidth="3" />
      <ellipse cx="118" cy="68" rx="11" ry="12" fill="white" stroke="#1E1E1E" strokeWidth="3" />
      <circle cx="85" cy="70" r="6" fill="#1E1E1E" />
      <circle cx="121" cy="70" r="6" fill="#1E1E1E" />
      {/* Eye shine */}
      <circle cx="87" cy="67" r="2" fill="white" />
      <circle cx="123" cy="67" r="2" fill="white" />

      {/* Eyebrows — mischievous slant */}
      <path d="M73 55 Q82 50 92 54" stroke="#1E1E1E" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M108 54 Q118 50 127 55" stroke="#1E1E1E" strokeWidth="3.5" strokeLinecap="round" />

      {/* Nose — small round */}
      <ellipse cx="100" cy="80" rx="6" ry="4" fill="#FFAD90" stroke="#1E1E1E" strokeWidth="2" />
      <ellipse cx="97" cy="80" rx="2" ry="1.5" fill="#E8926A" />
      <ellipse cx="103" cy="80" rx="2" ry="1.5" fill="#E8926A" />

      {/* Mischievous wide grin */}
      <path d="M78 92 Q100 110 122 92" stroke="#1E1E1E" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M83 96 Q100 108 117 96" fill="#FF6B6B" />
      {/* Teeth */}
      <rect x="91" y="96" width="10" height="7" rx="2" fill="white" stroke="#1E1E1E" strokeWidth="1.5" />
      <rect x="103" y="96" width="10" height="7" rx="2" fill="white" stroke="#1E1E1E" strokeWidth="1.5" />

      {/* Rosy cheeks */}
      <ellipse cx="68" cy="84" rx="10" ry="7" fill="#FF9AA2" fillOpacity="0.55" />
      <ellipse cx="132" cy="84" rx="10" ry="7" fill="#FF9AA2" fillOpacity="0.55" />

      {/* Bug antenna on head */}
      <line x1="96" y1="18" x2="88" y2="4" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="88" cy="3" r="4" fill="#FF4D4D" stroke="#1E1E1E" strokeWidth="2" />
      <line x1="104" y1="16" x2="114" y2="3" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" />
      <circle cx="114" cy="2" r="4" fill="#4D96FF" stroke="#1E1E1E" strokeWidth="2" />
    </svg>
  );
}
