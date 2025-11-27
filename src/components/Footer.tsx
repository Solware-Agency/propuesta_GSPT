const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-base py-3 glass-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm text-foreground/60">
          © {currentYear} BioSupplies. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
