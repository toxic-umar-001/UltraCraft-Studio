function UcsLogo() {
  return (
    <svg
      viewBox="0 0 120 44"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-auto"
      role="img"
      aria-label="UltraCraft Studio"
    >
      <defs>
        {/* Metallic face gradient */}
        <linearGradient id="ucs-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="35%" stopColor="#cbd5e1" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="65%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
        {/* Top chrome highlight */}
        <linearGradient id="ucs-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        {/* Bottom shadow bevel */}
        <linearGradient id="ucs-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0" />
          <stop offset="70%" stopColor="#0f172a" stopOpacity="0" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0.6" />
        </linearGradient>
        {/* Cyan edge glow */}
        <linearGradient id="ucs-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        {/* Outer drop shadow */}
        <filter id="ucs-drop" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.5" />
        </filter>
        {/* Inner bevel */}
        <filter id="ucs-bevel">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.6" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="2" specularConstant="0.8" specularExponent="20" lightingColor="#ffffff" result="spec">
            <feDistantLight azimuth="225" elevation="55" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specMasked" />
          <feComposite in="SourceGraphic" in2="specMasked" operator="arithmetic" k1="0" k2="1" k3="0.6" k4="0" />
        </filter>
      </defs>

      {/* Background plate */}
      <rect x="1" y="3" width="118" height="38" rx="9" fill="#0b1120" stroke="url(#ucs-edge)" strokeWidth="0.8" opacity="0.85" />

      {/* Letters with metallic treatment */}
      <g filter="url(#ucs-drop)">
        {/* U */}
        <path
          d="M18 12 L18 26 Q18 32 24 32 Q30 32 30 26 L30 12"
          fill="none"
          stroke="url(#ucs-face)"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ucs-bevel)"
        />
        <path
          d="M18 12 L18 26 Q18 32 24 32 Q30 32 30 26 L30 12"
          fill="none"
          stroke="url(#ucs-shine)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />

        {/* C */}
        <path
          d="M64 14 Q52 12 49 22 Q46 32 58 32 Q63 32 66 30"
          fill="none"
          stroke="url(#ucs-face)"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ucs-bevel)"
        />
        <path
          d="M64 14 Q52 12 49 22 Q46 32 58 32 Q63 32 66 30"
          fill="none"
          stroke="url(#ucs-shine)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />

        {/* S */}
        <path
          d="M96 15 Q92 12 84 13 Q77 14 77 19 Q77 24 84 25 Q91 26 91 31 Q91 35 84 35 Q78 35 74 32"
          fill="none"
          stroke="url(#ucs-face)"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ucs-bevel)"
        />
        <path
          d="M96 15 Q92 12 84 13 Q77 14 77 19 Q77 24 84 25 Q91 26 91 31 Q91 35 84 35 Q78 35 74 32"
          fill="none"
          stroke="url(#ucs-shine)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </g>

      {/* Bottom shadow overlay for depth */}
      <rect x="1" y="3" width="118" height="38" rx="9" fill="url(#ucs-shadow)" />

      {/* Subtle cyan glow accent on top edge */}
      <rect x="6" y="3.5" width="108" height="0.6" rx="0.3" fill="#22d3ee" opacity="0.5" />
    </svg>
  );
}

export default UcsLogo;
