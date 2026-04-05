import logo from "@/assets/logo-adscale.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#", label: "Início" },
  { href: "#solucao", label: "Solução" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-3" : "py-5"
      }`}
    >
      <div className="container max-w-6xl flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="AD Scale" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-primary text-primary-foreground font-bold px-6 py-2.5 rounded-full text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_hsl(125_100%_45%/0.4)]"
          >
            Falar no WhatsApp
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 mt-2 mx-4 rounded-2xl p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-foreground text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gradient-primary text-primary-foreground font-bold px-6 py-3 rounded-full text-sm w-full"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;