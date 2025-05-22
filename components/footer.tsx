import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="border-t shadow-lg"
      style={{
        background:
          "linear-gradient(90deg, rgba(15,12,41,0.92) 0%, rgba(255,0,234,0.08) 100%)",
        backdropFilter: "blur(8px)",
        borderTop: "3px solid #00fff7",
        boxShadow: "0 -2px 24px 0 #00fff7AA, 0 0 16px 0 #ff00ea55",
        position: "relative",
      }}
    >
      {/* Animated neon line at the top */}
      <div
        className="neon-glow"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: -3,
          height: 3,
          background: "linear-gradient(90deg, #00fff7 0%, #ff00ea 100%)",
          boxShadow: "0 0 16px #00fff7, 0 0 24px #ff00ea",
          opacity: 0.85,
          zIndex: 10,
        }}
      />
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div
                className="rounded-full p-1.5 animate-pulse"
                style={{
                  background: "#00fff7",
                  boxShadow: "0 0 16px #00fff7, 0 0 8px #ff00ea",
                }}
              >
                <Globe className="h-4 w-4 text-white" />
              </div>
              <h3
                className="text-lg font-semibold cyberpunk text-white tracking-wide drop-shadow-[0_0_8px_#00fff7]"
                style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
              >
                Ethereum Events
              </h3>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Discover and plan for crypto events worldwide
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium cyberpunk text-white">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="https://geodework.com"
                  className="text-slate-300 hover:text-[#ff00ea] transition-colors drop-shadow-[0_0_8px_#00fff7]"
                  style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geodework
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-[#ff00ea] transition-colors drop-shadow-[0_0_8px_#00fff7]"
                  style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-[#ff00ea] transition-colors drop-shadow-[0_0_8px_#00fff7]"
                  style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium cyberpunk text-white">
              Resources
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-[#ff00ea] transition-colors drop-shadow-[0_0_8px_#00fff7]"
                  style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
                >
                  Submit Event
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-[#ff00ea] transition-colors drop-shadow-[0_0_8px_#00fff7]"
                  style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium cyberpunk text-white">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-[#ff00ea] transition-colors drop-shadow-[0_0_8px_#00fff7]"
                  style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-[#ff00ea] transition-colors drop-shadow-[0_0_8px_#00fff7]"
                  style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-100 pt-8 text-center text-sm text-slate-300">
          <p>
            © {new Date().getFullYear()} Ethereum Events. All rights reserved.
          </p>
          <p className="mt-2">
            <Link
              href="https://geodework.com"
              className="text-[#00fff7] hover:text-[#ff00ea] transition-colors drop-shadow-[0_0_8px_#00fff7]"
              style={{ textShadow: "0 0 8px #00fff7, 0 0 2px #ff00ea" }}
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
