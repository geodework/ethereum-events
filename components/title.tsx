import Image from "next/image"
import Link from "next/link"

export default function Title(props: {
  imageStyle?: string
  logoSize?: number
  titleStyle?: string
}) {
  const defaultLogoSize = 30
  return (
    <div className="flex items-center gap-2">
      <div
        className={`rounded-full bg-accent p-1.5 border-2 border-white ${props.imageStyle}`}
      >
        <Image
          src="/geode-ethereum.png"
          alt="Ethereum Events"
          width={props.logoSize || defaultLogoSize}
          height={props.logoSize || defaultLogoSize}
        />
      </div>
      <Link
        href="/"
        className={`text-xl font-bold text-white ${props.titleStyle}`}
      >
        Ethereum Events
      </Link>
    </div>
  )
}
