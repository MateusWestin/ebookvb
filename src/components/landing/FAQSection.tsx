import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Como recebo o ebook após a compra?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail com o link para download do PDF. A entrega é imediata — em poucos minutos você já pode começar a leitura.",
  },
  {
    question: "O conteúdo é indicado para iniciantes?",
    answer: "Sim! O livro foi escrito para ser acessível a quem está começando, mas também traz insights valiosos para profissionais experientes que querem revisar fundamentos e evitar erros comuns.",
  },
  {
    question: "Posso ler em qualquer dispositivo?",
    answer: "Sim. O ebook é entregue em formato PDF, compatível com computadores, tablets, smartphones e e-readers. Você pode ler offline, a qualquer momento.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Se em até 7 dias você sentir que o conteúdo não atendeu suas expectativas, basta solicitar o reembolso diretamente pela plataforma de pagamento.",
  },
  {
    question: "O livro aborda alguma linguagem de programação específica?",
    answer: "Não. O conteúdo é focado em princípios, metodologias e boas práticas que se aplicam a qualquer stack. Seja você dev front-end, back-end, full-stack ou designer — o conhecimento é transferível.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-section-sm md:py-section bg-surface">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas antes de garantir o seu exemplar.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border/60 rounded-xl px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="hover:no-underline py-4 text-left">
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
