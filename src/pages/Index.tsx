import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <PainPointsSection />
      <SolutionSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;