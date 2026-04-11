import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o aluguel de contas de anúncio Meta Ads?",
    answer: "Você entra em contato pelo WhatsApp, nosso time entende sua operação e monta a estrutura ideal. Fornecemos BMs de agência verificada, contas de anúncio aquecidas e prontas para escalar. Toda a contingência é gerenciada por nós — você só precisa subir criativo e escalar.",
  },
  {
    question: "O que é BM de agência verificada e por que é importante?",
    answer: "BM de agência verificada é um Business Manager que passou pelo processo oficial de verificação do Meta. Isso garante limites de gastos mais altos desde o início, menor risco de bloqueios e melhor performance dos anúncios. É o padrão utilizado pelas maiores agências de tráfego do mundo.",
  },
  {
    question: "Funciona para quem roda nutra e infoprodutos no Meta Ads?",
    answer: "Sim. Nossa estrutura de contingência é especialmente preparada para operações de nutra e infoprodutos no Facebook Ads e Instagram Ads. Mantemos contas blindadas e reposição imediata para que sua campanha nunca pare de rodar.",
  },
  {
    question: "Qual o limite diário de gastos das contas de anúncio?",
    answer: "As contas fornecidas pela AD Scale possuem limite diário de gastos elevado desde o início, com aumento rápido conforme o histórico de investimento. Isso permite escalar campanhas rapidamente sem as restrições típicas de contas pessoais.",
  },
  {
    question: "O que acontece quando uma conta de anúncio é bloqueada?",
    answer: "Repomos em minutos. Perfis, BMs e contas de anúncio são repostos imediatamente pela nossa equipe de contingência. Sua operação não para — esse é o nosso trabalho. Mantemos 99.8% de uptime.",
  },
  {
    question: "Tem limite de contas de anúncio que posso alugar?",
    answer: "Não. Fornecemos quantas contas, perfis e BMs sua operação precisar. Se você precisa de 5 ou 50 contas de anúncio, nós entregamos. A estrutura cresce junto com a sua operação no Meta Ads.",
  },
  {
    question: "Qual o modelo de pagamento do aluguel de contas?",
    answer: "Cobramos uma taxa de setup para montar toda a sua estrutura de contingência (contas, perfis, BMs) + uma pequena porcentagem do valor gasto dentro das contas de anúncio. Sem mensalidade fixa, sem surpresas.",
  },
  {
    question: "É seguro alugar conta de anúncio no Facebook Ads?",
    answer: "Sim. Nossas contas são de agência verificada pelo Meta, com contingência profissional e suporte dedicado. Temos mais de $5M investidos através das nossas contas e mais de 500 contas ativas simultaneamente.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg hover:no-underline hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;