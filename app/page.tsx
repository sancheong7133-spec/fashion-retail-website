import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BrandSection } from "@/components/brand-section"
import { CollectionsSection } from "@/components/collections-section"
import { AtelierSection } from "@/components/atelier-section"
import { ValuesSection } from "@/components/values-section"
import { CampaignSection } from "@/components/campaign-section"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <BrandSection />
        <CollectionsSection />
        <AtelierSection />
        <ValuesSection />
        <CampaignSection />
        <ContactFooter />
      </main>
    </div>
  )
}
