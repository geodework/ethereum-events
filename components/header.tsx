import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neonPink bg-darkBg shadow-neon">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-neonCyan p-2 shadow-neonCyan">
            {/* <Globe className="h-5 w-5 text-primary" /> */}
            <Image
              src="/geode-ethereum.png"
              alt="Ethereum Events"
              width={24}
              height={24}
            />
          </div>
          <Link
            href="/"
            className="text-2xl font-extrabold text-neonPink drop-shadow-[0_0_8px_#ff00cc] animate-neonGlow"
          >
            Ethereum Events
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {/* <Link
            href="https://geodework.com"
            className="text-sm font-medium text-slate-300 hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Geodework
          </Link> */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
