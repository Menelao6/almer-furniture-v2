'use client'

import { useReliableTap } from '@/lib/use-reliable-tap'

type TapButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onTap: () => void
}

export function TapButton({
  onTap,
  className = '',
  children,
  type = 'button',
  onClick: _onClick,
  ...props
}: TapButtonProps) {
  const tap = useReliableTap(onTap)

  return (
    <button
      type={type}
      className={`touch-manipulation cursor-pointer [-webkit-tap-highlight-color:transparent] ${className}`}
      {...props}
      {...tap}
    >
      {children}
    </button>
  )
}
