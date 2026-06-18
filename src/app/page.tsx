import HeroSection from "@/components/sections/HeroSection"
import TrustBannerSection from "@/components/sections/TrustBannerSection"
import TheProblemSection from "@/components/sections/TheProblemSection"
import MoreThanAnAppSection from "@/components/sections/MoreThanAnAppSection"
import ProcessSection from "@/components/sections/ProcessSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import WaitingListBannerSection from "@/components/sections/WaitingListBannerSection"
import ForWhoSection from "@/components/sections/ForWhoSection"
import SecuritySection from "@/components/sections/SecuritySection"
import TeamSection from "@/components/sections/TeamSection"
import FormSection from "@/components/sections/FormSection"
import FooterSection from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <main>
      {/* Hero + trust banner share one continuous gradient so the green flows
          seamlessly into the banner (section 03's grey overlaps the lower half). */}
      <div className="hero-gradient">
        <HeroSection />
        <TrustBannerSection />
      </div>
      <TheProblemSection />
      <MoreThanAnAppSection />
      <ProcessSection />
      <FeaturesSection />
      <WaitingListBannerSection />
      <ForWhoSection />
      <SecuritySection />
      <TeamSection />
      <FormSection />
      <FooterSection />
    </main>
  )
}
