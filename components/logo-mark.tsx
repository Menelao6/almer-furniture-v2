export function LogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M4 26 L16 6 L28 26 Z"
        stroke="#B8864E"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M8 22 L24 22"
        stroke="#1C1612"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M12 18 L20 18"
        stroke="#6B5B4E"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}
