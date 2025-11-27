import { Badge } from "@/components/ui/badge";
import ebookCoverBg from "@/assets/ebook-cover.png";

const EbookCover = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />
      <div className="relative w-64 md:w-80 lg:w-96 rounded-2xl shadow-card-hover transform hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
        {/* Background Image */}
        <img
          src={ebookCoverBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        
        {/* Overlay with text */}
        <div className="relative aspect-[2/3] bg-gradient-to-b from-primary/90 via-primary/85 to-primary flex flex-col items-center justify-center p-8 text-center">
          <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary-foreground leading-tight mb-4">
              Não existe<br />botão mágico
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-4" />
            <p className="text-sm md:text-base text-primary-foreground/80 max-w-[200px] leading-relaxed">
              O que os "gurus" escondem sobre IA e tecnologia
            </p>
          </div>
          
          <div className="mt-auto pt-8">
            <p className="text-sm font-medium text-accent">Mateus Westin</p>
          </div>
        </div>
      </div>
      
      <Badge className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold shadow-lg z-10">
        PDF Digital
      </Badge>
    </div>
  );
};

export default EbookCover;
