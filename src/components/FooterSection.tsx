import logo from "@/assets/logo-adscale.png";

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
          {/* Brand */}
          <div>
            <img src={logo} alt="AD Scale" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Infraestrutura de contingência para anunciantes profissionais que querem escalar no Meta Ads sem parar.
            </p>
          </div>

          {/* Nav */}
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

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <a
                href="https://wa.me/5500000000000"
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