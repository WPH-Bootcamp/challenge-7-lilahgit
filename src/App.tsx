import React from 'react';
import Navbar from "./components/container/HeroSection/Navbar";
import Hero from "./components/container/HeroSection/Hero";
import Result from "./components/container/ResultSection/Result";
import Process from "./components/container/ProcessSection/Process"
import Services from "./components/container/ServicesSection/Services";
import IndustrySection from './components/container/IndustrySection/Industry';
import Portfolio from './components/container/PortfolioSection/Portfolio';
import Testimonials from './components/container/TestimonialSection/Testimonial';
import FAQ from './components/container/FAQSection/FAQ';
import Contact from './components/container/ContactSection/Contact';
import Footer from './components/container/FooterSection/Footer';
import Brands from './components/container/HeroSection/Brands';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Brands />
      <Result />
      <Process />
      <Services />
      <IndustrySection />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
