import { useEffect, useMemo } from "react";
import './index.css'
import { socials } from "./constants/constants";
import { Nav, Hero, About, Skills, Projects, Contact, Footer } from "./components"

export default function App() {
  // Basic structured data for SEO
  const personLD = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amirparsa Rouhi",
    url: "https://aprouhi.com",
    sameAs: [socials.github, socials.linkedin],
    jobTitle: "Data Scientist and AI Engineer",
  }), []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(personLD);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [personLD]);

  return (
    <div className="min-h-screen text-zinc-900">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-2 rounded">Skip to content</a>
      <Nav />
      <main id="content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
