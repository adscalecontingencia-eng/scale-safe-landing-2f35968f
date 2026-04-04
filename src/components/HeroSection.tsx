import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Background tecnológico"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-5xl text-center px-4 pt-28 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            Infraestrutura de contingência para operações de escala
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Escale seus anúncios{" "}
          <span className="text-gradient">sem medo</span>
          <br />
          de perder estrutura
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Alugue contas de anúncios com contingência completa. Perfis, BMs e contas ilimitadas — 
          enquanto você foca em escalar, nós cuidamos de toda a estrutura.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 animate-pulse-glow"
          >
            Quero escalar agora
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-lg text-lg font-medium text-foreground transition-all hover:border-primary/50"
          >
            Como funciona
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-foreground">R$50M+</div>
            <div className="text-sm">investidos em ads pelos nossos clientes</div>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-foreground">500+</div>
            <div className="text-sm">contas ativas</div>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-foreground">99.8%</div>
            <div className="text-sm">uptime de estrutura</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
