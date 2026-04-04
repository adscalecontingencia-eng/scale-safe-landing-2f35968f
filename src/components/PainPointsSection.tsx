import { AlertTriangle, Ban, Clock, TrendingDown } from "lucide-react";

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
    description: "Produtor e afiliado que fatura alto não deveria perder 3, 4, 5 horas por dia gerenciando contingência. Seu tempo deveria estar em escala, não em sobrevivência.",
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
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">A realidade que ninguém fala</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Você tá <span className="text-gradient">perdendo dinheiro</span> todo dia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se você roda nutra ou info no Meta e não tem contingência blindada, 
            não é questão de "se" vai parar — é questão de "quando".
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
