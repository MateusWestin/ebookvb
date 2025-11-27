import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Clock, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CHECKOUT_URL = "https://pay.kiwify.com.br/OAJkg6L";

const benefits = [
  { icon: Zap, text: "Ações diretas ao final de cada capítulo" },
  { icon: Clock, text: "Evita retrabalho e desperdício de tempo" },
  { icon: ShieldCheck, text: "Protege dados e reduz riscos" },
];

const StickyPurchaseBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(scrollY > heroHeight && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  // Mobile: Bottom bar
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-sticky p-4 animate-fade-up">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">R$ 33,00</p>
            <p className="text-xs text-muted-foreground">Entrega imediata • PDF</p>
          </div>
          <Button variant="cta" size="default" asChild>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Comprar agora
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Desktop: Sticky sidebar
  return (
    <div className="fixed bottom-8 right-8 z-50 w-80 bg-card border border-border rounded-2xl shadow-card-hover p-6 animate-scale-in">
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Fechar"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="text-center mb-4">
        <p className="text-sm text-muted-foreground mb-1">Por apenas</p>
        <p className="text-3xl font-bold text-foreground">R$ 33,00</p>
        <p className="text-xs text-accent font-medium">Formato digital • Leitura imediata</p>
      </div>

      <div className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3">
            <benefit.icon className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{benefit.text}</span>
          </div>
        ))}
      </div>

      <Button variant="cta" size="lg" className="w-full" asChild>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
          Comprar por R$ 33,00
        </a>
      </Button>

      <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
        <ShieldCheck className="w-3 h-3" />
        Compra segura — criptografia 256-bit
      </p>
    </div>
  );
};

export default StickyPurchaseBox;
