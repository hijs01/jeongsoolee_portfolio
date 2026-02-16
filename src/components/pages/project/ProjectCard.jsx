import { useContext } from 'react'
import { LanguageContext } from '../../getInTouch'

function ProjectCard({ project, index }) {
  const language = useContext(LanguageContext)
  const labels =
    {
      en: {
        files: 'Project Files',
        pictures: 'Relevant Pictures',
      },
      ko: {
        files: '프로젝트 파일',
        pictures: '관련 이미지',
      },
    }[language]
  return (
    <article
      className={`project-card project-card--wide ${
        index % 2 === 0 ? 'project-card--left' : 'project-card--right'
      }`}
    >
      <div className="project-header">
        <span className="project-meta">{project.meta}</span>
        <span className="project-role">{project.role}</span>
      </div>
      <div className="project-title-row">
        {project.logo ? (
          <img
            className={`project-logo ${project.logoClass || ''}`.trim()}
            src={project.logo}
            alt={`${project.title} logo`}
            loading="lazy"
          />
        ) : null}
        <h3>{project.title}</h3>
      </div>
      {project.intro ? (
        <p className="project-summary project-summary--intro">{project.intro}</p>
      ) : null}
      {project.bullets ? (
        <ul className="project-bullets">
          {project.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : project.description ? (
        <p className="project-summary">{project.description}</p>
      ) : null}
      {project.images ? (
        <div className="project-media">
          <div className="project-media-header">
            <p className="project-media-label">{labels.pictures}</p>
            <span className="project-media-rule" aria-hidden="true" />
          </div>
          {project.images.map((image) => (
            <figure className="project-media-item" key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      ) : null}
      {project.files ? (
        <section className="project-files">
          <div className="project-files-header">
            <p className="project-files-label">{labels.files}</p>
            <span className="project-files-rule" aria-hidden="true" />
          </div>
          <div className="project-files-links">
            {project.files.map((file) => (
              <a
                key={file.href}
                className="project-file-link"
                href={file.href}
                target="_blank"
                rel="noreferrer"
              >
                {file.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  )
}

export default ProjectCard
