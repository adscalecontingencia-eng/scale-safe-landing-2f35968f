import { AlertTriangle, Ban, Clock, TrendingDown } from "lucide-react";

const pains = [
  {
    icon: Ban,
    title: "Perfis e BMs caindo toda semana",
    description: "Você perde horas recriando estruturas, pausando campanhas e perdendo dados preciosos de otimização.",
  },
  {
    icon: TrendingDown,
    title: "Campanhas parando no melhor momento",
    description: "Quando a campanha finalmente encontra o público certo, a conta cai e você precisa recomeçar do zero.",
  },
  {
    icon: Clock,
    title: "Tempo gasto com contingência",
    description: "Em vez de focar em criativos e escala, você gasta horas gerenciando perfis, aquecendo contas e resolvendo bloqueios.",
  },
  {
    icon: AlertTriangle,
    title: "Risco de perder o faturamento",
    description: "Cada dia sem rodar é dinheiro na mesa. Uma queda inesperada pode custar dezenas de milhares em vendas perdidas.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">O problema</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Você conhece essa <span className="text-gradient">dor</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se você roda nutra ou infoprodutos no Meta, sabe que a maior ameaça ao seu faturamento não é o criativo — é a estrutura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="glass rounded-xl p-8 transition-all hover:border-primary/30 group"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-5">
                <pain.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
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
