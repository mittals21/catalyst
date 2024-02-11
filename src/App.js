import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Work from "./components/Work/Work"
import Testimonials from "./components/Testimonials/Testimonials"
import FAQ from "./components/FAQ/FAQ"
import Footer from "./components/Footer/Footer"
import Signup from "./components/Signup/Signup"
import Contac from "./components/Contact/Contac"

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={() => setMenuOpen(false)}
        className={`${menuOpen && "bg-black/50"}`}
      >
        <Hero />
        <About />
        <Work />
        <Signup />
        <Testimonials />
        <FAQ />
        <Contac />
        <Footer />
      </div>
    </div>
  )
}

export default App
