const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl font-bold">
          <span className="text-gradient">AD</span>{" "}
          <span className="text-foreground">SCALE</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} AD Scale. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
