import Logo from "./Logo";

const navLinks = [
  { href: "#", label: "Início" },
  { href: "#solucao", label: "Solução" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Infraestrutura de contingência para anunciantes profissionais que querem escalar no Meta Ads sem parar.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Navegação</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <a
                href="https://wa.me/message/LT3GZH6T7PTYB1?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20conting%C3%AAncia%20da%20AD%20Scale."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                📱 WhatsApp
              </a>
              <a
                href="https://instagram.com/adscale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                📸 @adscale
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AD Scale — Contingency Accounts. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;