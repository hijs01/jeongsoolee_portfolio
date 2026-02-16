import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../getInTouch'
import profilePic from '../../assets/profile_pic/jeongsoolee_profilepic.jpeg'
import resumePdf from '../../assets/resume/Jeongsoo Lee Resume(MR).pdf'

function Home() {
  const language = useContext(LanguageContext)
  const copy = {
    en: {
      eyebrow: 'Portfolio 2026',
      headline:
        'Aspiring software, systems, and cloud engineer building practical, user-centered applications.',
      lead:
        'I am an aspiring software, systems, and cloud engineer focused on building practical, user-centered applications across mobile, backend, and system-level projects.',
      viewProjects: 'View projects',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      stats: [
        { value: '6+', label: 'Years building UI' },
        { value: '24', label: 'Shipped products' },
        { value: 'KR + US', label: 'Global teams' },
      ],
      resumeTitle: 'Resume',
      resumeNote: "Click 'Download' Button to see Jeongsoo Lee's full resume.",
      resumeDownload: 'Download Resume',
      resumeFallback: 'Resume preview unavailable.',
      educationTitle: 'Education',
      majorLabel: 'Major',
      degree: 'Bachelor of Science',
      graduation: 'Graduation: 2026.05.09',
      highlightsTitle: 'Project Highlights',
      highlightsLead:
        'Quick summaries of representative work across product, UI, and data.',
      highlights: [
        {
          meta: 'Featured',
          title: 'TAGO',
          description:
            'Campus ride-sharing app that reduces airport travel costs by forming real-time group rides through in-app chat and automated matching.',
        },
        {
          meta: 'Design System',
          title: 'Fasoo Design System',
          description:
            'Built a reusable Flutter design system with 50+ UI components, improving consistency and reducing duplicated effort across enterprise apps.',
        },
        {
          meta: 'AI Support',
          title: 'Customer Support Chatbot',
          description:
            'Developed a task-oriented Java chatbot for order tracking, refunds, and recommendations using structured dialogue flows and contextual state management.',
        },
        {
          meta: 'Data',
          title: 'Library SQL Project',
          description:
            'Designed a normalized relational database for an online library commerce platform, supporting search, transactions, and subscription workflows.',
        },
      ],
    },
    ko: {
      eyebrow: '포트폴리오 2026',
      headline:
        '실용적이고 사용자 중심의 서비스를 만드는 소프트웨어 · 시스템 · 클라우드 엔지니어를 목표로 합니다.',
      lead:
        '모바일, 백엔드, 시스템 레벨 프로젝트를 통해 실용적이고 사용자 중심의 애플리케이션을 구축하는 소프트웨어 · 시스템 · 클라우드 엔지니어를 지향합니다.',
      viewProjects: '프로젝트 보기',
      linkedin: '링크드인',
      github: '깃허브',
      stats: [
        { value: '6+', label: 'UI 개발 경험' },
        { value: '24', label: '출시한 제품' },
        { value: 'KR + US', label: '글로벌 팀 경험' },
      ],
      resumeTitle: '이력서',
      resumeNote: '다운로드 버튼을 눌러 이력서 전문을 확인하세요.',
      resumeDownload: '이력서 다운로드',
      resumeFallback: '이력서 미리보기를 표시할 수 없습니다.',
      educationTitle: '학력',
      majorLabel: '전공',
      degree: '학사',
      graduation: '졸업 예정: 2026.05.09',
      highlightsTitle: '프로젝트 하이라이트',
      highlightsLead: '제품, UI, 데이터 영역의 대표 작업을 요약했습니다.',
      highlights: [
        {
          meta: '주요 프로젝트',
          title: 'TAGO',
          description:
            '공항 이동 비용을 줄이기 위해 실시간 그룹 매칭과 인앱 채팅을 제공하는 캠퍼스 라이드 쉐어링 앱을 개발했습니다.',
        },
        {
          meta: '디자인 시스템',
          title: 'Fasoo Design System',
          description:
            '50개 이상의 UI 컴포넌트로 구성된 Flutter 디자인 시스템을 구축해 일관성과 재사용성을 높였습니다.',
        },
        {
          meta: 'AI 지원',
          title: 'Customer Support Chatbot',
          description:
            '주문 추적과 환불을 위한 작업지향 대화 흐름을 갖춘 Java 챗봇을 개발했습니다.',
        },
        {
          meta: '데이터',
          title: 'Library SQL Project',
          description:
            '검색, 거래, 구독 흐름을 지원하는 온라인 서점용 정규화 관계형 데이터베이스를 설계했습니다.',
        },
      ],
    },
  }[language === 'ko' ? 'ko' : 'en']

  return (
    <div className={`home-content${language === 'ko' ? ' is-korean' : ''}`}>
      <section id="overview" className="hero">
        <div className="hero-image">
          <div className="image-frame">
            <img src={profilePic} alt="Jeongsoo Lee profile" loading="lazy" />
          </div>
        </div>
        <div className="hero-text">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.headline}</h1>
          <p className="lead">{copy.lead}</p>
          <div className="hero-actions">
            <Link className="primary-button" to="/projects">
              {copy.viewProjects}
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
              {copy.linkedin}
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
              {copy.github}
            </a>
          </div>
          <div className="stats">
            {copy.stats.map((stat) => (
              <div key={stat.label}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="resume-section">
        <div className="section-header">
          <h2>{copy.resumeTitle}</h2>
        </div>
        <div className="resume">
          <div className="resume-preview">
            <div className="resume-thumb">
              <object
                data={resumePdf}
                type="application/pdf"
                aria-label="Jeongsoo Lee resume preview"
              >
                <p>{copy.resumeFallback}</p>
              </object>
            </div>
            <div className="resume-meta">
              <h2>{copy.resumeTitle}</h2>
              <p>{copy.resumeNote}</p>
            </div>
          </div>
          <a className="primary-button" href={resumePdf} download>
            {copy.resumeDownload}
          </a>
        </div>
      </section>
      <section className="education">
        <div className="section-header">
          <h2>{copy.educationTitle}</h2>
        </div>
        <div className="education-card">
          <h3 className="education-school-title">Pennsylvania State University</h3>
          <p className="education-major">
            <span className="education-label">{copy.majorLabel}</span>{' '}
            Cybersecurity Analytics and Operations
          </p>
          <p className="education-school">
            College of Information Sciences and Technology
          </p>
          <p className="education-degree">{copy.degree}</p>
          <p className="education-date">{copy.graduation}</p>
        </div>
      </section>
      <section className="project-highlights">
        <div className="section-header">
          <h2>{copy.highlightsTitle}</h2>
          <p>{copy.highlightsLead}</p>
        </div>
        <div className="highlight-grid">
          {copy.highlights.map((highlight) => (
            <article className="highlight-card" key={highlight.title}>
              <div className="highlight-meta">{highlight.meta}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
