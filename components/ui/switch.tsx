"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-cyberpunk-neonBlue data-[state=checked]:shadow-[0_0_8px_0_#00fff7aa] data-[state=unchecked]:bg-cyberpunk-bg2 focus-visible:border-cyberpunk-neonPink focus-visible:ring-cyberpunk-neonPink/70 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border-2 border-cyberpunk-neonBlue transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-cyberpunk-neonWhite pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
