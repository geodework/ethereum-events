import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-cyberpunk-bg/80 backdrop-blur border-b-4 border-cyberpunk-neonBlue shadow-[0_2px_16px_0_rgba(0,255,247,0.15)]">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-cyberpunk-neonPink p-2 shadow-[0_0_8px_2px_#ff00ea99]">
            <Image
              src="/geode-ethereum.png"
              alt="Ethereum Events"
              width={28}
              height={28}
            />
          </div>
          <Link
            href="/"
            className="text-2xl font-bold font-cyberpunk uppercase tracking-widest text-cyberpunk-neonBlue drop-shadow-[0_0_8px_#00fff7]"
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
