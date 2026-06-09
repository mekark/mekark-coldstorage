import ColdStorageHero from "@/components/HeroSection";
import About from "@/components/About";
import EpcCard from "@/components/epcCard";
import SectorCoverage from "@/components/SectorCoverage";
import ProjectApproach from "@/components/ProjectApproach";
import CertificationsSection from "@/components/Certificate";
import WhyMekark from '@/components/WhyMekark'
import Testimonails from '@/components/Testimonails'
import FAQSection from "@/components/Faq";
import ColdStorageCTA from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <ColdStorageHero />
      <About />
      <EpcCard />
      <SectorCoverage />
      <ProjectApproach />
      <CertificationsSection />
      <WhyMekark />
      <Testimonails />
      <FAQSection />
      <ColdStorageCTA />
    </main>
  );
}