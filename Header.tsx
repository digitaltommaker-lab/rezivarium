import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Domov', href: '#home' },
    { label: 'O nás', href: '#about' },
    { label: 'Služby', href: '#services' },
    { label: 'Referencie', href: '#references' },
    { label: 'Technológie', href: '#technologies' },
    { label: 'Proces', href: '#process' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 md:px-8 lg:px-16">
      {/* Logo Container - R and EZIVARIUM side by side */}
      <div 
        className="absolute left-4 md:left-8 lg:left-16 top-1/2 z-50 flex items-center"
        style={{
          height: '180px',
          transform: 'translateY(-50%)',
          gap: '0',
        }}
      >
        {/* R Logo */}
        <div 
          style={{
            width: '220px',
            height: '220px',
          }}
        >
          <img 
            src="/logo-r.svg" 
            alt="REZIVARIUM R" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
            }}
          />
        </div>

        {/* EZIVARIUM Text Logo */}
        <div 
          style={{
            height: '160px',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '-80px',
            paddingRight: '10px',
            marginTop: '34px',
          }}
        >
          <img 
            src="/logo-text.svg" 
            alt="EZIVARIUM.SK" 
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))',
            }}
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav 
        className="rounded-3xl shadow-lg transition-all duration-300"
        style={{
          background: '#F7EEDB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '15px 30px 15px 520px',
          borderRadius: '28px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
          minHeight: '70px',
        }}
      >
        {/* Desktop Navigation - centered */}
        <div 
          className="hidden lg:flex items-center flex-1 justify-center"
          style={{
            gap: '40px',
            fontSize: '18px',
            fontWeight: 500,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="px-4 py-2 text-sm font-body font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Button 
          className="hidden md:block font-body ml-auto"
          style={{
            background: '#DAA55A',
            color: '#fff',
            borderRadius: '40px',
            padding: '8px 32px',
            fontWeight: 600,
          }}
          onClick={() => scrollToSection('#contact')}
        >
          Kontaktujte nás
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden border-t border-border px-6 py-4 animate-fade-in"
          style={{ 
            background: '#F7EEDB', 
            marginTop: '10px', 
            borderRadius: '0 0 28px 28px',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
          }}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-3 text-base font-body font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="mt-2 w-full font-body"
              style={{
                background: '#DAA55A',
                color: '#fff',
                borderRadius: '40px',
                padding: '8px 32px',
                fontWeight: 600,
              }}
              onClick={() => scrollToSection('#contact')}
            >
              Kontaktujte nás
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
