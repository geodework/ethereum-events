import Image from "next/image"
import Link from "next/link"
import { EthereumIcon } from "./icons/ethereum"

export default function Title(props: {
  imageStyle?: string
  logoSize?: number
  titleStyle?: string
}) {
  const defaultLogoSize = 30
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/"
        className={`text-xl text-white ${props.titleStyle} whitespace-nowrap`}
      >
        Ethereum Events
      </Link>
    </div>
  )
}
