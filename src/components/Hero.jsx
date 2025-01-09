import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const Hero = () => {
  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          variants={itemVariants}
        >
          Hello! I am
        </motion.h2>
        <motion.h1
          variants={itemVariants}
        >
          Shayan Martin Crasta
        </motion.h1>
        <motion.div 
          className="roles"
          variants={itemVariants}
        >
          <span>Front end developer</span>
          <span className="dot">•</span>
          <span>Designer</span>
          <span className="dot">•</span>
          <span>Video Editor</span>
        </motion.div>
        <motion.p
          variants={itemVariants}
        >
          I’m a passionate Front-End Developer based in Manipal, with a background in Software Engineering and a strong interest in UI/UX design. I'm committed to creating visually stunning and user-friendly websites, and I'm looking forward to exploring new opportunities to enhance my skills.
        </motion.p>
        <motion.button
          className="resume-btn"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="https://drive.google.com/file/d/1UKYi6lJithBgyVrFTotblhHlxgIae4Xa/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Get My Resume
          </a>
        </motion.button>
      </motion.div>
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: -5 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="glow-border">
          <img 
            src="pic.jpeg" 
            alt="Profile" 
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 