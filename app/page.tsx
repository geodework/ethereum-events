'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarView } from '@/components/calendar-view';
import { ListView } from '@/components/list-view';
import { FilterBar, type FilterState } from '@/components/filter-bar';
import { events } from '@/lib/data';
import { Calendar, List, Globe } from 'lucide-react';

export default function Home() {
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...events];

    // Filter by region
    if (filters.region !== 'All Regions') {
      filtered = filtered.filter((event) => event.region === filters.region);
    }

    // Filter by month
    if (filters.month !== 'All Months') {
      const monthIndex = new Date(`${filters.month} 1, 2024`).getMonth();
      filtered = filtered.filter((event) => {
        const eventStartMonth = event.startDate.getMonth();
        const eventEndMonth = event.endDate.getMonth();
        return (
          eventStartMonth === monthIndex ||
          eventEndMonth === monthIndex ||
          (eventStartMonth < monthIndex && eventEndMonth > monthIndex)
        );
      });
    }

    // Filter by city
    if (filters.city) {
      const cityLower = filters.city.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.city.toLowerCase().includes(cityLower) ||
          event.country.toLowerCase().includes(cityLower)
      );
    }

    // Filter by deadline soon
    if (filters.deadlineSoon) {
      const now = new Date();
      filtered = filtered.filter((event) => {
        const timeDiff = event.ticketDeadline.getTime() - now.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysDiff <= 14 && daysDiff > 0;
      });
    }

    setFilteredEvents(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero section with background image */}
      <div className="relative md:h-[300px] lg:h-[450px] flex-col md:flex-row bg-primary flex items-center justify-center mb-8 overflow-hidden sticky bottom-0">
        <div className="absolute inset-0  pointer-events-none" />
        <div className="relative z-20 flex flex-col w-full py-6 md:py-16 px-4 md:px-12 lg:px-24">
          <h1 className="text-white bg-clip-text text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent mb-6 md:mb-8 text-center md:text-left">
            Global Crypto Event Tracker
          </h1>
          <p className="md:text-lg text-slate-200 max-w-2xl text-center md:text-left">
          Discover, filter, and track crypto events worldwide. Find conferences, hackathons, and meetups by region, month, or city—plan your crypto journey easily.
          </p>
        </div>
        <img
          src="/hero.svg"
          alt="Ethereum community illustration"
          className="inset-0 w-full h-[280px] md:h-full md:object-cover object-top md:object-center z-0 pointer-events-none"
          // style={{ filter: 'brightness(0.7)' }}
        />
      </div>

      <FilterBar onFilterChange={handleFilterChange} />

      <Tabs defaultValue="calendar" className="w-full">
        <div className="container py-4">
          <TabsList className="grid w-full max-w-md grid-cols-2 border bg-white">
            <TabsTrigger
              value="calendar"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-blue-500/10 data-[state=active]:text-primary"
            >
              <Calendar className="mr-2 h-4 w-4" /> Calendar View
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-blue-500/10 data-[state=active]:text-primary"
            >
              <List className="mr-2 h-4 w-4" /> List View
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="calendar" className="mt-0 bg-white">
          <CalendarView events={filteredEvents} />
        </TabsContent>

        <TabsContent value="list" className="mt-0 bg-white">
          <ListView events={filteredEvents} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
