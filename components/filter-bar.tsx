"use client"

import { useState } from "react"
import { Filter, MapPin, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { months, regions } from "@/lib/data"

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  region: string
  month: string
  city: string
  deadlineSoon: boolean
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    region: "All Regions",
    month: "All Months",
    city: "",
    deadlineSoon: false,
  })

  const handleFilterChange = (
    key: keyof FilterState,
    value: string | boolean
  ) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <div className="sticky top-16 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex flex-wrap items-center justify-between gap-2 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 border-slate-200 bg-white text-slate-700"
              >
                <MapPin className="mr-2 h-4 w-4 text-green-400" />
                {filters.region}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Filter by Region</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={filters.region}
                onValueChange={(value) => handleFilterChange("region", value)}
              >
                {regions.map((region) => (
                  <DropdownMenuRadioItem key={region} value={region}>
                    {region}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 border-slate-200 bg-white text-slate-700"
              >
                <Filter className="mr-2 h-4 w-4 text-green-400" />
                {filters.month}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Filter by Month</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={filters.month}
                onValueChange={(value) => handleFilterChange("month", value)}
              >
                <DropdownMenuRadioItem value="All Months">
                  All Months
                </DropdownMenuRadioItem>
                {months.map((month) => (
                  <DropdownMenuRadioItem key={month} value={month}>
                    {month}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search by city..."
              className="h-9 w-[200px] border-slate-200 pl-8 text-slate-700"
              value={filters.city}
              onChange={(e) => handleFilterChange("city", e.target.value)}
            />
          </div>

          {/* <div className="flex items-center space-x-2">
            <Switch
              id="deadline-soon"
              checked={filters.deadlineSoon}
              onCheckedChange={(checked) => handleFilterChange("deadlineSoon", checked)}
              className="data-[state=checked]:bg-accent"
            />
            <Label htmlFor="deadline-soon" className="text-sm text-slate-700">
              Ticket Deadline Soon
            </Label>
          </div> */}
        </div>

        {/* <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-9 border-slate-200 bg-white text-slate-700 hover:bg-green-50 hover:text-primary"
            >
              <SlidersHorizontal className="mr-2 h-4 w-4 text-green-400" />
              Advanced Filters
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Advanced Filters</DialogTitle>
              <DialogDescription>Fine-tune your event search with additional filters.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quarter" className="text-right text-slate-700">
                  Quarter
                </Label>
                <select
                  id="quarter"
                  className="col-span-3 flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>All Quarters</option>
                  <option>Q1 (Jan-Mar)</option>
                  <option>Q2 (Apr-Jun)</option>
                  <option>Q3 (Jul-Sep)</option>
                  <option>Q4 (Oct-Dec)</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="temp-range" className="text-right text-slate-700">
                  Temperature
                </Label>
                <select
                  id="temp-range"
                  className="col-span-3 flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>Any Temperature</option>
                  <option>Cold (Below 50°F/10°C)</option>
                  <option>Mild (50-70°F/10-21°C)</option>
                  <option>Warm (70-85°F/21-29°C)</option>
                  <option>Hot (Above 85°F/29°C)</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-4 flex items-center space-x-2">
                  <Switch id="export-calendar" className="data-[state=checked]:bg-primary" />
                  <Label htmlFor="export-calendar" className="text-slate-700">
                    Show exportable events only
                  </Label>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog> */}
      </div>
    </div>
  )
}
