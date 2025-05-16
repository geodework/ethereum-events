import Link from "next/link"
import { Globe } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-br from-primary to-blue-500 p-2">
            <Globe className="h-5 w-5 text-white" />
          </div>
          <Link href="/" className="text-xl font-bold text-primary">
            Ethereum Events
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://geodework.com"
            className="text-sm font-medium text-slate-600 hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Geodework
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
