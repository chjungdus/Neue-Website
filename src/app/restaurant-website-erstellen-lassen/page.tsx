import SeoLanding, { seoMetadata } from "@/components/seo/seo-landing"

const SLUG = "restaurant-website-erstellen-lassen"

export const metadata = seoMetadata(SLUG)

export default function Page() {
  return <SeoLanding slug={SLUG} />
}
