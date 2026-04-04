import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-4xl relative z-10">
        <div className="glass rounded-2xl p-10 md:p-16 text-center glow-box">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Pronto para escalar{" "}
            <span className="text-gradient">sem limites</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Fale com nosso time e descubra como a AD Scale pode transformar sua operação de ads.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass px-8 py-4 rounded-lg text-lg font-medium text-foreground transition-all hover:border-primary/50"
            >
              Agendar uma reunião
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
