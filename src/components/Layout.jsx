import { useState } from 'react'
import { Link } from 'react-router-dom'

function Layout({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="page">
      <header className="app-bar">
        <div className="brand">
          <span className="brand-dot" />
          Jeongsoo Lee
        </div>
        <nav className="nav">
          <Link to="/">Overview</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        <button
          className="ghost-button"
          type="button"
          onClick={() => setIsContactOpen(true)}
        >
          Get in touch
        </button>
      </header>

      {isContactOpen && (
        <div
          className="contact-modal-backdrop"
          onClick={() => setIsContactOpen(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setIsContactOpen(false)
            }
          }}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="contact-modal-close"
              type="button"
              onClick={() => setIsContactOpen(false)}
              aria-label="Close contact popup"
            >
              Close
            </button>
            <p className="contact-modal-label">Get in touch</p>
            <h2 id="contact-modal-title">Contact Information</h2>
            <p>
              Phone:{' '}
              <a href="tel:8148628968" className="contact-modal-link">
                814-862-8968
              </a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:hijs0146@gmail.com" className="contact-modal-link">
                hijs0146@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}

      <main>{children}</main>
    </div>
  )
}

export default Layout
