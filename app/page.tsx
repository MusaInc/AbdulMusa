import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import About from './components/About';
import Contact from './components/Contact';
import SmoothScroll from './components/SmoothScroll';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <main className="relative w-full">
        <Hero />
        <WorkSection />
        <About />
        <Contact />
      </main>
    </>
  );
}
