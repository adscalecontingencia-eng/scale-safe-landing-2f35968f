import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Pra quem é a AD Scale?",
    answer: "Pra produtores, afiliados e infoprodutores que já têm operação validada rodando nutra e infoprodutos no Meta Ads. Se você já gasta R$50k+ por mês em anúncios e precisa de estrutura pra escalar, a AD Scale é pra você.",
  },
  {
    question: "Qual o modelo de pagamento?",
    answer: "Cobramos uma taxa de setup para montar toda a sua estrutura (contas, perfis, BMs) + uma porcentagem do valor gasto dentro das contas de anúncio. Sem mensalidade fixa escondida, sem surpresas.",
  },
  {
    question: "O que acontece quando minha conta cai?",
    answer: "Repomos em minutos. Perfis, BMs e contas de anúncio são repostos imediatamente pela nossa equipe. Sua operação não para — esse é o nosso trabalho.",
  },
  {
    question: "Tem limite de contas?",
    answer: "Não. Fornecemos quantas contas, perfis e BMs sua operação precisar. Se você precisa de 5 ou 50, nós entregamos. A estrutura cresce junto com a sua operação.",
  },
  {
    question: "Eu preciso me preocupar com contingência?",
    answer: "Zero. Esse é o nosso maior diferencial. Toda a gestão de contingência — criação de perfis, aquecimento de contas, gestão de BMs — é responsabilidade do nosso time. Você só precisa subir criativo e escalar.",
  },
  {
    question: "Como começo?",
    answer: "Manda uma mensagem no WhatsApp. Nosso time entende sua operação em minutos e já monta o plano ideal. Em poucas horas você pode estar com a estrutura rodando.",
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