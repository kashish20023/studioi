import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyShowcase from "@/components/CompanyShowcase";
import ValuationGrid from "@/components/ValuationGrid";
import EditorialSection from "@/components/EditorialSection";
import CommunityGridSection from "@/components/CommunityGridSection";
import ApplyShowcaseSection from "@/components/ApplyShowcaseSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F6F2] flex flex-col font-sans">
      {/* Sticky Top Navbar Component */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* YC Hero Section ("YC turns builders into formidable founders [1]") */}
        <HeroSection />

        {/* Premium Scroll-Driven Showcase Component ("During Studio -> Now") */}
        <div id="showcase">
          <CompanyShowcase />
        </div>

        {/* Valuation Grid ($1.3 Trillion combined valuation + 32 Startup Logos) */}
        <ValuationGrid />

        {/* Editorial Narrative Section */}
        <EditorialSection />

        {/* Community 3x3 Photo Grid ("Be in the room with visionary founders & builders...") */}
        <CommunityGridSection />

        {/* Apply CTA & 5 Horizontal Photo Showcase Section (Right before footer) */}
        <ApplyShowcaseSection />
      </main>

      {/* Reusable Black Footer Component */}
      <Footer />
    </div>
  );
}
