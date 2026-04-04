const steps = [
  {
    number: "01",
    title: "Entre em contato",
    description: "Fale com nosso time pelo WhatsApp. Vamos entender seu volume e sua operação.",
  },
  {
    number: "02",
    title: "Receba sua estrutura",
    description: "Montamos toda a estrutura de contas, perfis e BMs necessária para sua operação rodar.",
  },
  {
    number: "03",
    title: "Rode e escale",
    description: "Suba seus criativos e escale sem limites. Se algo cair, repomos em minutos.",
  },
  {
    number: "04",
    title: "Pague pela performance",
    description: "Você paga apenas uma porcentagem do gasto em ads. Sem mensalidade fixa, sem surpresas.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Processo</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Simples como deve ser
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Em poucos passos você tem tudo pronto para escalar.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex gap-6 md:gap-10 pb-12 last:pb-0 group"
            >
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[27px] md:left-[35px] top-16 bottom-0 w-px bg-border" />
              )}

              {/* Number */}
              <div className="flex-shrink-0 w-14 h-14 md:w-[70px] md:h-[70px] rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg md:text-xl glow-box-sm">
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-1">
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
