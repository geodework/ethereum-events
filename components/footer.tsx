import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-4 border-neonPink bg-darkBg shadow-neon">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-neonCyan p-1.5 shadow-neonCyan">
                <Globe className="h-4 w-4 text-neonPink" />
              </div>
              <h3 className="text-lg font-extrabold text-neonPink drop-shadow-[0_0_8px_#ff00cc] animate-neonGlow">
                Ethereum Events
              </h3>
            </div>
            <p className="mt-2 text-sm text-neonCyan">
              Discover and plan for crypto events worldwide
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-neonPink">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="https://geodework.com"
                  className="text-neonCyan hover:text-neonPink drop-shadow-[0_0_8px_#00fff7]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geodework
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neonCyan hover:text-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neonCyan hover:text-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-neonPink">Resources</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-neonCyan hover:text-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  Submit Event
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neonCyan hover:text-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-neonPink">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-neonCyan hover:text-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neonCyan hover:text-neonPink drop-shadow-[0_0_8px_#00fff7]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t-2 border-neonPink pt-8 text-center text-sm text-neonCyan">
          <p>
            © {new Date().getFullYear()} Ethereum Events. All rights reserved.
          </p>
          <p className="mt-2">
            <Link
              href="https://geodework.com"
              className="text-neonPink hover:underline drop-shadow-[0_0_8px_#ff00cc]"
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
