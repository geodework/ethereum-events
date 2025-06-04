import { events } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function ListPage() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-secondary-50 py-10">
      <div className="w-full p-6 pt-0">
        <h1 className="text-2xl font-bold mb-6 text-primary text-center">
          Event List {new Date().getFullYear()}
        </h1>
        <div className="overflow-x-auto rounded-lg border border-secondary-200">
          <table className="min-w-full divide-y divide-secondary-200 text-sm">
            <thead className="bg-secondary-100 sticky top-0 z-10">
              <tr>
                {["Name", "Location", "Date", "Categories", "Domains"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-left font-semibold text-secondary-700 whitespace-nowrap"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-100">
              {events.map((event, idx) => (
                <tr
                  key={event.id}
                  className={cn(
                    "hover:bg-secondary-50 transition-colors",
                    idx % 2 === 0 ? "bg-secondary-50" : "bg-white"
                  )}
                >
                  <td className="px-4 py-2 font-medium text-primary max-w-40 md:max-w-80 lg:max-w-full">
                    {event.name}
                  </td>
                  <td className="px-4 py-2 text-secondary-700 md:whitespace-nowrap">
                    {event.location}
                  </td>
                  <td className="px-4 py-2 text-secondary-700 whitespace-nowrap">
                    {String(event.startDateTime.getMonth() + 1).padStart(
                      2,
                      "0"
                    )}
                    /{String(event.startDateTime.getDate()).padStart(2, "0")} -{" "}
                    {String(event.endDateTime.getMonth() + 1).padStart(2, "0")}/
                    {String(event.endDateTime.getDate()).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-2 text-secondary-700 whitespace-nowrap">
                    {event.categories.join(", ")}
                  </td>
                  <td className="px-4 py-2 text-secondary-700 whitespace-nowrap">
                    {event.domains.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
