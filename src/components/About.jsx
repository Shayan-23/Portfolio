import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="about" className="about" ref={ref}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="timeline">
        <TimelineItem 
          title="Past"
          content="My journey began as a freelance video editor and graphic designer, where I honed my creativity and technical skills, backed by a degree in computer engineering."
          delay={0}
          inView={inView}
        />
        <TimelineItem 
          title="Present"
          content="I am now focused on front-end development, designing user-friendly websites that help businesses grow and succeed."
          delay={0.2}
          inView={inView}
        />
        <TimelineItem 
          title="Future"
          content="I aspire to become the Best full-stack developer, creating impactful digital experiences and helping businesses bring their visions to life."
          delay={0.4}
          inView={inView}
        />
      </div>
    </section>
  )
}

const TimelineItem = ({ title, content, delay, inView }) => {
  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="glow-text">{title}</h3>
      <p>{content}</p>
    </motion.div>
  )
}

export default About