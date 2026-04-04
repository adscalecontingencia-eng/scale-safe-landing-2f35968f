const steps = [
  {
    number: "01",
    title: "Fale com nosso time",
    description: "Manda uma mensagem no WhatsApp. Em minutos nosso time entende seu volume, seu nicho e monta o plano ideal pra sua operação.",
  },
  {
    number: "02",
    title: "Setup da sua estrutura",
    description: "Montamos toda a estrutura — contas, perfis, BMs — tudo aquecido e pronto pra rodar pesado. Você paga a taxa de setup e já começa.",
  },
  {
    number: "03",
    title: "Suba seus criativos e escale",
    description: "Sua única preocupação é criativo e escala. Bloqueou? Caiu? Nós repomos em minutos. Sua operação nunca para.",
  },
  {
    number: "04",
    title: "Pague pela performance",
    description: "Modelo simples: taxa de setup + porcentagem do gasto em ads. Quanto mais você escala, mais faz sentido. Sem pegadinha, sem surpresa.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Como funciona</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Do zero à escala em <span className="text-gradient">4 passos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Sem burocracia, sem enrolação. Você fala, a gente monta, você escala.
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
