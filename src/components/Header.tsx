const Header = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Solware, I'm interested in your services"
    );
    window.open(`https://wa.me/584129974533?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-header glass-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Title */}
          <a
            href="https://solware.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg font-semibold text-foreground focus-ring rounded-lg transition-opacity hover:opacity-80"
            aria-label="Visit Solware website"
          >
            Solware
          </a>

          {/* Contact Button */}
          <button
            onClick={handleWhatsAppClick}
            className="neuo-pressable px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-primary focus-ring"
            aria-label="Open WhatsApp chat"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
