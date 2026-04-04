import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <HowItWorksSection />
      <section id="diferenciais">
        <DifferentialsSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
