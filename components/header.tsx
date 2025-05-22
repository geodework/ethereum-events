import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-lg"
      style={{
        background:
          "linear-gradient(90deg, rgba(15,12,41,0.92) 0%, rgba(0,255,247,0.08) 100%)",
        backdropFilter: "blur(8px)",
        borderBottom: "3px solid #00fff7",
        boxShadow: "0 2px 24px 0 #00fff7AA, 0 0 16px 0 #ff00ea55",
        position: "fixed",
      }}
    >
      <div className="container flex h-16 items-center justify-between relative">
        <div className="flex items-center gap-2">
          <div
            className="rounded-full p-2 animate-pulse"
            style={{
              background: "#00fff7",
              boxShadow: "0 0 16px #00fff7, 0 0 8px #ff00ea",
            }}
          >
            <Image
              src="/geode-ethereum.png"
              alt="Ethereum Events"
              width={24}
              height={24}
            />
          </div>
          <div className="flex flex-col justify-center">
            <Link
              href="/"
              className="text-xl font-bold cyberpunk text-white tracking-wide hover:text-[#ff00ea] transition-colors drop-shadow-[0_0_8px_#00fff7]"
              style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
            >
              Ethereum Events
            </Link>
            <span
              className="text-sm font-medium font-display text-[#00fff7] drop-shadow-[0_0_4px_#00fff7] leading-tight"
              style={{ marginTop: 2 }}
            >
              Discover, filter, and track crypto events worldwide.
            </span>
          </div>
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
        {/* Animated neon line at the bottom */}
        <div
          className="neon-glow"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -3,
            height: 3,
            background: "linear-gradient(90deg, #00fff7 0%, #ff00ea 100%)",
            boxShadow: "0 0 16px #00fff7, 0 0 24px #ff00ea",
            opacity: 0.85,
            zIndex: 10,
          }}
        />
      </div>
    </header>
  )
}
