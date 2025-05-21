import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-citypopBlue via-citypopPurple to-citypopPink shadow-inner shadow-citypopPink/30 rounded-t-3xl border-t-4 border-citypopYellow mt-12">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-citypopYellow p-2 shadow-md shadow-citypopPink/30">
                <Globe className="h-5 w-5 text-citypopPink" />
              </div>
              <h3 className="text-xl font-extrabold font-citypop text-white drop-shadow-neon tracking-widest">
                Ethereum Events
              </h3>
            </div>
            <p className="mt-2 text-base text-citypopYellow font-citypop">
              Discover and plan for crypto events worldwide
            </p>
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
        <div className="mt-10 border-t-2 border-citypopYellow pt-8 text-center text-base text-citypopYellow font-citypop">
          <p>
            © {new Date().getFullYear()} Ethereum Events. All rights reserved.
          </p>
          <p className="mt-2">
            <Link
              href="https://geodework.com"
              className="text-citypopPink hover:underline font-bold"
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
