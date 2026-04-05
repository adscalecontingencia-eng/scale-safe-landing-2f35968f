import { AlertTriangle, Ban, Clock, TrendingDown, XCircle } from "lucide-react";

const painChips = [
  "Contas instáveis",
  "Banimentos inesperados",
  "Interrupções operacionais",
  "Falta de continuidade",
];

const pains = [
  {
    icon: Ban,
    title: "Perfil caiu. BM bloqueada. Conta restrita.",
    description: "Isso não é azar — é falta de estrutura. Enquanto você tenta recriar tudo do zero, seu caixa tá sangrando e seu concorrente tá escalando no seu lugar.",
  },
  {
    icon: TrendingDown,
    title: "Campanha validada e a conta morre",
    description: "Você investiu tempo, dinheiro e criativo pra achar o público perfeito. Aí a conta cai e você perde o pixel, o histórico e a otimização. Começa do zero. De novo.",
  },
  {
    icon: Clock,
    title: "Seu tempo vale mais do que criar perfil",
    description: "Produtor e afiliado que fatura alto não deveria perder horas gerenciando contingência. Seu tempo deveria estar em escala, não em sobrevivência.",
  },
  {
    icon: AlertTriangle,
    title: "Cada dia parado são milhares perdidos",
    description: "Se você roda R$10k, R$50k, R$100k por dia e fica 48h sem rodar, faça a conta. Essa é a realidade de quem não tem contingência profissional.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-5xl text-center">
        {/* Badge */}
        <div className="badge-pill mx-auto mb-8">
          <XCircle className="w-4 h-4" />
          A VERDADE QUE POUCOS FALAM
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          O Meta Ads não falha por performance.
          <br />
          <span className="text-gradient">Ele falha por infraestrutura.</span>
        </h2>

        {/* Sub */}
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Se você roda nutra ou infoprodutos no Meta e não tem uma contingência profissional, 
          é questão de tempo para a sua estrutura ficar estagnada.
        </p>

        {/* Pain chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {painChips.map((chip, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border border-destructive/30 rounded-full px-5 py-2.5 text-sm text-destructive"
            >
              <XCircle className="w-3.5 h-3.5" />
              {chip}
            </div>
          ))}
        </div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {pains.map((pain, i) => (
            <div key={i} className="section-card text-left group">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <pain.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {pain.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;