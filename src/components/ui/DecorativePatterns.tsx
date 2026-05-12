export function DashedLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 8" fill="none" preserveAspectRatio="none">
      <path
        d="M0 4 Q10 2 20 4 Q30 6 40 4 Q50 2 60 4 Q70 6 80 4 Q90 2 100 4 Q110 6 120 4 Q130 2 140 4 Q150 6 160 4 Q170 2 180 4 Q190 6 200 4 Q210 2 220 4 Q230 6 240 4 Q250 2 260 4 Q270 6 280 4 Q290 2 300 4 Q310 6 320 4 Q330 2 340 4 Q350 6 360 4 Q370 2 380 4 Q390 6 400 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="12 8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ZigzagLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 20" fill="none" preserveAspectRatio="none">
      <path
        d="M0 10 L15 3 L30 17 L45 3 L60 17 L75 3 L90 17 L105 3 L120 17 L135 3 L150 17 L165 3 L180 17 L195 3 L210 17 L225 3 L240 17 L255 3 L270 17 L285 3 L300 17 L315 3 L330 17 L345 3 L360 17 L375 3 L390 17 L400 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WavyLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 24" fill="none" preserveAspectRatio="none">
      <path
        d="M0 12 C20 2, 40 2, 50 12 C60 22, 80 22, 100 12 C120 2, 140 2, 150 12 C160 22, 180 22, 200 12 C220 2, 240 2, 250 12 C260 22, 280 22, 300 12 C320 2, 340 2, 350 12 C360 22, 380 22, 400 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DottedLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 8" fill="none" preserveAspectRatio="none">
      <path
        d="M0 4 L400 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="3 10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LoopyLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 30" fill="none" preserveAspectRatio="none">
      <path
        d="M0 20 C10 20 15 5 25 5 C35 5 35 25 45 25 C55 25 55 5 65 5 C75 5 75 25 85 25 C95 25 95 5 105 5 C115 5 115 25 125 25 C135 25 135 5 145 5 C155 5 155 25 165 25 C175 25 175 5 185 5 C195 5 195 25 205 25 C215 25 215 5 225 5 C235 5 235 25 245 25 C255 25 255 5 265 5 C275 5 275 25 285 25 C295 25 295 5 305 5 C315 5 315 25 325 25 C335 25 335 5 345 5 C355 5 355 25 365 25 C375 25 375 5 385 5 C395 5 400 20 400 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
