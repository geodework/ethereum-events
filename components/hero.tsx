import { EthereumIcon } from "./icons/ethereum"

export function Hero() {
  return (
    <div className="container pt-8 pb-4">
      <div className="mb-8 text-center">
        {/* Ethereum Logo and Decorative Stars */}
        <div className="flex flex-col items-center mt-2 mb-9">
          <div className="relative flex flex-col items-center">
            {/* Stars */}
            {/* Top Left */}
            <span
              className="absolute text-[14px] text-[#d4af37] opacity-60 animate-[twinkle_3s_ease-in-out_infinite]"
              style={{ top: "-35%", left: "-15%", animationDelay: "0s" }}
            >
              ✦
            </span>
            {/* Middle Left */}
            <span
              className="absolute text-[10px] text-[#d4af37] opacity-60 animate-[twinkle_3s_ease-in-out_infinite]"
              style={{ top: "39%", left: "-50%", animationDelay: "0.5s" }}
            >
              ✦
            </span>
            {/* Bottom Left */}
            <span
              className="absolute text-[16px] text-[#d4af37] opacity-60 animate-[twinkle_3s_ease-in-out_infinite]"
              style={{ bottom: "-20%", left: "-37%", animationDelay: "1s" }}
            >
              ✦
            </span>
            {/* Top Right */}
            <span
              className="absolute text-[13px] text-[#d4af37] opacity-60 animate-[twinkle_3s_ease-in-out_infinite]"
              style={{ top: "-10%", right: "-40%", animationDelay: "1.5s" }}
            >
              ✦
            </span>
            {/* Middle Right */}
            <span
              className="absolute text-[11px] text-[#d4af37] opacity-80 animate-[twinkle_3s_ease-in-out_infinite]"
              style={{ bottom: "-12%", right: "-48%", animationDelay: "2s" }}
            >
              ✦
            </span>
            {/* Bottom Right */}
            <span
              className="absolute text-[15px] text-[#d4af37] opacity-70 animate-[twinkle_3s_ease-in-out_infinite]"
              style={{
                bottom: "-48%",
                right: "-15%",
                animationDelay: "2.5s",
              }}
            >
              ✦
            </span>
            {/* Ethereum Logo */}
            <EthereumIcon />
          </div>
        </div>
        <p className="mt-4 text-lg subtitle">
          A curated selection of conferences, hackathons, and gatherings across
          the global Ethereum ecosystem
        </p>
      </div>
    </div>
  )
}
