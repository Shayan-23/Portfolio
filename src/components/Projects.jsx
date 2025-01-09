import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const projects = [
    {
      title: "Income Expense Tracker",
      description: "Income Expense Tracker built with React and firebase",
      image: "./project1.png",
      tags: ["React", "firebase", "RestAPI"],
      link: "https://income-xpense-manager.netlify.app/",
      codeLink: "https://github.com/Shayan-23?tab=repositories"
    },
    {
      title: "Recipe Vault",
      description: "Website for finding your favourite recipes",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
      tags: ["React", "CSS-Grid", "RestAPI"],
      link: "https://recipe-vault.netlify.app/",
      codeLink: "https://github.com/Shayan-23?tab=repositories"
    },
    {
      title: "Video Editing & Graphic Design",
      description: "Multiple videos and Graphics projects worked over last 1 year",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
      tags: ["Davinci Resolve", "Affinity", "Canva"],
      link: "https://martinedits.super.site",
      
    }
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-buttons">
                  <a href={project.link} className="view-project">View Project</a>
                  <a href={project.codeLink} className="view-code">View Code</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects 