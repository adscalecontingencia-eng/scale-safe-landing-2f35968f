import { MessageCircle, Settings, CheckCircle2, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: "Entre em Contato",
    description: "Fale com nosso time via WhatsApp. Em minutos entendemos seu volume, seu nicho e montamos o plano ideal pra sua operação.",
  },
  {
    number: 2,
    icon: Settings,
    title: "Configuração",
    description: "Montamos toda a estrutura — contas, perfis, BMs — tudo aquecido e pronto. Você paga a taxa de setup e já começa.",
  },
  {
    number: 3,
    icon: CheckCircle2,
    title: "Ativação",
    description: "Em poucos minutos você recebe acesso total e pode começar a anunciar imediatamente. Sem enrolação.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Escale",
    description: "Escale seus investimentos com segurança. Bloqueou? Caiu? Nós repomos em minutos. Sua operação nunca para.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding bg-card/30">
      <div className="container max-w-6xl">
        {/* Badge + Headline */}
        <div className="text-center mb-16">
          <div className="badge-pill mx-auto mb-8">
            COMO FUNCIONA
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            O Único Parceiro Que{" "}
            <span className="text-gradient italic">Você Vai Precisar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Processo simples e rápido para você escalar no Meta Ads sem complicações.
          </p>
        </div>

        {/* 4-col step cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="section-card relative group">
              {/* Icon with number badge */}
              <div className="relative w-14 h-14 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-primary text-primary-foreground font-bold px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 animate-pulse-glow"
          >
            <MessageCircle className="w-5 h-5" />
            COMEÇAR AGORA NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;