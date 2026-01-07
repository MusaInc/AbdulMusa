import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import Process from './components/Process';
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
        <Process />
        <About />
        <Contact />
      </main>
    </>
  );
}
