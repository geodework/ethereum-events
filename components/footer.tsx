import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-primary">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-accent p-1.5">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Ethereum Events</h3>
            </div>
            <p className="mt-2 text-sm text-slate-300">Discover and plan for crypto events worldwide</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link
                  href="https://geodework.com"
                  className="text-slate-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geodework
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Resources</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-slate-300 hover:text-white">
                  Submit Event
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-slate-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-100 pt-8 text-center text-sm text-slate-300">
          <p>© {new Date().getFullYear()} Ethereum Events. All rights reserved.</p>
          <p className="mt-2">
            <Link
              href="https://geodework.com"
              className="text-primary hover:underline"
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
