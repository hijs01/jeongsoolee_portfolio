import { Link } from 'react-router-dom'

function Layout({ children }) {
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
        <button className="ghost-button" type="button">
          Get in touch
        </button>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default Layout
