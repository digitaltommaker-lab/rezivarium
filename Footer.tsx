import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-4xl font-heading text-primary">R</div>
              <div>
                <div className="font-heading text-xl text-background">REZIVARIUM</div>
                <div className="text-xs text-background/70 font-body uppercase tracking-widest">
                  CNC & Stolárstvo
                </div>
              </div>
            </div>
            <p className="font-body text-background/80 leading-relaxed mb-6">
              Profesionálne CNC rezanie a stolárske práce s precíznosťou na mieru vašich potrieb.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-background mb-4">Rýchle odkazy</h4>
            <ul className="space-y-2 font-body">
              {[
                { label: 'Domov', href: '#home' },
                { label: 'O nás', href: '#about' },
                { label: 'Služby', href: '#services' },
                { label: 'Referencie', href: '#references' },
                { label: 'Technológie', href: '#technologies' },
                { label: 'Proces', href: '#process' },
                { label: 'Kontakt', href: '#contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg text-background mb-4">Služby</h4>
            <ul className="space-y-2 font-body text-background/70">
              <li>CNC Rezanie</li>
              <li>Stolárske práce</li>
              <li>Výroba drevených dielov</li>
              <li>Presné formátovanie</li>
              <li>Konzultácie a návrhy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-background mb-4">Kontakt</h4>
            <ul className="space-y-3 font-body">
              <li>
                <a 
                  href="tel:+421900000000"
                  className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors group"
                >
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <span>+421 900 000 000</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@rezivarium.sk"
                  className="flex items-start gap-3 text-background/70 hover:text-primary transition-colors group"
                >
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <span>info@rezivarium.sk</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Priemyselná 123<br />010 01 Žilina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-background/70 text-sm text-center md:text-left">
              © {currentYear} REZIVARIUM.SK. Všetky práva vyhradené.
            </p>
            <div className="flex gap-6 font-body text-sm">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Ochrana údajov
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                Obchodné podmienky
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
