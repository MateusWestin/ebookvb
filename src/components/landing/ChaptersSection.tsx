import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";

const chapters = [
  {
    title: "Introdução",
    description: "Por que este livro existe e o que esperar dele.",
  },
  {
    title: "Fases iniciais de um projeto",
    description: "Como começar certo para não precisar recomeçar depois.",
  },
  {
    title: "Planejar para não recomeçar",
    description: "A importância do planejamento antes de escrever a primeira linha de código.",
  },
  {
    title: "Não se Repita, não se repita",
    description: "O princípio DRY aplicado na prática — código limpo e manutenível.",
  },
  {
    title: "Complicou? Já começou errado",
    description: "Simplicidade como virtude: mantenha seu código compreensível.",
  },
  {
    title: "Criando recursos só porque \"vai que\"",
    description: "O perigo do overengineering e como evitar features desnecessárias.",
  },
  {
    title: "Se nem você se acha, a IA muito menos",
    description: "Organização de código para humanos e para ferramentas de IA.",
  },
  {
    title: "Usuário gosta de saber onde clicar",
    description: "UX básico: clareza e previsibilidade na interface.",
  },
  {
    title: "Não é mágica, é planejamento",
    description: "Por trás de todo produto bem-sucedido existe um processo sólido.",
  },
  {
    title: "Tenha referência, não copie",
    description: "Como usar inspiração de forma ética e criativa.",
  },
  {
    title: "Sem referências, o design vira tentativa e erro",
    description: "A importância de um design system e referências visuais.",
  },
  {
    title: "Cada tela de um jeito? Boa sorte",
    description: "Consistência visual e funcional em todas as páginas.",
  },
  {
    title: "Componentes salvam seu futuro eu",
    description: "Componentização como estratégia de escalabilidade.",
  },
  {
    title: "Vibe coding não é carta branca para descuido",
    description: "Use IA com responsabilidade — revise, teste, valide.",
  },
  {
    title: "Expor variáveis é pedir golpe",
    description: "Segurança básica: nunca exponha secrets no front-end.",
  },
  {
    title: "\"Só vou deixar aqui rapidinho\"",
    description: "O perigo das soluções temporárias que viram permanentes.",
  },
  {
    title: "Vai deixar a porta aberta?",
    description: "Autenticação e autorização: proteja seu sistema.",
  },
  {
    title: "URL privada não é segurança",
    description: "Security through obscurity não funciona.",
  },
  {
    title: "O usuário não deve comandar seu banco",
    description: "Validação server-side e proteção contra injection.",
  },
  {
    title: "Conclusão",
    description: "Recapitulação e próximos passos para aplicar o conhecimento.",
  },
];

const ChaptersSection = () => {
  return (
    <section id="capitulos" className="py-section-sm md:py-section bg-surface">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Sumário Completo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            20 capítulos de conteúdo prático
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada capítulo traz conceitos diretos e ações aplicáveis para seu próximo projeto.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {chapters.map((chapter, index) => (
              <AccordionItem
                key={index}
                value={`chapter-${index}`}
                className="bg-card border border-border/60 rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-4 text-left">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium text-foreground">{chapter.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pl-12">
                  <p className="text-muted-foreground">{chapter.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;
