import { Badge } from "@/components/ui/badge";
import ebookCover from "@/assets/ebook-cover-original.jpg";

const EbookCover = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />
      <div className="relative w-64 md:w-80 lg:w-96 rounded-2xl shadow-card-hover transform hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
        <img
          src={ebookCover}
          alt="Capa do ebook Não existe botão mágico por Mateus Westin"
          className="w-full h-auto aspect-[2/3] object-cover"
        />
      </div>
      
      <Badge className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold shadow-lg z-10">
        PDF Digital
      </Badge>
    </div>
  );
};

export default EbookCover;
