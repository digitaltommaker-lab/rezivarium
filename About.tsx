import { Award, Target, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Presnosť',
      description: 'CNC technológia s toleranciou ±0.1mm zabezpečuje dokonalé výsledky pri každom projekte.'
    },
    {
      icon: Award,
      title: 'Kvalita',
      description: 'Používame len prémiové materiály a overené postupy pre dlhodobú spokojnosť zákazníkov.'
    },
    {
      icon: Heart,
      title: 'Remeselná precíznosť',
      description: 'Kombinujeme moderné technológie s tradičným stolárskym remeslom a láskou k detailom.'
    },
    {
      icon: TrendingUp,
      title: 'Inovácia',
      description: 'Neustále investujeme do nových technológií a vzdelávania pre lepšie riešenia.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Kto sme
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            O NÁS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Váš partner pre presné<br />
              <span className="text-primary">drevovýrobné riešenia</span>
            </h3>
            
            <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">REZIVARIUM.SK</strong> je moderná firma špecializujúca sa na CNC rezanie, 
                stolárske práce a presnú výrobu drevených dielov. S viac ako 15-ročnými skúsenosťami 
                v odbore prinášame našim klientom profesionálne riešenia na mieru.
              </p>
              
              <p>
                Naša misia je jasná: <strong className="text-foreground">poskytovať kvalitnú prácu, ktorá nepodrezáva projekty</strong>. 
                Či už ide o individuálne zákazky, sériové výroby alebo komplexné projekty, 
                pristupujeme ku každému s rovnakou pozornosťou a odbornosťou.
              </p>
              
              <p>
                Disponujeme najmodernejšími CNC strojmi a technológiami, ktoré nám umožňujú 
                realizovať aj tie najnáročnejšie požiadavky s maximálnou presnosťou. 
                Naše skúsené tímy spojujú tradičné remeselné zručnosti s inovatívnymi prístupmi.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/cnc-machine.jpg" 
                alt="CNC stroj v prevádzke" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl shadow-xl p-6 max-w-xs border-2 border-primary/20">
              <div className="text-5xl font-heading text-primary mb-2">500+</div>
              <div className="font-body text-foreground font-semibold">Spokojných zákazníkov</div>
              <div className="text-sm text-muted-foreground mt-1">Od roku 2008</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="text-primary" size={32} />
              </div>
              <h4 className="font-heading text-xl text-foreground mb-3">
                {value.title}
              </h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/10">
          <h3 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">
            Prečo si vybrať <span className="text-primary">REZIVARIUM</span>?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-heading text-primary mb-4">01</div>
              <h4 className="font-body font-bold text-xl text-foreground mb-3">Moderné technológie</h4>
              <p className="font-body text-muted-foreground">
                Najnovšie CNC stroje a softvér pre maximálnu presnosť a efektivitu.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-heading text-primary mb-4">02</div>
              <h4 className="font-body font-bold text-xl text-foreground mb-3">Flexibilný prístup</h4>
              <p className="font-body text-muted-foreground">
                Od jednorázových zákaziek po sériové výroby – prispôsobíme sa vašim potrebám.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-heading text-primary mb-4">03</div>
              <h4 className="font-body font-bold text-xl text-foreground mb-3">Spoľahlivosť</h4>
              <p className="font-body text-muted-foreground">
                Dodržiavame termíny a garantujeme kvalitu každého výrobku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
