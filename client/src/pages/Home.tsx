import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import References from '@/components/References';
import Technologies from '@/components/Technologies';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <References />
        <Technologies />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
