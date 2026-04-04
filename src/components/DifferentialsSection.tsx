import { ArrowRight, Building2, HeadphonesIcon, Layers, Target } from "lucide-react";

const differentials = [
  {
    icon: Layers,
    title: "Contingência é com a gente",
    description: "Diferente de quem apenas aluga contas, nós gerenciamos toda a estrutura de contingência. Perfis, BMs, contas — tudo ilimitado e sob nossa responsabilidade.",
  },
  {
    icon: Target,
    title: "Foco em quem roda pesado",
    description: "Nosso serviço é feito para operações validadas que precisam de volume. Se você já gasta R$50k+ por mês em ads, a AD Scale foi feita pra você.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte que entende sua operação",
    description: "Nosso time entende de mídia paga e contingência. Não é um suporte genérico — é um parceiro que sabe o que sua operação precisa.",
  },
  {
    icon: Building2,
    title: "Modelo justo e escalável",
    description: "Você paga uma % do que gasta na conta. Quanto mais você escala, mais sentido faz. Sem taxas fixas, sem setup fee.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Diferenciais</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Por que a AD Scale é{" "}
            <span className="text-gradient">diferente</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentials.map((diff, i) => (
            <div
              key={i}
              className="glass rounded-xl p-8 transition-all hover:border-primary/30 group relative overflow-hidden"
            >
              {/* Subtle glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <diff.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {diff.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 animate-pulse-glow"
          >
            Falar com o time AD Scale
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
