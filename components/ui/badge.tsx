import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border-2 px-2 py-0.5 text-xs font-cyberpunk font-bold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-cyberpunk-neonBlue focus-visible:ring-cyberpunk-neonPink/70 focus-visible:ring-[3px] aria-invalid:ring-cyberpunk-neonRed/20 dark:aria-invalid:ring-cyberpunk-neonRed/40 aria-invalid:border-cyberpunk-neonRed transition-[color,box-shadow] overflow-hidden shadow-[0_0_8px_0_#00fff7aa]",
  {
    variants: {
      variant: {
        default:
          "border-cyberpunk-neonBlue bg-cyberpunk-neonBlue text-cyberpunk-bg [a&]:hover:bg-cyberpunk-neonPink [a&]:hover:text-cyberpunk-bg",
        secondary:
          "border-cyberpunk-neonPink bg-cyberpunk-neonPink text-cyberpunk-bg [a&]:hover:bg-cyberpunk-neonBlue [a&]:hover:text-cyberpunk-bg",
        destructive:
          "border-cyberpunk-neonRed bg-cyberpunk-neonRed text-cyberpunk-neonWhite [a&]:hover:bg-cyberpunk-neonPink focus-visible:ring-cyberpunk-neonPink/20 dark:focus-visible:ring-cyberpunk-neonPink/40 dark:bg-cyberpunk-neonPink/60",
        outline:
          "border-cyberpunk-neonBlue text-cyberpunk-neonBlue bg-transparent [a&]:hover:bg-cyberpunk-bg2 [a&]:hover:text-cyberpunk-neonPink",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
