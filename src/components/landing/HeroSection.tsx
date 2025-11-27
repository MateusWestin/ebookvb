import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Zap, FileText } from "lucide-react";
import EbookCover from "./EbookCover";

const CHECKOUT_URL = "https://pay.kiwify.com.br/OAJkg6L";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="section-container">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Ebook Cover */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <EbookCover />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-primary/5 px-4 py-2">
              Novo Lançamento
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Não existe botão mágico
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              O que os "gurus" escondem: A tecnologia de IA só funciona quando existe <strong className="text-foreground">método e processo</strong> por trás.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm">Metodologias práticas</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-sm">Segurança e constância</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <FileText className="w-5 h-5 text-accent" />
                <span className="text-sm">Apps, SaaS e sites</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button variant="hero" size="xl" asChild>
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  Comprar por R$ 33,00
                </a>
              </Button>
              <div className="text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  Entrega imediata • PDF
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Por <strong className="text-foreground">Mateus Westin</strong> — Especialista em produtos digitais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
