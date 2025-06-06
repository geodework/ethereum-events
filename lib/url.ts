export const DOMAIN = "ethereumevents.com"

const currentOrigin = process.env.__NEXT_PRIVATE_ORIGIN
  ? new URL(process.env.__NEXT_PRIVATE_ORIGIN)
  : null

function isURL(value: unknown): value is URL {
  return value instanceof URL
}

export const isProduction = isURL(currentOrigin)
  ? currentOrigin.hostname === DOMAIN
  : false

export const getBaseUrl = () => {
  if (!isProduction) {
    if (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL) {
      return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
    }
    return "http://localhost:3000"
  }

  return `https://${DOMAIN}`
}
