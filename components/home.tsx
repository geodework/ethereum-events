"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarView } from "@/components/calendar-view"
import { CardView } from "@/components/card-view"
import { FilterBar } from "@/components/filter-bar"
import { Calendar, List } from "lucide-react"
import { ToggleBar } from "@/components/toggle-bar"
import { useCardState } from "@/hooks/cardState"
import { useEffect, useState } from "react"
import { Hero } from "@/components/hero"

export default function Home() {
  const { isCelsius, setIsCelsius } = useCardState()
  const [activeTab, setActiveTab] = useState("list")
  const [isXs, setIsXs] = useState(false)

  useEffect(() => {
    // Disable Calendar View since it's not visually appealing on xs screens.
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
    <div className="min-h-screen bg-background">
      <Hero />

      <FilterBar />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full bg-background">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-start gap-4">
          <TabsList className="web3-dropdown grid w-full max-w-md grid-cols-2 bg-white p-1">
            <TabsTrigger
              value="calendar"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground web3-button rounded-lg pointer-events-none opacity-50 sm:pointer-events-auto sm:opacity-100"
            >
              <Calendar className="mr-2 h-4 w-4" /> Calendar
            </TabsTrigger>
            <TabsTrigger 
              value="list" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground web3-button rounded-lg"
            >
              <List className="mr-2 h-4 w-4" /> Cards
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center space-x-2">
            <ToggleBar
              id="temperature"
              isChecked={isCelsius}
              onCheckedChange={(checked) => setIsCelsius(checked)}
              label={`${isCelsius ? "°C" : "°F"}`}
            />
          </div>
        </div>

        <TabsContent value="calendar" className="mt-0 bg-background">
          <CalendarView />
        </TabsContent>

        <TabsContent value="list" className="mt-0 bg-background">
          <CardView />
        </TabsContent>
      </Tabs>
    </div>
  )
}
