import { Cpu, Gauge, Package, Settings } from 'lucide-react';

export default function Technologies() {
  const technologies = [
    {
      icon: Cpu,
      title: 'CNC Stroje',
      items: [
        '3-osové CNC frézy s pracovnou plochou až 3000×2000 mm',
        '5-osové CNC stroje pre komplexné 3D obrábanie',
        'Automatická výmena nástrojov (ATC) pre nepretržitú výrobu',
        'Presné polohovacie systémy s opakovateľnosťou ±0.05mm'
      ]
    },
    {
      icon: Gauge,
      title: 'Presnosť a Kontrola',
      items: [
        'Tolerancia rezania ±0.1mm pri štandardných operáciách',
        'Digitálne meracie systémy pre kontrolu kvality',
        'CAD/CAM softvér pre optimalizáciu výroby',
        'Simulácie obrábania pred spustením výroby'
      ]
    },
    {
      icon: Package,
      title: 'Materiály',
      items: [
        'Masívne drevo: dub, buk, orech, smrek, céder',
        'Drevotrieskové dosky: MDF, DTD, preglejka',
        'Kompozitné materiály a laminované dosky',
        'Špeciálne materiály podľa požiadaviek projektu'
      ]
    },
    {
      icon: Settings,
      title: 'Pracovné Procesy',
      items: [
        'Konzultácia a analýza požiadaviek projektu',
        '3D modelovanie a vizualizácia pred výrobou',
        'Optimalizácia materiálu pre minimálny odpad',
        'Finálna kontrola kvality a balenie výrobkov'
      ]
    }
  ];

  return (
    <section id="technologies" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Naše vybavenie
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            TECHNOLÓGIE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Využívame najmodernejšie technológie a stroje pre dosiahnutie maximálnej presnosti a kvality
          </p>
        </div>

        {/* Main Image with Stats */}
        <div className="relative mb-20 animate-scale-in">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/cnc-machine.jpg" 
              alt="CNC technológie REZIVARIUM" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Floating Stats */}
            <div className="absolute bottom-8 left-0 right-0 px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-heading text-primary mb-2">±0.1mm</div>
                  <div className="text-white font-body text-sm">Presnosť rezania</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-heading text-primary mb-2">5-osové</div>
                  <div className="text-white font-body text-sm">CNC stroje</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-heading text-primary mb-2">3000mm</div>
                  <div className="text-white font-body text-sm">Max. pracovná plocha</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl font-heading text-primary mb-2">24/7</div>
                  <div className="text-white font-body text-sm">Výrobná kapacita</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <tech.icon className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl text-foreground">
                  {tech.title}
                </h3>
              </div>

              {/* Items List */}
              <ul className="space-y-3">
                {tech.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-body text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/10">
          <h3 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">
            Ako pracujeme s <span className="text-primary">technológiami</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-card rounded-2xl p-6 shadow-lg text-center h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-xl">
                  1
                </div>
                <h4 className="font-body font-bold text-foreground mb-2">CAD Návrh</h4>
                <p className="font-body text-sm text-muted-foreground">
                  Vytvorenie presného 3D modelu vo špecializovanom softvéri
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-6 shadow-lg text-center h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-xl">
                  2
                </div>
                <h4 className="font-body font-bold text-foreground mb-2">CAM Programovanie</h4>
                <p className="font-body text-sm text-muted-foreground">
                  Generovanie CNC kódu a simulácia obrábania
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-6 shadow-lg text-center h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-xl">
                  3
                </div>
                <h4 className="font-body font-bold text-foreground mb-2">CNC Výroba</h4>
                <p className="font-body text-sm text-muted-foreground">
                  Presné obrábanie na CNC strojoch s kontrolou kvality
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl p-6 shadow-lg text-center h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading text-xl">
                  4
                </div>
                <h4 className="font-body font-bold text-foreground mb-2">Finalizácia</h4>
                <p className="font-body text-sm text-muted-foreground">
                  Povrchová úprava, kontrola a balenie výrobku
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
