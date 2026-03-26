'use client';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
