"use client"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarView } from "@/components/calendar-view"
import { CardView } from "@/components/card-view"
import { FilterBar } from "@/components/filter-bar"
import { Calendar, List } from "lucide-react"
import { ToggleBar } from "@/components/toggle-bar"
import { useCardState } from "@/hooks/cardState"
import { useEffect, useState } from "react"

export default function Home() {
  const { isCelsius, setIsCelsius } = useCardState()
  const [activeTab, setActiveTab] = useState("list")
  const [isXs, setIsXs] = useState(false)

  useEffect(() => {
    // Media query for xs screens (sm: 640px) since Calendar View is not visually appealing on xs screens.
    const mediaQuery = window.matchMedia("(max-width: 639px)")
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsXs(e.matches)
    }
    handleChange(mediaQuery)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (isXs && activeTab === "calendar") {
      setActiveTab("list")
    }
  }, [isXs, activeTab])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-50">
      <div className="container py-8">
        <div className="mb-8 text-center">
          <p className="mt-2 text-lg text-secondary-600 text-tealpop">
            Discover, filter, and track crypto events worldwide.
          </p>
        </div>
      </div>

      <FilterBar />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="container py-4 flex flex-col sm:flex-row justify-between">
          <TabsList className="grid w-full max-w-md grid-cols-2 border bg-white">
            <TabsTrigger
              value="calendar"
              className="data-[state=active]:bg-accent pointer-events-none opacity-50 sm:pointer-events-auto sm:opacity-100"
            >
              <Calendar className="mr-2 h-4 w-4" /> Calendar View
            </TabsTrigger>
            <TabsTrigger value="list" className="data-[state=active]:bg-accent">
              <List className="mr-2 h-4 w-4" /> Card View
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <ToggleBar
              id="temperature"
              isChecked={isCelsius}
              onCheckedChange={(checked) => setIsCelsius(checked)}
              label={`Showing ${isCelsius ? "°C" : "°F"}`}
            />
          </div>
        </div>

        <TabsContent value="calendar" className="mt-0 bg-white">
          <CalendarView />
        </TabsContent>

        <TabsContent value="list" className="mt-0 bg-white">
          <CardView />
        </TabsContent>
      </Tabs>
    </div>
  )
}
