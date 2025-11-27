# Não existe botão mágico — Landing Page

Landing page de alta conversão para o ebook "Não existe botão mágico" por Mateus Westin.

## Stack

- React + TypeScript
- Tailwind CSS
- Shadcn UI
- Vite

## Estrutura

```
src/
├── assets/
│   ├── ebook-cover.png      # Capa do ebook
│   └── stock-developer.jpg  # Foto para seção do autor
├── components/
│   ├── landing/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ChaptersSection.tsx
│   │   ├── AuthorSection.tsx
│   │   ├── DeliverySection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   └── StickyPurchaseBox.tsx
│   └── ui/                  # Componentes Shadcn customizados
├── pages/
│   └── Index.tsx            # Página principal
└── index.css                # Design system tokens
```

## Integração de Pagamento

A landing page está configurada para usar a Kiwify como gateway de pagamento.

### Alterando o link de checkout

Abra os seguintes arquivos e substitua a constante `CHECKOUT_URL`:

- `src/components/landing/HeroSection.tsx`
- `src/components/landing/Navbar.tsx`
- `src/components/landing/StickyPurchaseBox.tsx`
- `src/components/landing/CTASection.tsx`

```tsx
const CHECKOUT_URL = "https://pay.kiwify.com.br/SEU_LINK_AQUI";
```

### Payload de Checkout (para integrações customizadas)

Se você precisar integrar com outro gateway, use o seguinte formato de payload:

```json
{
  "nome": "Nome do Cliente",
  "email": "email@cliente.com",
  "produto_id": "ebook-nao-existe-botao-magico",
  "preco": 33.00
}
```

## Customização

### Cores

Edite o arquivo `src/index.css` para alterar as cores do tema:

```css
:root {
  --primary: 168 37% 18%;      /* Verde escuro principal */
  --accent: 160 100% 32%;       /* Verde vibrante para CTAs */
  --background: 60 9% 98%;      /* Fundo claro */
  --surface: 60 9% 97%;         /* Superfícies elevadas */
}
```

### Tipografia

As fontes estão configuradas no `tailwind.config.ts`:

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Deploy

1. Execute `npm run build` para gerar os arquivos de produção
2. Deploy a pasta `dist` no seu servidor/CDN

## Acessibilidade

- Contraste AA em todos os textos
- Focus-visible em elementos interativos
- Aria-labels em botões e navegação
- Estrutura semântica HTML5

## SEO

- Meta tags configuradas
- Open Graph para compartilhamento social
- Canonical URL
- Estrutura de headings correta (H1 único)
