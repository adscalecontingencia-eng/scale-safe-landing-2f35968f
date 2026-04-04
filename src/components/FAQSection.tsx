import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Para quem é a AD Scale?",
    answer: "A AD Scale é para players que já possuem operações validadas em nutraceuticos e infoprodutos no Meta Ads e precisam escalar com segurança. Ideal para quem já gasta R$50k+ por mês em anúncios.",
  },
  {
    question: "Como funciona o modelo de pagamento?",
    answer: "Você paga uma porcentagem do valor gasto dentro da conta de anúncio. Não existe mensalidade fixa, taxa de setup ou custos ocultos. Quanto mais você investe, mais vantajoso fica.",
  },
  {
    question: "O que acontece se minha conta cair?",
    answer: "Nós repomos imediatamente. Perfis, BMs e contas de anúncio são repostos em minutos, não dias. Sua operação não para.",
  },
  {
    question: "Quantas contas eu posso ter?",
    answer: "Não há limite. Fornecemos quantas contas, perfis e BMs sua operação precisar. A estrutura cresce junto com você.",
  },
  {
    question: "Preciso me preocupar com contingência?",
    answer: "Não. Esse é justamente nosso diferencial. Toda a gestão de contingência — criação de perfis, aquecimento de contas, gestão de BMs — é responsabilidade nossa.",
  },
  {
    question: "Como começo a usar a AD Scale?",
    answer: "Basta entrar em contato pelo nosso WhatsApp. Nosso time vai entender sua operação e montar toda a estrutura necessária para você começar a rodar rapidamente.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-xl px-6 border-border/50 data-[state=open]:border-primary/30 transition-colors"
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
