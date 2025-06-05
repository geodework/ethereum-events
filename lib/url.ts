export const DOMAIN = "ethereum-events.com"

export const isProduction =
  process.env.NEXT_PUBLIC_VERCEL_TARGET_ENV === "production"

export const getBaseUrl = () => {
  if (isProduction) {
    return `https://${DOMAIN}`
  }
  if (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
  }
  return "http://localhost:3000"
}
