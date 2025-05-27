import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-secondary-100 bg-primary shadow-sm">
      <div className="container flex h-[4rem] items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-accent p-1.5 border-2 border-white">
            <Image
              src="/geode-ethereum.png"
              alt="Ethereum Events"
              width={32}
              height={32}
            />
          </div>
          <Link href="/" className="text-xl font-bold text-white">
            Ethereum Events
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {/* <Link
            href="https://geodework.com"
            className="text-sm font-medium text-secondary-300 hover:text-primary"
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
