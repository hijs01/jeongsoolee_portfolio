import { Link } from 'react-router-dom'
import profilePic from '../assets/profile_pic/jeongsoolee_profilepic.jpeg'
import resumePdf from '../assets/resume/Jeongsoo Lee Resume(MR).pdf'

function Home() {
  return (
    <>
      <section id="overview" className="hero">
        <div className="hero-image">
          <div className="image-frame">
            <img src={profilePic} alt="Jeongsoo Lee profile" loading="lazy" />
          </div>
          <div className="image-caption">
            <p>Design x Engineering</p>
          </div>
        </div>
        <div className="hero-text">
          <p className="eyebrow">Portfolio 2026</p>
          <h1>
            Cybersecurity-focused software engineer building practical, user-
            centered applications.
          </h1>
          <p className="lead">
            I am a cybersecurity-focused software engineer who builds practical,
            user-centered applications through mobile, backend, and system-level
            projects.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/projects">
              View projects
            </Link>
            <a
              className="social-link social-link--linkedin"
              href="https://www.linkedin.com/in/jeongsoo-lee-a85a12171"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.4h-4v-5.7c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v5.8h-4z" />
                </svg>
              </span>
              LinkedIn
            </a>
            <a
              className="social-link social-link--github"
              href="https://github.com/hijs01"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5 3.2 9.3 7.7 10.9.6.1.8-.2.8-.6v-2.2c-3.1.7-3.7-1.5-3.7-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.5-.3-5.1-1.3-5.1-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C18.8 5.2 19.8 5.5 19.8 5.5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.4-2.6 5.4-5.1 5.7.4.3.8 1 .8 2v3c0 .4.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
                </svg>
              </span>
              GitHub
            </a>
          </div>
          <div className="stats">
            <div>
              <p className="stat-value">6+</p>
              <p className="stat-label">Years building UI</p>
            </div>
            <div>
              <p className="stat-value">24</p>
              <p className="stat-label">Shipped products</p>
            </div>
            <div>
              <p className="stat-value">KR + US</p>
              <p className="stat-label">Global teams</p>
            </div>
          </div>
        </div>
      </section>
      <section className="resume">
        <div className="resume-preview">
          <div className="resume-thumb">
            <object
              data={resumePdf}
              type="application/pdf"
              aria-label="Jeongsoo Lee resume preview"
            >
              <p>Resume preview unavailable.</p>
            </object>
          </div>
          <div className="resume-meta">
            <h2>Resume</h2>
            <p>Click 'Download' Button to see Jeongsoo Lee's full resume.</p>
          </div>
        </div>
        <a className="primary-button" href={resumePdf} download>
          Download Resume
        </a>
      </section>
      <section className="education">
        <div className="section-header">
          <h2>Education</h2>
        </div>
        <div className="education-card">
          <h3 className="education-school-title">Pennsylvania State University</h3>
          <p className="education-major">
            <span className="education-label">Major</span> Cybersecurity Analytics
            and Operations
          </p>
          <p className="education-school">
            College of Information Sciences and Technology
          </p>
          <p className="education-degree">Bachelor of Science</p>
          <p className="education-date">Graduation: 2026.05.09</p>
        </div>
      </section>
      <section className="project-highlights">
        <div className="section-header">
          <h2>Project Highlights</h2>
          <p>Quick summaries of representative work across product, UI, and data.</p>
        </div>
        <div className="highlight-grid">
          <article className="highlight-card">
            <div className="highlight-meta">Featured</div>
            <h3>TAGO</h3>
            <p>
              Campus ride-sharing app that reduces airport travel costs by
              forming real-time group rides through in-app chat and automated
              matching.
            </p>
          </article>
          <article className="highlight-card">
            <div className="highlight-meta">Design System</div>
            <h3>Fasoo Design System</h3>
            <p>
              Built a reusable Flutter design system with 50+ UI components,
              improving consistency and reducing duplicated effort across
              enterprise apps.
            </p>
          </article>
          <article className="highlight-card">
            <div className="highlight-meta">AI Support</div>
            <h3>Customer Support Chatbot</h3>
            <p>
              Developed a task-oriented Java chatbot for order tracking,
              refunds, and recommendations using structured dialogue flows and
              contextual state management.
            </p>
          </article>
          <article className="highlight-card">
            <div className="highlight-meta">Data</div>
            <h3>Library SQL Project</h3>
            <p>
              Designed a normalized relational database for an online library
              commerce platform, supporting search, transactions, and
              subscription workflows.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default Home
