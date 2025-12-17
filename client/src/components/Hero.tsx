import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="rezivarium-hero relative w-full"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen pt-40 sm:pt-32 md:pt-32">
        <div className="container px-6 py-20 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            {/* Subtitle */}
            <p className="text-primary font-body font-semibold text-lg md:text-xl mb-4 tracking-wider uppercase">
              CNC Rezanie • Stolárstvo • Presná Drevovýroba
            </p>

            {/* Main Heading */}
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-2xl">
              KVALITA, KTORÁ<br />
              <span className="text-primary">NEPODREZÁVA</span><br />
              PROJEKTY
            </h1>

            {/* Description */}
            <p className="font-body text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Profesionálne CNC rezanie a stolárske práce s precíznosťou na mieru vašich potrieb. 
              Moderné technológie, skúsený tým a záväzok ku kvalite.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="font-body text-base px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                onClick={() => scrollToSection('#services')}
              >
                Zistiť viac
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="font-body text-base px-8 py-6 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-foreground shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => scrollToSection('#contact')}
              >
                <Phone className="mr-2" size={20} />
                Kontakt
              </Button>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in">
                <div className="text-4xl font-heading text-primary mb-2">15+</div>
                <div className="text-white font-body">Rokov skúseností</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-heading text-primary mb-2">500+</div>
                <div className="text-white font-body">Realizovaných projektov</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-heading text-primary mb-2">±0.1mm</div>
                <div className="text-white font-body">Presnosť CNC rezania</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
