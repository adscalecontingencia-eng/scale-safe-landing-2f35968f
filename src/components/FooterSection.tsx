import logo from "@/assets/logo-adscale.png";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="AD Scale" className="h-10 w-auto" />
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} AD Scale — Contingency Accounts. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
