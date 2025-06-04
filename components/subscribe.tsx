import { CSSProperties } from "react"

export const subscribeIFrame: CSSProperties = {
  clipPath: `polygon(
    0.125em 0.125em,
    calc(100% - 0.125em) 0.125em,
    calc(100% - 0.125em) calc(100% - 1em),
    calc(100% - 1em) calc(100% - 0.125em),
    0.125em calc(100% - 0.125em)
  )`,
}

const Subscribe = () => (
  <div className="flex max-w-[30rem] flex-col gap-4 tracking-widest">
    <div className="text-center font-mono text-white">
      <strong>subscribe</strong> to our newsletter
    </div>

    <div style={subscribeIFrame}>
      <iframe
        src="https://embeds.beehiiv.com/355286b8-5542-4f41-8667-491754f878fb?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameBorder="0"
        scrolling="no"
        style={{
          margin: 0,
          borderRadius: "0px !important",
          backgroundColor: "transparent",
        }}
      />
    </div>
  </div>
)

export default Subscribe
