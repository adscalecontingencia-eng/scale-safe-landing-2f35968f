import { Check, Infinity, RefreshCw, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Infinity,
    title: "Perfis e BMs ilimitados",
    description: "Não importa quantos caiam — nós repomos imediatamente. Sua operação nunca para.",
  },
  {
    icon: ShieldCheck,
    title: "Contingência completa",
    description: "Toda a estrutura de contingência é nossa responsabilidade. Você só precisa subir os criativos.",
  },
  {
    icon: RefreshCw,
    title: "Reposição imediata",
    description: "Conta bloqueada? Em minutos você tem uma nova pronta para rodar, com a mesma qualidade.",
  },
  {
    icon: Zap,
    title: "Contas de alta qualidade",
    description: "Contas aquecidas e preparadas para aguentar volume alto sem restrições.",
  },
];

const benefits = [
  "Sem limite de contas de anúncio",
  "Sem limite de perfis e BMs",
  "Reposição em minutos, não dias",
  "Suporte dedicado para sua operação",
  "Pague apenas % do gasto na conta",
  "Zero preocupação com estrutura",
];

const SolutionSection = () => {
  return (
    <section id="como-funciona" className="section-padding relative">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">A solução</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            A AD Scale cuida da sua{" "}
            <span className="text-gradient">estrutura</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alugue contas de anúncio e ganhe uma infraestrutura completa de contingência. 
            Você paga apenas uma porcentagem do valor gasto dentro da conta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass rounded-xl p-8 transition-all hover:border-primary/30 hover:glow-box-sm group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits checklist */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold mb-8 text-center">
            O que você ganha com a AD Scale
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
