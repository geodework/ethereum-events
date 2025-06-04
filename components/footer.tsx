import Link from "next/link"
import Subscribe from "./subscribe"
import Title from "./title"

const COMPANY_URL = "https://geodework.com"

const sns = [
  {
    name: "GitHub",
    href: "https://github.com/geodework",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/geodework",
  },
  {
    name: "Donate",
    href: "https://geodework.com/donate",
    isDonate: true,
  },
]

const links = [
  {
    name: "Geodework",
    href: COMPANY_URL,
    external: true,
  },
  {
    name: "About",
    href: `${COMPANY_URL}/about`,
    external: false,
  },
  {
    name: "Contact",
    href: "mailto:hello@geodework.com",
    external: false,
  },
]

export default function Footer() {
  return (
    <footer className="border-t bg-primary">
      <div className="container py-8">
        <div className="flex justify-center mt-3 mb-9">
          <Subscribe />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Title
              imageStyle="p-1.5"
              logoSize={20}
              titleStyle="text-lg font-semibold"
            />
            <p className="mt-2 text-sm text-secondary-300">
              Discover and plan for crypto events worldwide
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white"
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-secondary-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Connect</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {sns.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-secondary-300 hover:text-white${
                      item.isDonate
                        ? " font-bold text-yellow-400 hover:text-yellow-300"
                        : ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                    {item.isDonate && (
                      <span className="relative top-[0.1rem] text-red-400 text-md ml-1 -mb-1">
                        ♥
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-100 pt-8 text-center text-sm text-secondary-300">
          <p>
            © {new Date().getFullYear()} Ethereum Events. All rights reserved.
          </p>
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
