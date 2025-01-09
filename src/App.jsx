import { useState, useEffect } from 'react'
import './assets/styles/App.css'
import './assets/styles/mobile.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SectionSeparator from './components/SectionSeparator'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div 
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Loading Shayan's Portfolio
            </motion.div>
            <motion.div 
              className="loading-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <div className="app">
          <div className="background-effects">
            <div className="glow-circle"></div>
            <div className="glow-circle"></div>
            
          </div>
          <Navbar />
          <main>
            <Hero />
            <SectionSeparator icon="🎯" />
            <About />
            <SectionSeparator icon="💫" />
            <Skills />
            <SectionSeparator icon="🚀" />
            <Projects />
            <SectionSeparator icon="📬" />
            <Contact />
          </main>
        </div>
      )}
    </AnimatePresence>
  )
}

export default App