import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import logo from '@/assets/logo-miellerie.png';

const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Nos Miels', href: '#miels' },
    { label: 'Points de Vente', href: '#points-de-vente' },
    { label: 'Blog', href: '#blog' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center group"
            >
              <img
                src={logo}
                alt="Miellerie du Montaiguet"
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'
                }`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-foreground hover:text-secondary hover:bg-secondary/10'
                      : 'text-foreground/90 hover:text-secondary hover:bg-background/20'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => scrollToSection('#points-de-vente')}
                className={`rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                    : 'bg-secondary/90 text-secondary-foreground hover:bg-secondary'
                }`}
              >
                <Phone className="h-4 w-4 mr-2" />
                Nous contacter
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:bg-muted' 
                  : 'text-foreground hover:bg-background/20'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
        }`}>
          {/* Logo in mobile menu */}
          <img
            src={logo}
            alt="Miellerie du Montaiguet"
            className="h-24 mb-4"
          />
          
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-medium text-foreground hover:text-secondary transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </button>
          ))}
          
          <Button
            onClick={() => scrollToSection('#points-de-vente')}
            size="lg"
            className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8"
          >
            <Phone className="h-5 w-5 mr-2" />
            Nous contacter
          </Button>
        </div>
      </div>
    </>
  );
};

export default SiteHeader;
