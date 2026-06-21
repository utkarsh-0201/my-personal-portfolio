import React, { useState } from 'react';

export default function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    // Mock API subscription call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card newsletter-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header text-center">
          <div className="newsletter-icon-circle mx-auto">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="color-purple-svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11l5-4-5-4-5 4 5 4z" />
            </svg>
          </div>
          <h2 className="modal-title">Subscribe to my Newsletter</h2>
          <p className="modal-period">Get regular updates on Python backend design, FastAPI tips, security workflows, and automated tooling.</p>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus(null);
                }}
              />
              {status === 'error' && <span className="form-error">Please enter a valid email address</span>}
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </form>

          {status === 'success' && (
            <div className="form-feedback success text-center mt-4">
              <p>✓ Awesome! You have successfully subscribed to the newsletter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
