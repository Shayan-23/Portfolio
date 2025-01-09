import { motion } from 'framer-motion'

const SectionSeparator = ({ icon }) => {
  return (
    <motion.div 
      className="section-separator"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="separator-icon">
        {icon}
      </div>
    </motion.div>
  )
}

export default SectionSeparator 