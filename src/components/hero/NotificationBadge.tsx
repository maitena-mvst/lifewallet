import Image from "next/image"

const NOTIFICATION = "/assets/home/01-hero/notification-home.svg"

/**
 * Floating "Reisepass" notification badge.
 * Positioning is passed via `className` (the caller anchors it); it fades in +
 * moves up on load and lifts on `group-hover` (its nearest `group` ancestor —
 * the phone showcase / container — so it also reacts to hovering the screens).
 */
export default function NotificationBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-badge-rise absolute z-30 [animation-delay:0.45s] ${className}`}>
      <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none">
        <Image
          src={NOTIFICATION}
          alt="Benachrichtigung: Dein Reisepass läuft in 6 Monaten ab"
          width={375}
          height={91}
          className="h-auto w-full"
        />
      </div>
    </div>
  )
}
