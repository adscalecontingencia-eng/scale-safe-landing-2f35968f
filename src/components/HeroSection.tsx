import { ArrowRight } from "lucide-react";
import DotGlobe from "./DotGlobe";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen md:min-h-screen flex items-center overflow-hidden w-full">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(125_100%_45%/0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(125_100%_45%/0.03),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-28 pb-16">
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <div className="badge-pill mb-6 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Especialistas em Contingência Meta Ads
            </div>

            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              O JOGO DO TRÁFEGO PAGO MUDOU
            </p>

            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              A INFRAESTRUTURA{" "}
              <span className="text-gradient">DECIDE QUEM ESCALA.</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              Se você roda nutra ou infoprodutos no Meta e não tem uma contingência profissional, é questão de tempo para a sua estrutura ficar estagnada.
            </p>

            <div className="flex flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <a
                href="https://wa.me/message/LT3GZH6T7PTYB1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 animate-pulse-glow"
              >
                COMEÇAR AGORA
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border border-border/50 bg-card/60 px-8 py-4 rounded-xl text-lg font-medium text-foreground transition-all hover:border-primary/50"
              >
                <span className="w-0 h-0 border-l-[8px] border-l-primary border-y-[5px] border-y-transparent" />
                Ver Como Funciona
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 md:gap-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-bold">+$5M</span>
                <span className="text-muted-foreground text-sm">Dolares investidos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-bold">99.8%</span>
                <span className="text-muted-foreground text-sm">Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-bold">500+</span>
                <span className="text-muted-foreground text-sm">Contas ativas</span>
              </div>
            </div>
          </div>

          {/* Right — Animated Globe */}
          <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <DotGlobe size={480} />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col items-center md:hidden">
          {/* Globe on top - mobile */}
          <div className="w-full flex justify-center mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <DotGlobe size={200} />
          </div>

          <div className="w-full text-center">
            <div className="badge-pill mb-4 animate-fade-in-up mx-auto" style={{ animationDelay: "0.15s" }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Contingência Meta Ads
            </div>

            <p className="text-muted-foreground uppercase tracking-widest text-xs mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              O JOGO DO TRÁFEGO PAGO MUDOU
            </p>

            <h1 className="font-display text-3xl font-bold leading-[1.1] mb-4 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              A INFRAESTRUTURA{" "}
              <span className="text-gradient">DECIDE QUEM ESCALA.</span>
            </h1>

            <p className="text-muted-foreground text-base mb-6 leading-relaxed animate-fade-in-up px-2" style={{ animationDelay: "0.3s" }}>
              Se você roda nutra ou infoprodutos no Meta e não tem uma contingência profissional, é questão de tempo para a sua estrutura ficar estagnada.
            </p>

            <div className="flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <a
                href="https://wa.me/message/LT3GZH6T7PTYB1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-6 py-3.5 rounded-xl text-base transition-all hover:scale-105 animate-pulse-glow"
              >
                COMEÇAR AGORA
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 border border-border/50 bg-card/60 px-6 py-3.5 rounded-xl text-base font-medium text-foreground transition-all hover:border-primary/50"
              >
                <span className="w-0 h-0 border-l-[8px] border-l-primary border-y-[5px] border-y-transparent" />
                Ver Como Funciona
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground font-bold text-sm">+$5M</span>
                <span className="text-muted-foreground text-xs">Dolares investidos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground font-bold text-sm">99.8%</span>
                <span className="text-muted-foreground text-xs">Uptime</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-foreground font-bold text-sm">500+</span>
                <span className="text-muted-foreground text-xs">Contas ativas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
