import stockTeam from "@/assets/stock-team.jpg";
import { Badge } from "@/components/ui/badge";

const SocialProofSection = () => {
  return (
    <section className="py-section-sm md:py-section bg-surface overflow-hidden">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl blur-xl opacity-60" />
            <img
              src={stockTeam}
              alt="Equipe de profissionais em reunião"
              className="relative rounded-2xl shadow-card w-full object-cover aspect-[3/2]"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="mb-4 border-accent/30 text-accent bg-accent/5">
              Para quem é este livro
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ideal para quem trabalha com tecnologia
            </h2>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Desenvolvedores</strong> que querem evitar retrabalho e código espaguete</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Designers</strong> que criam interfaces e precisam de consistência</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Entusiastas de VibeCoding</strong> que usam IA mas querem resultados sólidos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span><strong className="text-foreground">Donos de agências e consultorias</strong> que entregam produtos digitais</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
