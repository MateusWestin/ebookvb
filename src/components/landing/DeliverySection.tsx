import { FileText, Mail, Download, Clock } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Compra segura",
    description: "Pagamento processado com criptografia 256-bit pela Kiwify.",
  },
  {
    icon: Mail,
    title: "E-mail de confirmação",
    description: "Você recebe um e-mail com o link de acesso imediatamente.",
  },
  {
    icon: Download,
    title: "Download do PDF",
    description: "Faça o download e leia em qualquer dispositivo.",
  },
  {
    icon: Clock,
    title: "Acesso vitalício",
    description: "O ebook é seu para sempre — sem mensalidades.",
  },
];

const DeliverySection = () => {
  return (
    <section id="entrega" className="py-section-sm md:py-section bg-background">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona a entrega
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e rápido — em minutos você já está lendo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center p-6"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
