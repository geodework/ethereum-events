import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { TVenueType } from "@/entities"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        in_person:
          "border-transparent bg-accent/30 text-accent-800 [a&]:hover:bg-accent/90",
        virtual:
          "border-transparent bg-secondary/70 text-white [a&]:hover:bg-secondary/90",
        hybrid: "border-transparent bg-primary text-white",
        outline:
          "text-primary border-primary [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "in_person",
    },
  }
)

function EventTypeBadge({
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

function getVenueTypeBadgeVariant(
  venueType: TVenueType
): VariantProps<typeof badgeVariants>["variant"] {
  switch (venueType) {
    case "in_person":
      return "in_person"
    case "virtual":
      return "virtual"
    case "hybrid":
      return "hybrid"
    default:
      return "in_person"
  }
}

export { EventTypeBadge, badgeVariants, getVenueTypeBadgeVariant }
