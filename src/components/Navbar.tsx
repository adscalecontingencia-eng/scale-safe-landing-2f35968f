import logo from "@/assets/logo-adscale.png";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="container max-w-6xl flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="AD Scale" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Como funciona
          </a>
          <a href="#diferenciais" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Diferenciais
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            FAQ
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-5 py-2.5 rounded-lg text-sm transition-all hover:scale-105"
          >
            QUERO ESCALAR
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-6 space-y-4">
          <a href="#como-funciona" onClick={() => setMobileOpen(false)} className="block text-foreground">
            Como funciona
          </a>
          <a href="#diferenciais" onClick={() => setMobileOpen(false)} className="block text-foreground">
            Diferenciais
          </a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-foreground">
            FAQ
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-5 py-2.5 rounded-lg text-sm w-full justify-center"
          >
            QUERO ESCALAR
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
