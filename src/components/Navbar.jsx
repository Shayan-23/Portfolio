import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const SunIcon = () => (
  <svg 
    className="sun-icon" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M16.95 7.05L19.07 4.93M7.05 7.05L4.93 4.93M16.95 16.95l2.12 2.12M7.05 16.95l-2.12 2.12"/>
  </svg>
)

const MoonIcon = () => (
  <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    if (sectionId === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }
    
    const section = document.querySelector(sectionId)
    if (!section) return
    
    const navHeight = document.querySelector('.navbar').offsetHeight
    const targetPosition = section.offsetTop - navHeight

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <nav 
      className={`navbar navbar-animate ${scrolled ? 'scrolled' : ''} ${
        !scrolled ? 'navbar-animate-initial' : ''
      }`}
    >
      <a 
        href="#" 
        className="nav-brand"
        onClick={(e) => scrollToSection(e, '#')}
      >
        Martin Edits
      </a>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className={isMenuOpen ? 'active' : ''}></span>
        <span className={isMenuOpen ? 'active' : ''}></span>
        <span className={isMenuOpen ? 'active' : ''}></span>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
        <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
        <a href="https://drive.google.com/file/d/1UKYi6lJithBgyVrFTotblhHlxgIae4Xa/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> Resume</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          <SunIcon />
          <MoonIcon />
        </button>
      </div>
    </nav>
  )
}

export default Navbar 