import SeoLanding, { seoMetadata } from "@/components/seo/seo-landing"

const SLUG = "website-gastronomie-duesseldorf"

export const metadata = seoMetadata(SLUG)

export default function Page() {
  return <SeoLanding slug={SLUG} />
}
