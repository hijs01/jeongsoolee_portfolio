function Projects() {
  const projects = [
    {
      title: 'TAGO',
      meta: 'Featured',
      role: 'Developer Team Lead',
      description:
        'Campus ride-sharing app that reduces airport travel costs by forming real-time group rides through in-app chat and automated matching.',
    },
    {
      title: 'Fasoo Design System',
      meta: 'Design System',
      role: 'Intern',
      description:
        'Built a reusable Flutter design system with 50+ UI components, improving consistency and reducing duplicated effort across enterprise apps.',
    },
    {
      title: 'Customer Support Chatbot',
      meta: 'AI Support',
      role: 'Java Developer',
      description:
        'Developed a task-oriented Java chatbot for order tracking, refunds, and recommendations using structured dialogue flows and contextual state management.',
    },
    {
      title: 'Library SQL Project',
      meta: 'Data',
      role: 'Data Engineer',
      description:
        'Designed a normalized relational database for an online library commerce platform, supporting search, transactions, and subscription workflows.',
    },
  ]

  return (
    <section className="projects projects-page">
      <div className="section-header">
        <h2>What I Have Done...</h2>
        <p>Scroll to explore full-size project cards.</p>
      </div>
      <div className="projects-track projects-track--stacked">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`project-card project-card--wide ${
              index % 2 === 0 ? 'project-card--left' : 'project-card--right'
            }`}
          >
            <div className="project-meta">{project.meta}</div>
            <div className="project-title-row">
              <h3>{project.title}</h3>
              <span className="project-role">{project.role}</span>
            </div>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
