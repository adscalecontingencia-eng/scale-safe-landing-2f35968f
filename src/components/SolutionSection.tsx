import { Check, Infinity, RefreshCw, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Continuidade",
    description: "Suas campanhas nunca param. Caiu uma conta? Outra já está pronta pra entrar no ar.",
  },
  {
    icon: ShieldCheck,
    title: "Estabilidade",
    description: "Contas blindadas e protegidas. Estrutura preparada pra aguentar o volume que sua operação exige.",
  },
  {
    icon: Zap,
    title: "Blindagem Operacional",
    description: "Infraestrutura robusta. Perfis, BMs e contas aquecidas e gerenciadas pelo nosso time.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-5xl relative z-10">
        {/* Badge */}
        <div className="text-center mb-12">
          <div className="badge-pill mx-auto mb-8">
            🛡️ ONDE A AD SCALE ENTRA
          </div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Uma empresa de{" "}
            <span className="text-gradient">infraestrutura de mídia paga,</span>
            <br />
            criada para anunciantes profissionais
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Alugue contas de anúncio com a infraestrutura de contingência mais completa do mercado. 
            Pague apenas uma pequena % do gasto em ads + taxa de setup. Simples assim.
          </p>

          {/* Quote box */}
          <div className="glass rounded-2xl px-8 py-6 max-w-2xl mx-auto mb-16">
            <p className="text-foreground text-lg">
              Nós não prometemos ROAS.{" "}
              <span className="text-primary font-semibold">
                Nós criamos o ambiente necessário para que ele aconteça.
              </span>
            </p>
          </div>
        </div>

        {/* 3-col feature cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="section-card text-center group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="bg-gradient-primary rounded-2xl py-5 px-8 text-center">
          <p className="text-primary-foreground font-display text-lg md:text-xl font-bold">
            Porque sem infraestrutura, não existe escala.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;