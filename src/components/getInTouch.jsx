import { createContext, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export const LanguageContext = createContext('en')

function Layout({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const labels = useMemo(
    () => ({
      en: {
        overview: 'Overview',
        projects: 'Projects',
        getInTouch: 'Get in touch',
        contactLabel: 'Get in touch',
        contactTitle: 'Contact Information',
        close: 'X',
        phone: 'Phone',
        email: 'Email',
      },
      ko: {
        overview: '소개',
        projects: '프로젝트',
        getInTouch: '문의하기',
        contactLabel: '문의하기',
        contactTitle: '연락처',
        close: 'X',
        phone: '전화',
        email: '이메일',
      },
    }),
    []
  )
  const copy = labels[language]

  useEffect(() => {
    document.documentElement.lang = language === 'ko' ? 'ko' : 'en'
  }, [language])

  return (
    <LanguageContext.Provider value={language}>
      <div className="page">
        <header className="app-bar">
          <div className="brand">
            <span className="brand-dot" />
            Jeongsoo Lee
          </div>
          <nav className="nav">
            <Link to="/">{copy.overview}</Link>
            <Link to="/projects">{copy.projects}</Link>
          </nav>
          <div className="app-actions">
            <div
              className="lang-switch"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsLangOpen(false)
                }
              }}
            >
              <span className="lang-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm7.9 9H16c-.1-2.6-.9-5-2.2-6.9 3.1 1.2 5.4 3.8 6.1 6.9zM12 4c1.6 2 2.6 4.4 2.8 7H9.2c.2-2.6 1.2-5 2.8-7zM4.1 13H8c.1 2.6.9 5 2.2 6.9-3.1-1.2-5.4-3.8-6.1-6.9zM8 11H4.1c.7-3.1 3-5.7 6.1-6.9C8.9 6 8.1 8.4 8 11zm4 9c-1.6-2-2.6-4.4-2.8-7h5.6c-.2 2.6-1.2 5-2.8 7zm1.8-0.1c1.3-1.9 2.1-4.3 2.2-6.9h3.9c-.7 3.1-3 5.7-6.1 6.9z" />
                </svg>
              </span>
              <button
                className="lang-toggle"
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
              >
                <span className="lang-toggle-label">
                  {language === 'ko' ? 'Korean' : 'English'}
                </span>
                <span className="lang-caret" aria-hidden="true" />
              </button>
              <div
                className={`lang-menu ${isLangOpen ? 'is-open' : ''}`}
                role="listbox"
              >
                <button
                  className={`lang-option ${
                    language === 'ko' ? 'is-active' : ''
                  }`}
                  type="button"
                  role="option"
                  aria-selected={language === 'ko'}
                  onClick={() => {
                    setLanguage('ko')
                    setIsLangOpen(false)
                  }}
                >
                  Korean
                </button>
                <button
                  className={`lang-option ${
                    language === 'en' ? 'is-active' : ''
                  }`}
                  type="button"
                  role="option"
                  aria-selected={language === 'en'}
                  onClick={() => {
                    setLanguage('en')
                    setIsLangOpen(false)
                  }}
                >
                  English
                </button>
              </div>
            </div>
            <button
              className="ghost-button"
              type="button"
              onClick={() => setIsContactOpen(true)}
            >
              {copy.getInTouch}
            </button>
          </div>
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
                {copy.close}
              </button>
              <p className="contact-modal-label">{copy.contactLabel}</p>
              <h2 id="contact-modal-title">{copy.contactTitle}</h2>
              <p>
                {copy.phone}:{' '}
                <a href="tel:8148628968" className="contact-modal-link">
                  814-862-8968
                </a>
              </p>
              <p>
                {copy.email}:{' '}
                <a href="mailto:hijs0146@gmail.com" className="contact-modal-link">
                  hijs0146@gmail.com
                </a>
              </p>
            </div>
          </div>
        )}

        <main>{children}</main>
      </div>
    </LanguageContext.Provider>
  )
}

export default Layout
