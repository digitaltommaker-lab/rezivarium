import { Search, Lightbulb, Cog, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Zameranie a Konzultácia',
      description: 'Stretnutie s klientom, analýza požiadaviek, zameranie priestoru alebo objektu. Spoločne definujeme ciele projektu a technické špecifikácie.',
      details: [
        'Osobná konzultácia',
        'Technické zameranie',
        'Analýza požiadaviek',
        'Výber materiálov'
      ],
      duration: '1-3 dni'
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Návrh a Kalkulácia',
      description: 'Vytvorenie 3D vizualizácie, technickej dokumentácie a presnej cenovej kalkulácie. Prezentácia návrhu a prípadné úpravy podľa pripomienok.',
      details: [
        '3D vizualizácia',
        'Technické výkresy',
        'Cenová kalkulácia',
        'Schválenie návrhu'
      ],
      duration: '3-7 dní'
    },
    {
      number: '03',
      icon: Cog,
      title: 'Realizácia a Výroba',
      description: 'CNC obrábanie, stolárske práce a povrchové úpravy. Priebežná kontrola kvality a komunikácia o postupe prác.',
      details: [
        'CNC obrábanie',
        'Stolárske práce',
        'Povrchové úpravy',
        'Kontrola kvality'
      ],
      duration: '1-4 týždne'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Odovzdanie a Montáž',
      description: 'Finálna kontrola, balenie, doprava a prípadná montáž na mieste. Odovzdanie dokumentácie a záručných podmienok.',
      details: [
        'Finálna kontrola',
        'Profesionálne balenie',
        'Doprava na miesto',
        'Montáž a odovzdanie'
      ],
      duration: '1-3 dni'
    }
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Ako to funguje
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            NÁŠ PROCES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Od prvého kontaktu po odovzdanie hotového projektu - transparentný a efektívny proces v štyroch krokoch
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Content Card */}
              <div className="flex-1 bg-card rounded-3xl p-8 shadow-xl border border-border hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-6xl font-heading text-primary/20">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-body font-semibold mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.duration}
                    </div>
                  </div>
                </div>

                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <CheckCircle className="text-primary flex-shrink-0" size={16} />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              {/* Icon Circle */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
                    <step.icon className="text-white" size={56} />
                  </div>
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-primary to-transparent"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 text-center border border-primary/20">
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Začnime váš projekt
          </h3>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontaktujte nás ešte dnes a získajte nezáväznú cenovú ponuku do 24 hodín
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-body font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Nezáväzná ponuka
            </a>
            <a 
              href="tel:+421900000000"
              className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-body font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-border"
            >
              +421 900 000 000
            </a>
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mt-20">
          <h3 className="font-heading text-2xl md:text-3xl text-center text-foreground mb-12">
            Priemerná doba realizácie: <span className="text-primary">2-6 týždňov</span>
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Bar */}
            <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
            
            {/* Milestones */}
            <div className="grid grid-cols-4 mt-4">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-2 -mt-7"></div>
                  <div className="font-body text-xs text-muted-foreground">
                    Krok {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
