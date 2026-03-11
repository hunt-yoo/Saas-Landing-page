import { HeroSection } from "../components/blocks/HeroSection";
import { FeaturesBento } from "../components/blocks/FeaturesBento";
import { ProductShowcase } from "../components/blocks/ProductShowcase";
import { BenefitsGrid } from "../components/blocks/BenefitsGrid";
import { InfoCarouselSection } from "../components/blocks/InfoCarouselSection";
import { StatsSection } from "../components/blocks/StatsSection";
import { GlobeSection } from "../components/blocks/GlobeSection";
import { PricingSection } from "../components/blocks/PricingSection";
import { BottomCTA } from "../components/blocks/BottomCTA";

export function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesBento />
      <ProductShowcase />
      <BenefitsGrid />
      <InfoCarouselSection />
      <StatsSection />
      <GlobeSection />
      <PricingSection />
      <BottomCTA />
    </main>
  );
}
