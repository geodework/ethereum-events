import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-primary shadow-cyberpunk">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-accent p-1.5 shadow-cyberpunk-glow">
                <Globe className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-lg font-extrabold cyberpunk-heading drop-shadow-cyberpunk-glow">
                Ethereum Events
              </h3>
            </div>
            <p className="mt-2 text-sm text-secondary-foreground">
              Discover and plan for crypto events worldwide
            </p>
          </div>
          <div>
            <h3 className="text-lg font-extrabold cyberpunk-heading drop-shadow-cyberpunk-glow">
              Links
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="https://geodework.com"
                  className="cyberpunk-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geodework
                </Link>
              </li>
              <li>
                <Link href="#" className="cyberpunk-accent hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="cyberpunk-accent hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-extrabold cyberpunk-heading drop-shadow-cyberpunk-glow">
              Resources
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="cyberpunk-accent hover:underline">
                  Submit Event
                </Link>
              </li>
              <li>
                <Link href="#" className="cyberpunk-accent hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-extrabold cyberpunk-heading drop-shadow-cyberpunk-glow">
              Legal
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="cyberpunk-accent hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="cyberpunk-accent hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-accent pt-8 text-center text-sm text-secondary-foreground">
          <p>
            © {new Date().getFullYear()} Ethereum Events. All rights reserved.
          </p>
          <p className="mt-2">
            <Link
              href="https://geodework.com"
              className="cyberpunk-accent hover:underline"
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
