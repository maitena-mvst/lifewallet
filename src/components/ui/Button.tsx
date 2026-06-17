import Link from "next/link"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

type Variant = "primary" | "secondary"
type Size = "md" | "lg"

const base =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] font-medium leading-6 whitespace-nowrap " +
  "transition-colors duration-200 ease-out select-none cursor-pointer outline-none " +
  "focus-visible:ring-2 focus-visible:ring-lime-700 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-base",
}

const variants: Record<Variant, string> = {
  // Hover = darker fill only. No shadow, no movement.
  primary: "bg-lime-700 text-white hover:bg-[#34351a]",
  secondary:
    "border border-lime-700 text-lime-700 bg-transparent " +
    "hover:bg-lime-900 hover:text-white hover:border-lime-900",
}

type BaseProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & { href?: undefined }

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseProps> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (typeof props.href === "string") {
    const { href, ...rest } = props as ButtonAsLink
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  )
}
