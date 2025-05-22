import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-4 border-cyberpunk-neonBlue bg-cyberpunk-bg/80 backdrop-blur shadow-[0_-2px_16px_0_rgba(0,255,247,0.15)]">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-cyberpunk-neonPink p-1.5 shadow-[0_0_8px_2px_#ff00ea99]">
                <Globe className="h-4 w-4 text-cyberpunk-neonBlue" />
              </div>
              <h3 className="text-lg font-bold font-cyberpunk uppercase tracking-widest text-cyberpunk-neonBlue drop-shadow-[0_0_8px_#00fff7]">
                Ethereum Events
              </h3>
            </div>
            <p className="mt-2 text-sm text-cyberpunk-neonWhite/70">
              Discover and plan for crypto events worldwide
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold font-cyberpunk text-cyberpunk-neonPink">
              Links
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="https://geodework.com"
                  className="text-cyberpunk-neonBlue hover:text-cyberpunk-neonPink drop-shadow-[0_0_8px_#00fff7]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geodework
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cyberpunk-neonBlue hover:text-cyberpunk-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cyberpunk-neonBlue hover:text-cyberpunk-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold font-cyberpunk text-cyberpunk-neonPink">
              Resources
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-cyberpunk-neonBlue hover:text-cyberpunk-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  Submit Event
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cyberpunk-neonBlue hover:text-cyberpunk-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold font-cyberpunk text-cyberpunk-neonPink">
              Legal
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-cyberpunk-neonBlue hover:text-cyberpunk-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cyberpunk-neonBlue hover:text-cyberpunk-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-cyberpunk-neonBlue pt-8 text-center text-sm text-cyberpunk-neonWhite/70">
          <p>
            © {new Date().getFullYear()} Ethereum Events. All rights reserved.
          </p>
          <p className="mt-2">
            <Link
              href="https://geodework.com"
              className="text-cyberpunk-neonPink hover:underline drop-shadow-[0_0_8px_#ff00ea]"
              target="_blank"
              rel="noopener noreferrer"
            >
              A Geodework Project
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
