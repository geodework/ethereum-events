"use client"

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
import { categories, domains, regions } from "@/lib/data"
import { DEFAULT_FILTERS, MONTHS } from "@/lib/filter"
import { useFilterStore } from "@/hooks/eventFilter"
import { useState } from "react"
import { ToggleBar } from "./toggle-bar"

export function FilterBar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { applyFilters, filters, handleChange, setFilters } = useFilterStore()

  return (
    <div className="sticky top-16 z-40 w-full border-b border-secondary-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex flex-wrap items-center justify-between gap-2 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 border-secondary-200 bg-white text-secondary-700"
              >
                <MapPin className="mr-2 h-4 w-4 text-primary-light-500" />
                {filters.region}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Filter by Region</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={filters.region}
                onValueChange={(value) => handleChange("region", value)}
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
                className="h-9 border-secondary-200 bg-white text-secondary-700"
              >
                <Filter className="mr-2 h-4 w-4 text-primary-light-500" />
                {filters.month}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Filter by Month</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={filters.month}
                onValueChange={(value) => handleChange("month", value)}
              >
                <DropdownMenuRadioItem value={DEFAULT_FILTERS.month}>
                  {DEFAULT_FILTERS.month}
                </DropdownMenuRadioItem>
                {MONTHS.map((month) => (
                  <DropdownMenuRadioItem key={month} value={month}>
                    {month}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-secondary-400" />
            <Input
              type="text"
              placeholder="Search by city..."
              className="h-9 w-[200px] border-secondary-200 pl-8 text-secondary-700"
              value={filters.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <ToggleBar
              isChecked={filters.isUpcomingOrOngoing}
              onCheckedChange={(checked) =>
                handleChange("isUpcomingOrOngoing", checked)
              }
              label="Only Ongoing/Upcoming"
            />
          </div>
        </div>

        <Dialog open={isDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-9 border-secondary-200 bg-white text-secondary-700 hover:bg-primary-light-50 hover:text-primary"
              onClick={() => setIsDialogOpen(true)}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4 text-primary-light-500" />
              Advanced Filters
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[425px]"
            onOpenChange={(open) => {
              setIsDialogOpen(open)
            }}
          >
            <DialogHeader>
              <DialogTitle>Advanced Filters</DialogTitle>
              <DialogDescription>
                Fine-tune your event search with additional filters.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="quarter"
                  className="text-right text-secondary-700"
                >
                  Domains
                </Label>
                <select
                  id="domain"
                  className="col-span-3 flex h-10 w-full rounded-md border border-secondary-200 bg-white px-3 py-2 text-sm text-secondary-700 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={filters.domains[0]}
                  onChange={(e) => setFilters("domains", [e.target.value])}
                >
                  {domains.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="temp-range"
                  className="text-right text-secondary-700"
                >
                  Categories
                </Label>
                <select
                  id="temp-range"
                  className="col-span-3 flex h-10 w-full rounded-md border border-secondary-200 bg-white px-3 py-2 text-sm text-secondary-700 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={filters.categories[0]}
                  onChange={(e) => setFilters("categories", [e.target.value])}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full items-center mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full py-4 border-secondary-200 bg-accent text-secondary-700 hover:bg-primary-light-50 hover:text-primary"
                  onClick={() => {
                    applyFilters()
                    setIsDialogOpen(false)
                  }}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
