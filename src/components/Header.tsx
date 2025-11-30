import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Anchor } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre o Passeio" },
    { to: "/servicos", label: "Serviços Extras" },
    { to: "/faq", label: "FAQ" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
            <Anchor className="w-8 h-8" />
            <span className="hidden sm:inline">Parrachos de Maracajaú</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="bg-gradient-ocean text-white border-0">
              <a
                href="https://wa.me/5584999999999?text=Olá! Gostaria de fazer uma reserva para o passeio aos Parrachos de Maracajaú"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Agora
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-border">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-colors py-2"
                activeClassName="text-primary font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="bg-gradient-ocean text-white border-0 w-full">
              <a
                href="https://wa.me/5584999999999?text=Olá! Gostaria de fazer uma reserva para o passeio aos Parrachos de Maracajaú"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar Agora
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
