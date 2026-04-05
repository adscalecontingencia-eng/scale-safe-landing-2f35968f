import { ShieldCheck, Zap, HeadphonesIcon, RefreshCw, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Contingência Blindada" },
  { icon: Zap, label: "Ativação Imediata" },
  { icon: HeadphonesIcon, label: "Suporte Especializado" },
  { icon: RefreshCw, label: "Reposição em Minutos" },
  { icon: Clock, label: "Operação 24/7" },
];

const TrustBar = () => {
  return (
    <section className="border-y border-border/50 bg-card/30 py-5 overflow-hidden">
      <div className="container max-w-6xl px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
              <item.icon className="w-4 h-4 text-primary" />
              <span>{item.label}</span>
              {i < items.length - 1 && (
                <span className="hidden md:inline ml-6 w-px h-4 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;