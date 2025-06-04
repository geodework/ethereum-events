import { cn } from "@/lib/utils"
import React from "react"

export function AdBanner({ className = "" }: { className?: string }) {
  const isDisplayAd = true
  if (!isDisplayAd) return null

  return (
    <div
      className={cn(
        `flex items-center justify-center bg-gray-100 text-gray-700 font-bold rounded-lg my-6 h-48 text-xl`,
        className
      )}
      aria-label="Ad Placeholder"
    >
      Your Ad Here
    </div>
  )
}
