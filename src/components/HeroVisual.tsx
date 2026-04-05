import { Shield, RefreshCw, Wifi, Lock, Zap, Users } from "lucide-react";

const HeroVisual = () => {
  return (
    <div className="relative w-[460px] h-[460px]">
      {/* Slow spinning outer ring */}
      <div className="absolute inset-0 rounded-full border border-primary/15 animate-[spin_30s_linear_infinite]">
        {/* Nodes on the ring */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/30 border border-primary/50" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/20 border border-primary/40" />
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/25 border border-primary/40" />
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/30 border border-primary/50" />
      </div>

      {/* Second ring — counter-spin */}
      <div className="absolute inset-10 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite_reverse]">
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/20" />
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/25" />
        <div className="absolute -bottom-1.5 left-1/3 w-2.5 h-2.5 rounded-full bg-primary/15" />
      </div>

      {/* Third ring */}
      <div className="absolute inset-20 rounded-full border border-border/50" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 rounded-full bg-primary/8 blur-3xl animate-pulse" />
      </div>

      {/* Center shield */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 rounded-2xl bg-gradient-primary flex items-center justify-center glow-box animate-float">
          <Shield className="w-14 h-14 text-primary-foreground" strokeWidth={1.5} />
        </div>
      </div>

      {/* Floating satellite cards */}
      <div className="absolute top-6 right-6 glass rounded-xl px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <RefreshCw className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground">Reposição</p>
          <p className="text-xs font-bold text-foreground">Em minutos</p>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 glass rounded-xl px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <Wifi className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground">Uptime</p>
          <p className="text-xs font-bold text-foreground">99.8%</p>
        </div>
      </div>

      <div className="absolute top-1/3 -left-4 glass rounded-xl px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <Users className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground">Contas</p>
          <p className="text-xs font-bold text-foreground">500+</p>
        </div>
      </div>

      <div className="absolute bottom-6 right-10 glass rounded-xl px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <Lock className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground">Blindagem</p>
          <p className="text-xs font-bold text-primary font-semibold">Ativa</p>
        </div>
      </div>

      <div className="absolute top-8 left-16 glass rounded-xl px-3 py-2 flex items-center gap-2 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <Zap className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground">Ativação</p>
          <p className="text-xs font-bold text-foreground">Imediata</p>
        </div>
      </div>

      {/* Pulsing connection lines (decorative) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 460">
        <line x1="230" y1="170" x2="340" y2="60" stroke="hsl(125 100% 45% / 0.15)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="230" y1="290" x2="100" y2="370" stroke="hsl(125 100% 45% / 0.15)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="170" y1="230" x2="60" y2="180" stroke="hsl(125 100% 45% / 0.1)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="290" y1="230" x2="380" y2="380" stroke="hsl(125 100% 45% / 0.1)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="200" y1="180" x2="140" y2="70" stroke="hsl(125 100% 45% / 0.1)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};

export default HeroVisual;