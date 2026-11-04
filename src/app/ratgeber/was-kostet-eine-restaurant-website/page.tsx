import SeoLanding, { seoMetadata } from "@/components/seo/seo-landing"

const SLUG = "ratgeber/was-kostet-eine-restaurant-website"

export const metadata = seoMetadata(SLUG)

export default function Page() {
  return <SeoLanding slug={SLUG} />
}
