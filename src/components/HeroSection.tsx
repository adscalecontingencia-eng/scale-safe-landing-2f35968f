import { ArrowRight } from "lucide-react";
import heroGlobe from "@/assets/hero-globe.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(125_100%_45%/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(125_100%_45%/0.05),transparent_60%)]" />

      <div className="relative z-10 container max-w-6xl px-4 pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <div className="badge-pill mb-6 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Especialistas em Contingência Meta Ads
            </div>

            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              O jogo da mídia paga mudou
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              A INFRAESTRUTURA{" "}
              <span className="text-gradient">DECIDE QUEM ESCALA.</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              Enquanto seu concorrente tá parado criando BM do zero e aquecendo, você tá escalando com contas ilimitadas, contingência blindada e reposição em minutos. Chega de perder dinheiro com estrutura frágil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              <a
                href="https://wa.me/5500000000000"
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
                <span className="text-foreground font-bold">R$50M+</span>
                <span className="text-muted-foreground text-sm">Rodados</span>
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

          {/* Right — Globe image */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <img
                src={heroGlobe}
                alt="Globo de contingência Meta Ads"
                width={1024}
                height={1024}
                className="w-[500px] h-[500px] object-contain animate-float"
              />
              {/* Glow behind */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 scale-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;