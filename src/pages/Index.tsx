import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ChaptersSection from "@/components/landing/ChaptersSection";
import AuthorSection from "@/components/landing/AuthorSection";
import DeliverySection from "@/components/landing/DeliverySection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import StickyPurchaseBox from "@/components/landing/StickyPurchaseBox";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Não existe botão mágico | Ebook por Mateus Westin</title>
        <meta
          name="description"
          content="O que os 'gurus' escondem: A tecnologia de IA só funciona quando existe método e processo por trás. Metodologias práticas para criar produtos digitais com segurança e constância."
        />
        <meta property="og:title" content="Não existe botão mágico | Ebook por Mateus Westin" />
        <meta
          property="og:description"
          content="O que os 'gurus' escondem: A tecnologia de IA só funciona quando existe método e processo por trás."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Não existe botão mágico | Ebook por Mateus Westin" />
        <meta
          name="twitter:description"
          content="O que os 'gurus' escondem: A tecnologia de IA só funciona quando existe método e processo por trás."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://naoexistebotaomagico.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <BenefitsSection />
          <SocialProofSection />
          <ChaptersSection />
          <AuthorSection />
          <DeliverySection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <StickyPurchaseBox />
      </div>
    </>
  );
};

export default Index;
