import React from "react"
import {
  Globe,
  X,
  Link,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Github,
  BookOpen,
  Send
} from "lucide-react"
import { DiscordIcon } from "./icons/discord"
import { XIcon } from "./icons/x"
import { FarcasterIcon } from "./icons/farcaster"

const css = "h-3 w-3"

const mapSocialsToIcon = [
  {
    product: ["x", "twitter"],
    icon: <XIcon className={css} />,
  },
  {
    product: ["linktr"],
    icon: <Link className={css} />,
  },
  {
    product: ["linkedin"],
    icon: <Linkedin className={css} />,
  },
  {
    product: ["facebook"],
    icon: <Facebook className={css} />,
  },
  {
    product: ["instagram"],
    icon: <Instagram className={css} />,
  },
  {
    product: ["youtube"],
    icon: <Youtube className={css} />,
  },
  {
    product: ["discord"],
    icon: <DiscordIcon className={css} />,
  },
  {
    product: ["github"],
    icon: <Github className={css} />,
  },
  {
    product: ["medium"],
    icon: <BookOpen className={css} />,
  },
  {
    product: ["telegram", "t"],
    icon: <Send className={css} />,
  },
  {
    product: ["farcaster", "warpcast"],
    icon: <FarcasterIcon className={css} />,
  },
]

export function SocialLinkIcon({ link }: { link: string }) {
  const lowerLink = link.toLowerCase()

  // Extract the main domain name without TLD
  const getMainDomain = (url: string) => {
    const obj = new URL(url)
    const path = obj.pathname ? obj.pathname.split("/").filter(Boolean)[0] : ""

    try {
      const domain = obj.hostname
      return { domain: domain.split(".")[0], path }
    } catch {
      return { domain: url, path: "" }
    }
  }

  const mainDomain = getMainDomain(lowerLink)
  const social = mapSocialsToIcon.find(
    (social) =>
      social.product.includes(mainDomain.path) ||
      social.product.includes(mainDomain.domain)
  )

  return social?.icon || <Globe className={css} />
}
