import { Badge } from "@/components/ui/badge";
import { Building2, Briefcase, Award } from "lucide-react";
import stockDeveloper from "@/assets/stock-developer.jpg";

const credentials = [
  { icon: Building2, text: "Santander, Itaú, MPPR" },
  { icon: Briefcase, text: "Fortlev, Secretaria de TI de Goiás" },
  { icon: Award, text: "Especialista em produtos digitais" },
];

const AuthorSection = () => {
  return (
    <section id="autor" className="py-section-sm md:py-section bg-background">
      <div className="section-container">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl blur-xl opacity-60" />
            <img
              src={stockDeveloper}
              alt="Mateus Westin - Autor do ebook"
              className="relative rounded-2xl shadow-card w-full max-w-md mx-auto lg:mx-0 object-cover aspect-[4/3]"
            />
          </div>

          <div>
            <Badge variant="outline" className="mb-4 border-accent/30 text-accent bg-accent/5">
              Sobre o Autor
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mateus Westin
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mateus é especialista em desenvolvimento de produtos digitais de ponta a ponta. 
              Atuou em projetos para organizações como <strong className="text-foreground">Santander, Itaú, MPPR, Fortlev</strong> e 
              <strong className="text-foreground"> Secretaria de Tecnologia e Inovação de Goiás</strong>, dentre outras, 
              contribuindo para transformar ideias em soluções reais que geram impacto e resultados expressivos.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Com visão estratégica e capacidade de execução, conecta necessidades de negócio, tecnologia e pessoas 
              para entregar produtos completos e eficientes. Sua visão de um futuro em que produtos digitais elevam 
              a experiência humana continua inspirando profissionais e impulsionando um mercado mais consistente, 
              inovador e orientado a resultados.
            </p>

            <div className="flex flex-wrap gap-4">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border/60"
                >
                  <credential.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground">{credential.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
