"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-cyberpunk-bg2 text-cyberpunk-neonWhite inline-flex h-10 w-fit items-center justify-center rounded-lg p-[3px] border-2 border-cyberpunk-neonBlue shadow-[0_0_8px_0_#00fff7aa] font-cyberpunk",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-cyberpunk-bg2 data-[state=active]:text-cyberpunk-neonBlue data-[state=active]:border-b-4 data-[state=active]:border-cyberpunk-neonBlue data-[state=active]:shadow-[0_2px_16px_0_#00fff7cc] focus-visible:border-cyberpunk-neonPink focus-visible:ring-cyberpunk-neonPink/70 focus-visible:outline-cyberpunk-neonPink text-cyberpunk-neonWhite inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-4 py-2 text-base font-cyberpunk font-bold uppercase tracking-widest whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
