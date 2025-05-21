import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-extrabold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-neonPink focus-visible:ring-neonPink/70 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-neon",
  {
    variants: {
      variant: {
        default:
          "bg-neonPink text-neonYellow border-2 border-neonPink hover:bg-neonCyan hover:text-darkBg hover:border-neonCyan",
        destructive:
          "bg-destructive text-white border-2 border-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-2 border-neonCyan bg-darkBg text-neonCyan hover:bg-neonCyan hover:text-darkBg hover:border-neonPink",
        secondary:
          "bg-neonCyan text-darkBg border-2 border-neonCyan hover:bg-neonPink hover:text-neonYellow hover:border-neonPink",
        ghost:
          "hover:bg-neonPink/20 hover:text-neonPink border-2 border-transparent",
        link: "text-neonPink underline underline-offset-4 hover:text-neonCyan",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-8 has-[>svg]:px-6 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
