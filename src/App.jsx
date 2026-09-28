import { useEffect } from 'react'
import initEffects from './effects.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Marquee from './components/Marquee.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  useEffect(() => { initEffects() }, [])
  return (
    <>
      <div id="bar" />
      <canvas id="fx" aria-hidden="true" />
      <div id="glow" aria-hidden="true" />
      <Navbar />
      <main className="wrap">
        <Hero />
        <Stats />
        <Marquee />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
