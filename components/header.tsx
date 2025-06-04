import { ThemeToggle } from "./theme-toggle"
import Title from "./title"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-secondary-100 bg-primary shadow-sm">
      <div className="container flex h-[4rem] items-center justify-between">
        <Title />
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
