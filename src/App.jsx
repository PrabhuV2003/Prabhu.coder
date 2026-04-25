import React, { useEffect } from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Works from './component/Works'
import Services from './component/Services.jsx'
import Process from './component/Process.jsx'
import Testimonials from './component/Testimonials.jsx'
import CTA from './component/CTA.jsx'
import Footer from './component/Footer.jsx'
import Contact from './component/Contact.jsx'
import { ToastContainer } from 'react-toastify'
import useScrollReveal from './hooks/useScrollReveal.jsx'

const App = () => {

  useScrollReveal();

  useEffect(() => {
    document.title = "Prabhu V — Full-Stack Developer"
  },[]);

  return (
    <div className=' App overflow-x-hidden '>
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App