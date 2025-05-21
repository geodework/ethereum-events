import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-0 bg-[rgba(20,20,30,0.95)] shadow-[0_0_16px_2px_#d726ff] font-orbitron pt-0">
      <div className="w-full h-2 bg-gradient-to-r from-neonPink via-neonYellow to-neonBlue" />
      <div className="py-8 px-4 md:px-12 lg:px-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-neonYellow p-1.5 shadow-[0_0_8px_2px_#ffe700]">
                <Globe className="h-4 w-4 text-neonPurple" />
              </div>
              <h3 className="text-lg font-extrabold text-neonPurple drop-shadow-[0_0_6px_#d726ff] tracking-widest uppercase">
                Ethereum Events
              </h3>
            </div>
            <p className="mt-2 text-sm text-neonBlue drop-shadow-[0_0_4px_#00cfff]">
              Discover and plan for crypto events worldwide
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-neonPink drop-shadow-[0_0_4px_#ff3cac]">
              Links
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="https://geodework.com"
                  className="text-neonGreen hover:text-neonYellow drop-shadow-[0_0_4px_#00ff9f]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geodework
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neonGreen hover:text-neonYellow drop-shadow-[0_0_4px_#00ff9f]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neonGreen hover:text-neonYellow drop-shadow-[0_0_4px_#00ff9f]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-neonPink drop-shadow-[0_0_4px_#ff3cac]">
              Resources
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-neonGreen hover:text-neonYellow drop-shadow-[0_0_4px_#00ff9f]"
                >
                  Submit Event
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neonGreen hover:text-neonYellow drop-shadow-[0_0_4px_#00ff9f]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-neonPink drop-shadow-[0_0_4px_#ff3cac]">
              Legal
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-neonGreen hover:text-neonYellow drop-shadow-[0_0_4px_#00ff9f]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neonGreen hover:text-neonYellow drop-shadow-[0_0_4px_#00ff9f]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neonPurple pt-8 text-center text-sm text-neonBlue drop-shadow-[0_0_4px_#00cfff]">
          <p>
            © {new Date().getFullYear()} Ethereum Events. All rights reserved.
          </p>
          <p className="mt-2">
            <Link
              href="https://geodework.com"
              className="text-neonPurple hover:text-neonYellow drop-shadow-[0_0_4px_#d726ff]"
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
