import { Check, Infinity, RefreshCw, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Infinity,
    title: "Perfis e BMs sem limite",
    description: "Caiu? Repomos na hora. 5, 10, 50 — não importa. Você nunca mais vai ficar na mão por falta de estrutura.",
  },
  {
    icon: ShieldCheck,
    title: "Contingência 100% gerenciada",
    description: "Você não toca em nada. Criação, aquecimento, gestão de perfis e BMs — tudo é responsabilidade nossa. Você só sobe criativo e escala.",
  },
  {
    icon: RefreshCw,
    title: "Reposição em minutos",
    description: "Enquanto outros fornecedores levam dias pra repor uma conta, na AD Scale você tem estrutura nova em minutos. Sua operação não pode esperar.",
  },
  {
    icon: Zap,
    title: "Contas aquecidas e prontas pra volume",
    description: "Nada de conta virgem que toma block no primeiro real gasto. Nossas contas são preparadas pra aguentar o volume que sua operação exige.",
  },
];

const benefits = [
  "Contas de anúncio ilimitadas",
  "Perfis e BMs ilimitados",
  "Reposição em minutos, não dias",
  "Suporte dedicado que entende ads",
  "Estrutura pronta pra alto volume",
  "Você foca em escalar, nós na estrutura",
];

const SolutionSection = () => {
  return (
    <section id="como-funciona" className="section-padding relative">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">A solução definitiva</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Com a AD Scale sua operação <span className="text-gradient">muda de patamar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alugue contas de anúncio com a infraestrutura de contingência mais completa do mercado. 
            Pague apenas uma % do gasto em ads + taxa de setup. Simples assim.
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
        <div className="glass rounded-2xl p-8 md:p-12 max-w-3xl mx-auto glow-box-sm">
          <h3 className="font-display text-2xl font-bold mb-2 text-center">
            O que muda na sua operação com a AD Scale
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Pare de apagar incêndio. Comece a escalar de verdade.
          </p>
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
