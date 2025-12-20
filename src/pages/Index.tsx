import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import SecuritySection from "@/components/SecuritySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CodeAware Triage - IA Local para Triagem de Chamados de Suporte</title>
        <meta 
          name="description" 
          content="Automatize a triagem de chamados de suporte técnico com IA que roda 100% no seu hardware. Zero vazamento de dados, privacidade total. Teste grátis por 14 dias." 
        />
        <meta name="keywords" content="triagem chamados, suporte técnico, IA local, privacidade, LGPD, automação TI" />
        <link rel="canonical" href="https://codeaware.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <SecuritySection />
          <PricingSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
