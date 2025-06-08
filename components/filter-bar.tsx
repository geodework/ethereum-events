"use client"

import { Calendar, ChevronDown, Globe, Search, X } from "lucide-react"
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
import { Input } from "@/components/ui/input"
import { categories, domains, regions } from "@/lib/data"
import { DEFAULT_FILTERS, MONTHS, CATEGORY_META } from "@/lib/filter"
import { useFilterStore } from "@/hooks/eventFilter"
import { useState } from "react"
import { ToggleBar } from "./toggle-bar"

export function FilterBar() {
  const { filters, handleChange, setFilters } = useFilterStore()

  // Modern dropdown component for region and month filters
  const ModernDropdown = ({ 
    value, 
    options, 
    onValueChange, 
    label, 
    icon: Icon, 
    emoji 
  }: {
    value: string
    options: string[]
    onValueChange: (value: string) => void
    label: string
    icon: any
    emoji?: string
  }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="web3-button-ghost h-10 px-4 gap-2 rounded-full border-secondary-200 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          aria-label={`${label}: ${value}`}
        >
          {emoji && <span className="text-sm">{emoji}</span>}
          <Icon className="h-4 w-4 text-primary" />
          <span className="font-medium">{value}</span>
          <ChevronDown className="h-3 w-3 text-secondary-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="web3-dropdown w-64">
        <DropdownMenuLabel className="text-secondary-600 font-medium">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem 
              key={option} 
              value={option}
              className="cursor-pointer hover:bg-primary/5 focus:bg-primary/10 rounded-lg mx-1"
            >
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <section className="web3-filter-bar" role="search" aria-label="Event filters">
      <div className="container py-6">
        {/* Top row: Search and main filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-400" />
            <Input
              type="text"
              placeholder="Search events by location..."
              className="h-12 pl-12 pr-4 rounded-full border-secondary-200 bg-white focus:border-primary/50 focus:ring-primary/20 text-secondary-700 placeholder:text-secondary-400"
              value={filters.city}
              onChange={(e) => handleChange("city", e.target.value)}
              aria-label="Search events by location"
              role="searchbox"
            />
          </div>

          {/* Main filters */}
          <div className="flex flex-wrap items-center gap-3">
            <ModernDropdown
              value={filters.region}
              options={regions}
              onValueChange={(value) => handleChange("region", value)}
              label="Filter by Region"
              icon={Globe}
              emoji="🌍"
            />

            <ModernDropdown
              value={filters.month}
              options={[DEFAULT_FILTERS.month, ...MONTHS]}
              onValueChange={(value) => handleChange("month", value)}
              label="Filter by Month"
              icon={Calendar}
              emoji="📅"
            />

            {/* Upcoming/Ongoing toggle */}
            <div className="flex items-center">
              <ToggleBar
                id="ongoing-upcoming"
                isChecked={filters.isUpcomingOrOngoing}
                onCheckedChange={(checked) =>
                  handleChange("isUpcomingOrOngoing", checked)
                }
                label="Only Ongoing/Upcoming"
              />
            </div>
          </div>
        </div>

        {/* Bottom row: Category and Domain chips */}
        <div className="space-y-4">
          {/* Category chips */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-secondary-600 px-1" id="categories-label">Categories</h3>
            <div 
              className="flex flex-wrap gap-2 overflow-x-auto pb-2"
              role="group"
              aria-labelledby="categories-label"
            >
              {categories.slice(1).map((category) => { // Skip "All Categories"
                const isSelected = filters.categories.includes(category)
                const meta = CATEGORY_META[category]
                const Icon = meta?.icon

                return (
                  <button
                    key={category}
                    onClick={() => {
                      const newCategories = isSelected
                        ? filters.categories.filter(c => c !== category)
                        : [...filters.categories.filter(c => c !== DEFAULT_FILTERS.category), category]
                      setFilters("categories", newCategories.length ? newCategories : [DEFAULT_FILTERS.category])
                    }}
                    className={`
                      web3-chip min-w-fit whitespace-nowrap focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                      ${isSelected 
                        ? 'web3-chip-primary' 
                        : 'web3-chip-secondary hover:web3-chip-accent'
                      }
                    `}
                    aria-pressed={isSelected}
                    aria-label={`${isSelected ? 'Remove' : 'Add'} ${category} filter`}
                    role="switch"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5 mr-1.5" />}
                    {category}
                    {isSelected && (
                      <X className="h-3 w-3 ml-1.5 opacity-70 hover:opacity-100" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Domain chips */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-secondary-600 px-1" id="domains-label">Domains</h3>
            <div 
              className="flex flex-wrap gap-2 overflow-x-auto pb-2"
              role="group"
              aria-labelledby="domains-label"
            >
              {domains.slice(1).map((domain) => { // Skip "All Domains"
                const isSelected = filters.domains.includes(domain)

                return (
                  <button
                    key={domain}
                    onClick={() => {
                      const newDomains = isSelected
                        ? filters.domains.filter(d => d !== domain)
                        : [...filters.domains.filter(d => d !== DEFAULT_FILTERS.domain), domain]
                      setFilters("domains", newDomains.length ? newDomains : [DEFAULT_FILTERS.domain])
                    }}
                    className={`
                      web3-chip min-w-fit whitespace-nowrap focus:ring-2 focus:ring-accent/50 focus:ring-offset-2
                      ${isSelected 
                        ? 'web3-chip-accent' 
                        : 'web3-chip-secondary'
                      }
                    `}
                    aria-pressed={isSelected}
                    aria-label={`${isSelected ? 'Remove' : 'Add'} ${domain} domain filter`}
                    role="switch"
                  >
                    #{domain}
                    {isSelected && (
                      <X className="h-3 w-3 ml-1.5 opacity-70 hover:opacity-100" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
