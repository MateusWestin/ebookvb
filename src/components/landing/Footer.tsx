import { BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-serif font-semibold text-foreground">
              Não existe botão mágico
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="#capitulos" className="text-muted-foreground hover:text-foreground transition-colors">
              Capítulos
            </a>
            <a href="#autor" className="text-muted-foreground hover:text-foreground transition-colors">
              Autor
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Mateus Westin. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
