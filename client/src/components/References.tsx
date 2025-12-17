import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function References() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    {
      title: 'Luxusná kuchyňa na mieru',
      category: 'Interiér',
      description: 'Kompletná realizácia kuchynskej linky z dubového dreva s CNC frezovanými detailmi a integrovanými spotrebičmi.',
      image: '/cnc-machine.jpg',
      stats: { duration: '3 týždne', materials: 'Dub, MDF', precision: '±0.1mm' }
    },
    {
      title: 'Firemné recepcie',
      category: 'Komerčné',
      description: 'Moderné recepčné pulty pre kancelárske priestory s gravírovaným logom a LED osvetlením.',
      image: '/workshop-sunlight.jpg',
      stats: { duration: '2 týždne', materials: 'Orech, Plexisklo', precision: '±0.1mm' }
    },
    {
      title: 'Drevené fasády',
      category: 'Exteriér',
      description: 'Presne formátované drevené obklady fasád s povrchovým ošetrením pre dlhodobú odolnosť.',
      image: '/precision-work.jpg',
      stats: { duration: '4 týždne', materials: 'Smrek, Céder', precision: '±0.2mm' }
    }
  ];

  const testimonials = [
    {
      name: 'Ing. Peter Novák',
      company: 'Stavebná firma NOVA s.r.o.',
      text: 'Spolupráca s REZIVARIUM prekonala naše očakávania. Presnosť, dodržanie termínov a profesionálny prístup na najvyššej úrovni. Určite budeme pokračovať v ďalších projektoch.',
      rating: 5
    },
    {
      name: 'Mária Kováčová',
      company: 'Súkromný zákazník',
      text: 'Kuchyňa, ktorú nám vyrobili, je absolútne dokonalá. Každý detail premyslený, materiály prvotriedy. Odporúčam všetkým, ktorí hľadajú kvalitu.',
      rating: 5
    },
    {
      name: 'Bc. Ján Horváth',
      company: 'Architektonické štúdio AH',
      text: 'Ako architekt oceňujem precíznosť a schopnosť realizovať aj zložité návrhy. REZIVARIUM je náš preferovaný partner pre drevovýrobu.',
      rating: 5
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="references" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Naše práce
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            REFERENCIE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Pozrite si výber z našich realizovaných projektov a prečítajte si hodnotenia spokojných zákazníkov
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="mb-20">
          <div className="relative max-w-5xl mx-auto">
            {/* Project Card */}
            <div className="bg-card rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-80 md:h-auto">
                  <img 
                    src={projects[currentProject].image} 
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-body font-semibold text-sm">
                    {projects[currentProject].category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-heading text-3xl text-foreground mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {projects[currentProject].description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground font-body mb-1">Trvanie</div>
                      <div className="font-heading text-lg text-primary">{projects[currentProject].stats.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-body mb-1">Materiály</div>
                      <div className="font-heading text-lg text-primary">{projects[currentProject].stats.materials}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-body mb-1">Presnosť</div>
                      <div className="font-heading text-lg text-primary">{projects[currentProject].stats.precision}</div>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentProject ? 'w-8 bg-primary' : 'w-2 bg-border'
                        }`}
                        aria-label={`Projekt ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Predchádzajúci projekt"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Ďalší projekt"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/10">
          <h3 className="font-heading text-3xl md:text-4xl text-center text-foreground mb-12">
            Hodnotenia zákazníkov
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl animate-fade-in">
              <Quote className="text-primary mb-6" size={48} />
              
              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={20} />
                ))}
              </div>

              <div>
                <div className="font-body font-bold text-foreground text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="font-body text-muted-foreground">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'w-8 bg-primary' : 'w-2 bg-border'
                    }`}
                    aria-label={`Hodnotenie ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
