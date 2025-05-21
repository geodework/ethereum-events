import Link from "next/link"
import { Globe } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-citypopPink via-citypopPurple to-citypopBlue shadow-xl shadow-citypopPink/40 rounded-b-3xl border-b-4 border-citypopYellow">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-citypopYellow p-3 shadow-lg shadow-citypopPink/40">
            <Image
              src="/geode-ethereum.png"
              alt="Ethereum Events"
              width={24}
              height={24}
            />
          </div>
          <Link
            href="/"
            className="text-2xl font-extrabold font-citypop text-white drop-shadow-neon tracking-widest"
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
