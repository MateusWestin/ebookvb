import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Lightbulb, Target } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Metodologia clara e aplicável",
    description: "Ações diretas ao final de cada capítulo para implementar imediatamente no seu projeto.",
  },
  {
    icon: Clock,
    title: "Evite retrabalho",
    description: "Planeje antes de codar. Economize horas — ou dias — de frustração com decisões bem pensadas.",
  },
  {
    icon: Shield,
    title: "Proteja seus dados",
    description: "Aprenda boas práticas de segurança que evitam exposição de variáveis e vulnerabilidades comuns.",
  },
  {
    icon: Target,
    title: "Consistência em cada tela",
    description: "Use componentes e design systems para manter padrão visual e funcional em todo o produto.",
  },
  {
    icon: CheckCircle,
    title: "Vibe Coding com responsabilidade",
    description: "Use IA como ferramenta, não muleta. Entenda quando confiar e quando revisar o código gerado.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-section-sm md:py-section bg-background">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que você vai aprender
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Metodologias práticas para criar produtos digitais que funcionam — com segurança e constância, sem atalhos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group bg-card border-border/60 hover-lift cursor-default"
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
