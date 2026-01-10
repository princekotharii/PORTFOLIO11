import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageSquare, User, FileText, CheckCircle, X } from 'lucide-react';
import './Contact.css';

const Contact = ({ data, isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    // Simulate form submission (replace with your actual API call)
    try {
      // Example:  await fetch('/api/contact', { method: 'POST', body:  JSON.stringify(formData) });
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      setShowSuccess(true);
      setFormData({ name: '', email:  '', subject: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Failed to send message:', error);
      setErrorMessage('Failed to send message. Please try again or email me directly.');
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target. name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: data?.email || 'your. email@example.com',
      href: `mailto:${data?.email || 'your.email@example. com'}`,
      color: '#a855f7'
    },
    {
      icon: Phone,
      label:  'Phone',
      value:  data?.phone || '+1 234 567 8900',
      href: `tel:${data?.phone || '+1234567890'}`,
      color: '#3b82f6'
    },
    {
      icon: MapPin,
      label:  'Location',
      value:  data?.location || 'Your City, Country',
      href: '#',
      color: '#10b981'
    }
  ];

  const socialLinks = [
  { icon: Github, url: data?.githubLink || '#', label: 'GitHub' },
  { icon: Linkedin, url: data?.linkedinLink || '#', label: 'LinkedIn' },
  { icon: Twitter, url: data?.twitterLink || '#', label: 'Twitter' }
];

  return (
    <section id="contact" className={`contact-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-bg"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left:  Contact Info */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Let's Talk</h3>
              <p className="contact-info-description">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {/* Contact Info Items */}
              <div className="contact-info-list">
                {contactInfo.map((info, idx) => (
                  <a 
                    key={idx} 
                    href={info. href}
                    className="contact-info-item"
                    style={{ '--info-color': info.color }}
                  >
                    <div className="contact-info-icon">
                      <info.icon size={24} />
                    </div>
                    <div className="contact-info-text">
                      <p className="contact-info-label">{info.label}</p>
                      <p className="contact-info-value">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <p className="contact-social-title">Follow Me</p>
                <div className="contact-social-links">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social. url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User size={16} />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <Mail size={16} />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <FileText size={16} />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <MessageSquare size={16} />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData. message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="form-textarea"
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {showSuccess && (
                <div className="form-message form-success">
                  <CheckCircle size={20} />
                  <p>Message sent successfully! I'll get back to you soon.</p>
                  <button onClick={() => setShowSuccess(false)} className="form-message-close">
                    <X size={16} />
                  </button>
                </div>
              )}

              {/* Error Message */}
              {showError && (
                <div className="form-message form-error">
                  <X size={20} />
                  <p>{errorMessage}</p>
                  <button onClick={() => setShowError(false)} className="form-message-close">
                    <X size={16} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;