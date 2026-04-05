import { HeadphonesIcon, ShieldCheck, RefreshCw, Zap, Globe, Lock } from "lucide-react";

const benefits = [
  {
    icon: HeadphonesIcon,
    title: "Suporte Humano Real",
    description: "Equipe especializada no WhatsApp para resolver problemas e garantir a continuidade das suas campanhas.",
  },
  {
    icon: ShieldCheck,
    title: "Contingência 100% Gerenciada",
    description: "Perfis, BMs e contas de anúncio gerenciados pelo nosso time. Você só precisa subir criativo e escalar.",
  },
  {
    icon: RefreshCw,
    title: "Reposição em Minutos",
    description: "Conta caiu? Outra já está pronta. Enquanto outros levam dias, na AD Scale é questão de minutos.",
  },
  {
    icon: Zap,
    title: "Ativação Rápida",
    description: "Contas aquecidas e prontas pra volume. Nada de conta virgem que toma block no primeiro real gasto.",
  },
  {
    icon: Globe,
    title: "Estrutura Sem Limite",
    description: "5, 10, 50 contas — não importa. Fornecemos quantas sua operação precisar. A estrutura cresce com você.",
  },
  {
    icon: Lock,
    title: "Modelo Transparente",
    description: "Taxa de setup + porcentagem do gasto. Sem mensalidade escondida, sem multa, sem contrato abusivo.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding">
      <div className="container max-w-6xl">
        {/* Badge + Headline */}
        <div className="text-center mb-16">
          <div className="badge-pill mx-auto mb-8">
            BENEFÍCIOS
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            O que você ganha com a{" "}
            <span className="text-gradient">blindagem operacional</span> 🛡️
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não somos mais um fornecedor de conta. Somos sua contingência profissional, 
            deixe sua estrutura nas mãos de quem entende.
          </p>
        </div>

        {/* 3x2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="section-card group">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {b.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;