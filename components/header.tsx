import Link from "next/link"
import Title from "./title"
import { ArrowRight } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-secondary-100 bg-primary shadow-sm">
      <div className="container flex flex-row h-[4rem] items-center justify-between">
        <Title />
        <Link
          href="/list"
          className="text-secondary-200 font-medium transition-colors text-sm px-3 py-1 rounded-md hover:text-secondary-400 flex items-center gap-1"
        >
          All Events List
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  )
}
