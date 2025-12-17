import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Správa bola úspešne odoslaná!', {
      description: 'Ozveme sa vám do 24 hodín.'
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefón',
      content: '+421 900 000 000',
      link: 'tel:+421900000000'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@rezivarium.sk',
      link: 'mailto:info@rezivarium.sk'
    },
    {
      icon: MapPin,
      title: 'Adresa',
      content: 'Priemyselná 123, 010 01 Žilina',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Otváracie hodiny',
      content: 'Po-Pia: 7:00 - 16:00',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Ozvite sa nám
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            KONTAKT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Máte otázky alebo záujem o spoluprácu? Radi vám poradíme a pripravíme nezáväznú cenovú ponuku
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
              <h3 className="font-heading text-2xl text-foreground mb-6">
                Kontaktný formulár
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-foreground mb-2">
                    Meno a priezvisko *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaše meno"
                    className="font-body"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vas@email.sk"
                    className="font-body"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body font-medium text-foreground mb-2">
                    Telefón
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+421 900 000 000"
                    className="font-body"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                    Správa *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Popíšte váš projekt alebo požiadavky..."
                    rows={6}
                    className="font-body resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full font-body"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Odeseielam...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Odoslať správu
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground font-body text-center">
                  Odoslaním formulára súhlasíte so spracovaním osobných údajov
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-body font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-body text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="font-body text-muted-foreground">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* QR Business Card */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-center shadow-xl">
              <h4 className="font-heading text-2xl text-white mb-4">
                QR Vizitka
              </h4>
              <div className="bg-white rounded-2xl p-6 inline-block mb-4">
                {/* QR Code Placeholder */}
                <div className="w-48 h-48 bg-foreground/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 border-4 border-foreground/20 rounded-lg mb-2"></div>
                    <p className="text-xs text-muted-foreground font-body">QR kód</p>
                  </div>
                </div>
              </div>
              <p className="text-white/90 font-body text-sm">
                Naskenujte QR kód pre rýchle uloženie kontaktu
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="animate-fade-in">
          <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border">
            <div className="aspect-video bg-muted relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-4" size={48} />
                  <p className="font-body text-foreground font-semibold mb-2">
                    Priemyselná 123, 010 01 Žilina
                  </p>
                  <a 
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline"
                  >
                    Otvoriť v Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <CheckCircle className="text-primary mx-auto mb-3" size={32} />
            <p className="font-body text-sm text-foreground font-semibold">Odpoveď do 24h</p>
          </div>
          <div className="text-center">
            <CheckCircle className="text-primary mx-auto mb-3" size={32} />
            <p className="font-body text-sm text-foreground font-semibold">Nezáväzná ponuka</p>
          </div>
          <div className="text-center">
            <CheckCircle className="text-primary mx-auto mb-3" size={32} />
            <p className="font-body text-sm text-foreground font-semibold">Osobná konzultácia</p>
          </div>
          <div className="text-center">
            <CheckCircle className="text-primary mx-auto mb-3" size={32} />
            <p className="font-body text-sm text-foreground font-semibold">Profesionálny prístup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
