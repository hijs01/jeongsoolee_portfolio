import { useContext } from 'react'
import { LanguageContext } from '../../getInTouch'
import tagoLogo from '../../../assets/logo/TAGO_logo.png'
import fasooLogo from '../../../assets/logo/fasoo_logo_trans.png'
import mysqlLogo from '../../../assets/logo/mysql_logo.png'
import javaLogo from '../../../assets/logo/Java.png'
import fasooCeoPic from '../../../assets/fasoo/ceo_pic.jpg'
import fasooPresentingPic from '../../../assets/fasoo/fasoo_presenting.jpg'
import ist210Proj1 from '../../../assets/projetcs/ist210/ist 210 proj 1.pdf'
import ist210Proj2 from '../../../assets/projetcs/ist210/project 2.pdf'
import ProjectCard from './ProjectCard'

function Projects() {
  const language = useContext(LanguageContext)
  const copy =
    {
      en: {
        headerTitle: 'What I Have Done...',
        headerLead: 'Scroll to explore full-size project cards.',
        projects: [
          {
            title: 'TAGO',
            meta: 'Featured',
            role: 'Developer Team Lead',
            logo: tagoLogo,
            intro:
              'TAGO solves expensive, hard-to-coordinate airport-to-campus rides by letting students create rooms with date/time, luggage count, pickup/dropoff, direction, and headcount to find ride partners.',
            bullets: [
              'Led the team with an MVVM architecture, GitHub strategy, and shared folder structure to finish the project in two months.',
              'Defined consistent coding rules to keep the codebase maintainable.',
              'Built backend room-matching logic, cloud functions, and message notifications.',
              'Shipped to the App Store and Google Play Store.',
              'Delivered features including Google Maps integration, room creation, room matching, room status, group chat, sign-up, and account deletion.',
            ],
          },
          {
            title: 'Fasoo Design System UI Library',
            meta: 'Design System',
            role: 'Intern',
            logo: fasooLogo,
            logoClass: 'project-logo--large project-logo--light-bg',
            intro:
              'Created a Fasoo design system UI library to reduce reliance on third-party components and speed up consistent product development; third-party patches and hand-built UI made alignment and maintenance slow and inconsistent.',
            bullets: [
              'Collaborated closely with engineers and designers, coordinating work through GitLab.',
              'Defined a shared folder structure with the team to keep the project organized.',
              'Built responsive components to support a wide range of devices.',
              'Implemented dark mode and light mode, plus UI feedback states for each component.',
              'Kept the codebase easy to maintain with weekly code reviews and consistent structure.',
              'Presented the project to Fasoo leadership at the end of the engagement.',
            ],
            images: [
              { src: fasooPresentingPic, alt: 'Fasoo project presentation' },
              { src: fasooCeoPic, alt: 'Fasoo leadership presentation' },
            ],
          },
          {
            title: 'Customer Support Chatbot',
            meta: 'AI Support',
            role: 'Java Developer',
            logo: javaLogo,
            logoClass: 'project-logo--large project-logo--light-bg',
            intro:
              'Developed a Java-based task-oriented customer support chatbot for order tracking and refunds using goal-driven conversation flows with intent classification and state-driven dialogue management.',
            bullets: [
              'Designed a rule-based intent and domain classification system with keyword matching to route user inputs across service intents.',
              'Built a state-driven dialogue architecture with 10+ dialogue states to handle multi-step conversations.',
              'Implemented slot-filling logic to capture required data such as order numbers and product names before advancing.',
              'Applied object-oriented design to keep intent, state, and domain logic modular and maintainable.',
            ],
          },
          {
            title: 'Library SQL Project',
            meta: 'Data',
            role: 'Data Engineer',
            logo: mysqlLogo,
            logoClass: 'project-logo--large',
            intro:
              'Designed and implemented a relational MySQL database for an e-commerce bookstore platform (LibSQL) with a subscription-based membership system (SQL+).',
            bullets: [
              'Designed and normalized the relational schema, defining entities, primary keys, and foreign key relationships for books, publishers, users, transactions, and membership plans.',
              'Implemented the database in MySQL using DDL statements (CREATE/ALTER TABLE) and enforced referential integrity through constraints.',
              'Modeled real-world e-commerce logic including checkout carts, per-book transaction rules, subscription plans (SQL+), and multiple payment methods.',
              'Imported sample data and validated the system using SQL queries to test relationships, transactions, and membership workflows.',
            ],
            files: [
              { label: 'IST 210 Project 1 (PDF)', href: ist210Proj1 },
              { label: 'IST 210 Project 2 (PDF)', href: ist210Proj2 },
            ],
          },
        ],
      },
      ko: {
        headerTitle: '진행한 프로젝트',
        headerLead: '카드를 스크롤해서 자세히 확인하세요.',
        projects: [
          {
            title: 'TAGO',
            meta: '주요 프로젝트',
            role: '개발 팀 리드',
            logo: tagoLogo,
            intro:
              'TAGO는 공항-캠퍼스 이동을 함께할 팀원을 찾기 어렵고 비용이 큰 문제를 해결하기 위해, 날짜/시간, 캐리어 수, 출발·도착, 방향, 인원을 기준으로 방을 생성해 매칭하는 서비스입니다.',
            bullets: [
              'MVVM 아키텍처를 설계하고 GitHub 전략 및 폴더 구조를 체계화하여 2개월 내 프로젝트를 완료했습니다.',
              '일관된 코딩 규칙을 정의하여 코드 가독성과 유지보수성을 향상시켰습니다.',
              '방 매칭 백엔드 로직을 설계·구현하고, 클라우드 함수 및 메시지 알림 기능을 연동했습니다.',
              '애플 App Store와 Google Play Store에 애플리케이션을 성공적으로 출시했습니다.',
              'Google Maps 연동, 방 생성·매칭·상태 관리, 그룹 채팅, 회원가입 및 탈퇴 기능 등 핵심 기능을 구현했습니다.',
            ],
          },
          {
            title: 'Fasoo Design System UI Library',
            meta: '디자인 시스템',
            role: '인턴',
            logo: fasooLogo,
            logoClass: 'project-logo--large project-logo--light-bg',
            intro:
              '타사 컴포넌트 의존과 수동 UI 제작으로 인해 디자인 변경 대응이 느려지는 문제를 해결하기 위해, Fasoo 디자인 시스템 UI 라이브러리를 구축했습니다.',
            bullets: [
              '엔지니어 및 디자이너와 긴밀히 협업하며 GitLab을 활용해 이슈 관리, 코드 리뷰, 머지 요청 등 협업 프로세스를 체계적으로 운영했습니다.',
              '팀원들과 함께 폴더 구조를 정의하고 역할을 분담하여 개발 효율성과 코드 일관성을 높였습니다.',
              '다양한 디바이스(모바일, 태블릿, 데스크톱)를 지원하도록 모든 컴포넌트를 반응형으로 설계했습니다.',
              '유지보수에 용이한 구조로 코드를 설계하고, 코드 리뷰를 진행하여 품질을 지속적으로 개선했습니다.',
              '프로젝트 종료 시 Fasoo 대표이사 앞에서 프로젝트 성과와 본 프로젝트의 방향성에 대해서 발표하였습니다.',
            ],
            images: [
              { src: fasooPresentingPic, alt: 'Fasoo 프로젝트 발표' },
              { src: fasooCeoPic, alt: 'Fasoo 발표 사진' },
            ],
          },
          {
            title: 'Customer Support Chatbot',
            meta: 'AI 지원',
            role: '자바 개발자',
            logo: javaLogo,
            logoClass: 'project-logo--large project-logo--light-bg',
            intro:
              '주문 추적과 환불 요청을 처리하는 Java 기반 고객 지원 챗봇을 개발했으며, 목표 지향형 대화 흐름과 상태 기반 대화 관리를 적용했습니다.',
            bullets: [
              '키워드 매칭 기반의 인텐트/도메인 분류 시스템을 설계해 요청을 정확히 라우팅했습니다.',
              '10개 이상의 대화 상태를 갖춘 상태 기반 대화 아키텍처를 구축했습니다.',
              '주문번호, 상품명 등 필수 정보를 수집하는 슬롯 필링 로직을 구현했습니다.',
              '객체지향 설계로 인텐트/상태/도메인 로직을 분리해 유지보수성을 높였습니다.',
            ],
          },
          {
            title: 'Library SQL Project',
            meta: '데이터',
            role: '데이터 엔지니어',
            logo: mysqlLogo,
            logoClass: 'project-logo--large',
            intro:
              '구독형 멤버십(SQL+)을 포함한 온라인 서점 LibSQL을 위해 MySQL 기반 관계형 데이터베이스를 설계·구현했습니다.',
            bullets: [
              '도서, 출판사, 사용자, 거래, 멤버십 플랜의 엔티티와 키/관계를 정규화하여 설계했습니다.',
              'DDL(CREATE/ALTER TABLE)로 스키마를 구현하고 제약조건으로 무결성을 보장했습니다.',
              '장바구니, 권별 거래 규칙, 구독 플랜, 복수 결제 수단 등 실제 거래 로직을 모델링했습니다.',
              '샘플 데이터를 적재하고 SQL 쿼리로 관계, 거래, 멤버십 흐름을 검증했습니다.',
            ],
            files: [
              { label: 'IST 210 프로젝트 1 (PDF)', href: ist210Proj1 },
              { label: 'IST 210 프로젝트 2 (PDF)', href: ist210Proj2 },
            ],
          },
        ],
      },
    }[language]

  return (
    <section className="projects projects-page">
      <div className="section-header">
        <h2>{copy.headerTitle}</h2>
        <p>{copy.headerLead}</p>
      </div>
      <div className="projects-track projects-track--stacked">
        {copy.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
