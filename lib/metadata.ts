import { getBaseUrl } from "@/lib/url"

export enum EPage {
  Home = "Home",
  List = "All Events List",
  PrivacyPolicy = "Privacy Policy",
  TermsOfUse = "Terms of Use",
}

const url = getBaseUrl()
const image = `${url}/og.png`

const siteName = "Ethereum Events"

const getTitle = (siteName: string) =>
  `${siteName} - Discover, filter, and track crypto events worldwide by Geodework`

const descSuffix =
  "Geodework will pursue the geographic decentralization of Ethereum."

const metadataList: Record<EPage, { description: string }> = {
  [EPage.Home]: {
    description:
      "Explore all upcoming Ethereum and crypto events worldwide with both calendar and card views. Effortlessly filter events by date, location, and category to quickly find the ones that interest you most.",
  },
  [EPage.List]: {
    description:
      "Discover Ethereum and crypto events worldwide with powerful calendar and card views. Use advanced filters to search by date, location, and category, making it easy to find the most relevant events for you.",
  },
  [EPage.PrivacyPolicy]: {
    description: `Privacy Policy for ${siteName} - Learn about how we handle and protect your data when using our Ethereum Events.`,
  },
  [EPage.TermsOfUse]: {
    description: `Terms of Use for ${siteName} - Read our terms and conditions for using our platform to find Ethereum and crypto events worldwide.`,
  },
}

export function generateMetadata({
  params,
}: {
  params: { pageType: EPage; continent?: string }
}) {
  const { pageType } = params
  const description = getDescription(pageType)
  const title = generateTitle(pageType)

  return {
    title,
    description,
    icons: {
      icon: [{ url: "/favicon.png", sizes: "any" }],
      apple: [
        { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
      ],
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [{ url: image }],
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: siteName,
    },
  }
}

function generateTitle(pageType: EPage): string {
  if (pageType !== EPage.Home) return `${pageType} | ${getTitle(siteName)}`

  return getTitle(siteName)
}

function getDescription(pageType: EPage): string {
  const metadata = metadataList[pageType]
  if (!metadata) {
    return `Discover, filter, and track Ethereum and crypto events worldwide. ${descSuffix}`
  }
  return `${metadata.description} ${descSuffix}`
}
