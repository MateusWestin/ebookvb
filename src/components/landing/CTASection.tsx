import { Button } from "@/components/ui/button";
import { ShieldCheck, BookOpen } from "lucide-react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/OAJkg6L";

const CTASection = () => {
  return (
    <section className="py-section-sm md:py-section bg-primary text-primary-foreground">
      <div className="section-container text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pare de cometer erros evitáveis
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-8">
            Metodologias práticas para criar produtos digitais que funcionam — com segurança e constância, sem atalhos ou promessas vazias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Comprar por R$ 33,00
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Compra segura • Entrega imediata • PDF
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
