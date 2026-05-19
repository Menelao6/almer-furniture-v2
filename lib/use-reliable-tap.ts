'use client'

import { useCallback, useRef } from 'react'

const MOVE_THRESHOLD_PX = 10

/**
 * Reliable tap handling for iOS Safari (avoids lost clicks inside scroll areas
 * and when child elements capture touch events).
 */
export function useReliableTap(onTap: () => void) {
  const startX = useRef(0)
  const startY = useRef(0)
  const moved = useRef(false)
  const touchHandled = useRef(false)

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    if (!t) return
    startX.current = t.clientX
    startY.current = t.clientY
    moved.current = false
    touchHandled.current = false
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    if (!t) return
    if (
      Math.abs(t.clientX - startX.current) > MOVE_THRESHOLD_PX ||
      Math.abs(t.clientY - startY.current) > MOVE_THRESHOLD_PX
    ) {
      moved.current = true
    }
  }, [])

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (moved.current) return
      touchHandled.current = true
      e.preventDefault()
      onTap()
    },
    [onTap]
  )

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (touchHandled.current) {
        touchHandled.current = false
        e.preventDefault()
        return
      }
      onTap()
    },
    [onTap]
  )

  return { onTouchStart, onTouchMove, onTouchEnd, onClick }
}
