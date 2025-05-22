import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-cyberpunk-neonWhite placeholder:text-cyberpunk-neonPink selection:bg-cyberpunk-neonBlue selection:text-cyberpunk-bg bg-cyberpunk-bg2 border-2 border-cyberpunk-neonBlue flex h-9 w-full min-w-0 rounded-md px-3 py-1 text-base font-cyberpunk shadow-[0_0_8px_0_#00fff7aa] transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-cyberpunk-neonPink focus-visible:ring-cyberpunk-neonPink/70 focus-visible:ring-[3px]",
        "aria-invalid:ring-cyberpunk-neonRed/20 dark:aria-invalid:ring-cyberpunk-neonRed/40 aria-invalid:border-cyberpunk-neonRed",
        className
      )}
      {...props}
    />
  )
}

export { Input }
