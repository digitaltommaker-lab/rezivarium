import { Cpu, Hammer, Box, Ruler, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: Cpu,
      title: 'CNC Rezanie',
      description: 'Presné CNC rezanie dreva s toleranciou ±0.1mm. Realizujeme zložité tvary, gravírovanie a 3D frézovania podľa vašich návrhov.',
      features: ['2D a 3D frézovania', 'Gravírovanie', 'Sériová výroba', 'Prototypy']
    },
    {
      icon: Hammer,
      title: 'Stolárske Práce',
      description: 'Komplexné stolárske služby od návrhu po realizáciu. Vyrábame nábytok na mieru, interiérové prvky a drevené konštrukcie.',
      features: ['Nábytok na mieru', 'Interiérové obklady', 'Dvere a zárubne', 'Renovácie']
    },
    {
      icon: Box,
      title: 'Výroba Drevených Dielov',
      description: 'Výroba presných drevených komponentov pre rôzne odvetvia. Od malých dielov po veľké konštrukčné prvky.',
      features: ['Konštrukčné diely', 'Dekoračné prvky', 'Náhradné diely', 'Špeciálne tvary']
    },
    {
      icon: Ruler,
      title: 'Presné Formátovanie',
      description: 'Profesionálne formátovanie dosiek a reziva s vysokou presnosťou. Optimalizujeme materiál pre minimálny odpad.',
      features: ['Formátovanie dosiek', 'Delenie reziva', 'Hranovanie', 'Optimalizácia']
    },
    {
      icon: MessageSquare,
      title: 'Konzultácie a Návrhy',
      description: 'Odborné poradenstvo pri výbere materiálov a technológií. Pomôžeme vám nájsť optimálne riešenie pre váš projekt.',
      features: ['Technické poradenstvo', '3D vizualizácie', 'Výber materiálov', 'Cenové kalkulácie']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Čo ponúkame
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            NAŠE SLUŽBY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Komplexné riešenia pre všetky vaše potreby v oblasti spracovania dreva a CNC technológií
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border relative overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="text-white" size={36} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button 
                  onClick={scrollToContact}
                  className="font-body text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Zistiť viac
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-12 text-center shadow-2xl animate-fade-in">
          <h3 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Máte projekt na mieru?
          </h3>
          <p className="font-body text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktujte nás a spoločne nájdeme optimálne riešenie pre vaše potreby
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="font-body bg-white text-foreground hover:bg-white/90 border-0 shadow-xl px-8 py-6 rounded-full"
            onClick={scrollToContact}
          >
            Napíšte nám
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
