import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-cyberpunk font-bold uppercase tracking-wide transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-cyberpunk-neonBlue focus-visible:ring-cyberpunk-neonPink/70 focus-visible:ring-[3px] aria-invalid:ring-cyberpunk-neonRed/20 dark:aria-invalid:ring-cyberpunk-neonRed/40 aria-invalid:border-cyberpunk-neonRed shadow-[0_0_8px_0_#00fff7aa]",
  {
    variants: {
      variant: {
        default:
          "bg-cyberpunk-neonBlue text-cyberpunk-bg font-cyberpunk border-2 border-cyberpunk-neonBlue shadow-[0_0_8px_0_#00fff7aa] hover:bg-cyberpunk-neonPink hover:border-cyberpunk-neonPink hover:text-cyberpunk-bg focus-visible:shadow-[0_0_16px_2px_#ff00ea]",
        destructive:
          "bg-cyberpunk-neonRed text-cyberpunk-neonWhite border-2 border-cyberpunk-neonRed shadow-[0_0_8px_0_#ff3860aa] hover:bg-cyberpunk-neonPink hover:border-cyberpunk-neonPink focus-visible:shadow-[0_0_16px_2px_#ff00ea]",
        outline:
          "border-2 border-cyberpunk-neonBlue bg-transparent text-cyberpunk-neonBlue hover:bg-cyberpunk-bg2 hover:text-cyberpunk-neonPink hover:border-cyberpunk-neonPink focus-visible:shadow-[0_0_16px_2px_#00fff7]",
        secondary:
          "bg-cyberpunk-neonPink text-cyberpunk-bg border-2 border-cyberpunk-neonPink shadow-[0_0_8px_0_#ff00ea99] hover:bg-cyberpunk-neonBlue hover:border-cyberpunk-neonBlue hover:text-cyberpunk-bg focus-visible:shadow-[0_0_16px_2px_#00fff7]",
        ghost:
          "bg-transparent text-cyberpunk-neonBlue hover:bg-cyberpunk-bg2 hover:text-cyberpunk-neonPink focus-visible:shadow-[0_0_16px_2px_#00fff7]",
        link: "text-cyberpunk-neonPink underline-offset-4 hover:underline hover:text-cyberpunk-neonBlue",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
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
