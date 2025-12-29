import Header from "@/components/sections/header";
import HeroBanner from "@/components/sections/hero-banner";
import BrandGrid from "@/components/sections/brand-grid";
import CategoryGrid from "@/components/sections/category-grid";
import PopularSeriesSection from "@/components/sections/popular-series-grid";
import BrandStory from "@/components/sections/brand-story";
import FAQAccordion from "@/components/sections/faq-accordion";
import Footer from "@/components/sections/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProductsSection as FeaturedProducts } from "@/components/sections/featured-products";
import { JsonLd } from "@/components/schema";

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Lapzen - Premium Laptops Store",
    "description": "Premium destination for high-performance laptops, featuring brands like Apple, Dell, and Asus.",
    "publisher": {
      "@type": "Organization",
      "name": "Lapzen"
    }
  };

  return (
    <div className="flex min-h-screen flex-col selection:bg-navy/10">
      <JsonLd data={homeSchema} />
      <Header />
      
        <main className="flex-grow relative">
          <HeroBanner />
          
          <div className="relative">
            <div className="section-connector top-0 opacity-50" />
            <ScrollReveal delay={0.1}>
              <FeaturedProducts 
                title="Featured Laptops"
                description="Our top picks for power and performance"
                type="featured"
                viewAllLink="/catalog?featured=true"
              />
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="section-connector top-0 opacity-50" />
            <ScrollReveal delay={0.2}>
              <FeaturedProducts 
                title="New Arrivals"
                description="Check out our latest high-performance laptops"
                type="new_arrival"
                viewAllLink="/catalog?new_arrival=true"
              />
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="section-connector top-0" />
            <ScrollReveal>
              <BrandGrid />
            </ScrollReveal>
          </div>

        <div className="relative">
          <div className="section-connector top-0 opacity-50" />
          <ScrollReveal delay={0.1}>
            <CategoryGrid />
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="section-connector top-0" />
          <ScrollReveal>
            <PopularSeriesSection />
          </ScrollReveal>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid-overlay absolute inset-0 pointer-events-none opacity-40" />
          <ScrollReveal direction="up">
            <BrandStory />
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="section-connector top-0 opacity-30" />
          <ScrollReveal>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
