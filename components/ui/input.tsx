import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-neonPink placeholder:text-neonCyan selection:bg-neonPink selection:text-darkBg dark:bg-darkBg/80 border-2 border-neonCyan flex h-10 w-full min-w-0 rounded-md bg-transparent px-3 py-2 text-base font-extrabold shadow-neon transition-[color,box-shadow] outline-none focus-visible:border-neonPink focus-visible:ring-neonPink/70 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
