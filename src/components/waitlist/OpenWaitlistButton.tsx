"use client"

import type { ReactNode } from "react"
import Button from "@/components/ui/Button"
import { useWaitlist } from "@/components/waitlist/WaitlistProvider"

/**
 * A CTA button that opens the waiting-list modal instead of navigating. Drop-in
 * replacement for the old `<Button href="#11-form">` calls — reuses the shared
 * Button styling. `source` is recorded for analytics; `onClick` runs first (used
 * to e.g. close the mobile menu before the modal opens).
 */
export default function OpenWaitlistButton({
  children,
  source,
  className,
  variant,
  size,
  onClick,
}: {
  children: ReactNode
  source?: string
  className?: string
  variant?: "primary" | "secondary"
  size?: "md" | "lg"
  onClick?: () => void
}) {
  const { open } = useWaitlist()
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        onClick?.()
        open(source)
      }}
    >
      {children}
    </Button>
  )
}
