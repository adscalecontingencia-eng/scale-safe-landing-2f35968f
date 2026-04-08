import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-4xl relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Comece a escalar no Meta{" "}
          <span className="text-gradient italic">hoje mesmo.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Contingência blindada + suporte humano + processo claro. Tudo que você precisa para escalar sem bloqueios.
        </p>

        <a
          href="https://wa.me/message/LT3GZH6T7PTYB1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-gradient-primary text-primary-foreground font-bold px-12 py-5 rounded-xl text-lg transition-all hover:scale-105 animate-pulse-glow"
        >
          <MessageCircle className="w-5 h-5" />
          FALAR NO WHATSAPP AGORA
        </a>

        <p className="mt-6 text-muted-foreground text-sm">
          Atendimento humano · Resposta rápida · Sem bot
        </p>
      </div>
    </section>
  );
};

export default CTASection;