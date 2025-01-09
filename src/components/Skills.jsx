import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../assets/styles/skillCard.css'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = {
    programming: {
      title: "Full Stack Development",
      direction: "left", // Cards slide in from left
      skills: [
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        
        { name: 'Bootstrap' },
        { name: 'Node.js' },
        { name: 'MySQL' },
        { name: 'RestAPI' },
        { name: 'Firebase' },
        { name: 'Express' },
        { name: 'Figma' }
      ]
    },
    design: {
      title: "Programming Languages",
      direction: "right", // Cards slide in from right
      skills: [
        { name: 'Python' },
        { name: 'C Programming' },
        { name: 'Java' }
      ]
    },
    multimedia: {
      title: "Video & Graphic Design",
      direction: "bottom", // Cards slide up from bottom
      skills: [
        { name: 'DaVinci Resolve' },
        { name: 'Affinity Photo' },
        { name: 'Affinity Designer' },
        { name: 'Canva' }
      ]
    }
  }

  const fadeInVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>
      
      {Object.entries(skillCategories).map(([category, { title, skills }]) => (
        <div key={category} className="skills-category">
          <motion.h3 
            className="category-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ 
              borderLeft: 'none',
              textAlign: 'center',
              margin: '2rem auto'
            }}
          >
            {title}
          </motion.h3>
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={fadeInVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="skill-card-content">
                  <h3>{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  )
}

export default Skills 