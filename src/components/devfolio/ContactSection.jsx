import React, { useState } from 'react';
import { saveContactMessage } from '../../firebase';

const ContactSection = ({ contacts }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await saveContactMessage(formData);

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error saving message to Firebase:', error);
      if (error?.message?.toLowerCase().includes('permission') || error?.code === 'PERMISSION_DENIED') {
        setErrorMessage('Firebase permission notice: Writes currently need rule authorization in Firebase Console.');
      } else {
        setErrorMessage('Could not send message right now. Please try again or reach out via direct email.');
      }
      setTimeout(() => setErrorMessage(''), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-title-wrap reveal-fade-up">
        <span className="section-eyebrow">
          <i className="fa-regular fa-paper-plane"></i> Let's Connect
        </span>
        <h2 className="title">Get In Touch</h2>
        <span className="subtitle">
          Have an exciting mobile project, Flutter opportunity, or questions? Send a direct note below.
        </span>
      </div>

      <div className="contact-body">
        {contacts?.map((contact, index) => {
          const isEmail = contact.title.toLowerCase().includes('email');
          return (
            <div
              key={index}
              className={`contact-card reveal-scale delay-${(index + 1) * 150}`}
            >
              <div className="contact-icon-bubble">
                <i className={`${contact.icon} c-icon`}></i>
              </div>
              <div className="contact-info-col">
                <span className="c-title">{contact.title}</span>
                <span className="c-description">{contact.description}</span>
              </div>
              <div className="contact-action-btn-wrap">
                {isEmail ? (
                  <button
                    type="button"
                    className="contact-quick-btn"
                    onClick={() => handleCopyEmail(contact.description)}
                    title="Copy Email to Clipboard"
                  >
                    <i className={copiedEmail ? 'fa-solid fa-check' : 'fa-regular fa-copy'}></i>
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                ) : (
                  <a
                    href={contact.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-quick-btn"
                    title={`Open ${contact.title}`}
                  >
                    <span>Visit</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Contact Form */}
      <div className="contact-form-card reveal-fade-up delay-200">
        <div className="form-header-bar">
          <div className="form-header-left">
            <span className="form-status-dot"></span>
            <h3 className="form-title">Send a Direct Message</h3>
          </div>
          <span className="form-encryption-tag">
            <i className="fa-solid fa-shield-halved"></i> Firebase Encrypted
          </span>
        </div>

        <form onSubmit={handleSubmit} className="styled-contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <i className="fa-regular fa-user"></i> Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. Alex Johnson"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <i className="fa-regular fa-envelope"></i> Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="e.g. alex@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              <i className="fa-solid fa-tag"></i> Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="e.g. Flutter Mobile App Collaboration"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <i className="fa-regular fa-message"></i> Message
            </label>
            <textarea
              id="message"
              required
              rows="4"
              placeholder="Hi Mohit, I'm reaching out about a Flutter project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </div>

          <div className="submit-btn-wrap" style={{ flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <button
              type="submit"
              className="app-button primary-glow-btn"
              disabled={isSubmitting}
              style={{ minWidth: '180px', opacity: isSubmitting ? 0.75 : 1 }}
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>
                  Sending...
                </>
              ) : submitted ? (
                <>
                  <i className="fa-solid fa-circle-check" style={{ marginRight: '8px', color: '#10b981' }}></i>
                  Message Received!
                </>
              ) : (
                <>
                  <i className="fa-regular fa-paper-plane" style={{ marginRight: '8px' }}></i>
                  Send Message
                </>
              )}
            </button>
            {errorMessage && (
              <p style={{ color: '#e11d48', fontSize: '13px', margin: 0, textAlign: 'center', background: 'rgba(225,29,72,0.08)', padding: '6px 14px', borderRadius: '8px' }}>
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

