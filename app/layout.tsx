import type React from "react"
import type { Metadata } from "next"
import { Audiowide, Share_Tech_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] })
const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  title: "Ethereum Events - Global Crypto Calendar",
  description: "Discover and plan for crypto events worldwide",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={shareTechMono.className + " font-mono"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-white">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
