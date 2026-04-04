import { ArrowRight, Building2, HeadphonesIcon, Layers, Target } from "lucide-react";

const differentials = [
  {
    icon: Layers,
    title: "Contingência é responsabilidade NOSSA",
    description: "Outros te alugam uma conta e te desejam boa sorte. Na AD Scale, toda a estrutura de contingência — perfis, BMs, contas — é gerenciada pelo nosso time. Caiu? Problema nosso. Você não perde 1 minuto.",
  },
  {
    icon: Target,
    title: "Feito pra quem já fatura alto",
    description: "Não atendemos iniciantes. Nosso serviço é pra produtores, afiliados e infoprodutores que já têm operação validada e precisam de estrutura pra escalar sem teto. Se você gasta R$50k+ por mês, a conversa é com a gente.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte que fala a sua língua",
    description: "Nosso time vive no mundo de ads. Entende contingência, entende bloqueio, entende a pressão de ter uma operação parada. Nada de ticket genérico — aqui é suporte direto, rápido e que resolve.",
  },
  {
    icon: Building2,
    title: "Modelo transparente e escalável",
    description: "Taxa de setup pra montar sua estrutura + porcentagem do gasto na conta. Sem mensalidade escondida, sem multa, sem contrato absurdo. Quanto mais você escala, mais a AD Scale faz sentido.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Por que a AD Scale</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Não somos mais um fornecedor de conta.{" "}
            <span className="text-gradient">Somos sua blindagem.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentials.map((diff, i) => (
            <div
              key={i}
              className="glass rounded-xl p-8 transition-all hover:border-primary/30 group relative overflow-hidden"
            >
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
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 animate-pulse-glow"
          >
            QUERO FALAR COM O TIME AD SCALE
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
