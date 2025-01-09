import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    const apiEndpoint = 'https://api.web3forms.com/submit'
    
    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, // Your Web3Forms Access Key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name}`,
        })
      })

      const data = await res.json()

      if (data.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' }) // Reset form
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3>Let's talk about everything!</h3>
          <p>Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <div className="social-links">
            <a href="mailto:martinedits.co@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              Gmail
            </a>
            <a href="https://www.linkedin.com/in/shayan-crasta" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/shayan_crasta023/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
          </div>
        </motion.div>
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {success && (
            <div className="success-message">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              disabled={loading}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact 