import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(20,20,30,0.85)] border-b-0 shadow-[0_0_16px_2px_#d726ff]">
      <div className="flex h-16 items-center justify-between px-4 md:px-12 lg:px-32">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-neonYellow p-2 shadow-[0_0_8px_2px_#ffe700]">
            <Image
              src="/geode-ethereum.png"
              alt="Ethereum Events"
              width={24}
              height={24}
            />
          </div>
          <Link
            href="/"
            className="text-2xl font-orbitron font-extrabold text-neonPurple drop-shadow-[0_0_6px_#d726ff] tracking-widest uppercase"
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
      <div className="w-full h-2 bg-gradient-to-r from-neonBlue via-neonYellow to-neonPink" />
    </header>
  )
}
