import Home from "@/components/home"
import { EPage, generateMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  params: { pageType: EPage.Home, continent: "" },
})

export default function Page() {
  return <Home />
}
