# Jeongsoo Lee Portfolio

Single-page portfolio site for Jeongsoo Lee built with React + Vite. It highlights a hero intro, resume preview, project highlights, and a dedicated Projects page with a timeline layout. The site is designed to feel editorial and clean with a warm, neutral color palette and clear typography.

## What this project is

This repository contains a personal portfolio website intended to:
- Introduce the developer's focus and background.
- Showcase selected projects with concise summaries and roles.
- Provide access to a downloadable resume.
- Link to external profiles (LinkedIn and GitHub).

The layout is built for desktop and mobile, with a timeline-style Projects page and a large-card presentation for project details.

## Tech stack

- React (component-based UI)
- Vite (fast dev server and build tool)
- React Router (routing between Overview and Projects)
- Vanilla CSS (custom layout and animations)

## Pages and sections

Overview (Home):
- Hero section with profile image and intro
- Resume preview + download link
- Project highlights
- Social links (LinkedIn, GitHub)

Projects:
- Timeline layout with alternating left/right cards
- Role badges next to each project title

## Local development

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project structure

```
src/
  components/
    Home.jsx        # Overview page content
    Layout.jsx      # Header + main layout shell
    Projects.jsx    # Timeline projects page
  assets/
    profile_pic/    # Profile image
    resume/         # Resume PDF
  App.css           # Site styles
  App.jsx           # App routes
  index.css         # Base styles and theme variables
  main.jsx          # App entry point
```

## Customization guide

Update project timeline content:
- Edit `src/components/Projects.jsx` and update the `projects` array.

Update overview content:
- Edit `src/components/Home.jsx` for the hero copy, resume description, and highlights.

Update resume:
- Replace `src/assets/resume/Jeongsoo Lee Resume(MR).pdf` with your file.

Update profile image:
- Replace `src/assets/profile_pic/jeongsoolee_profilepic.jpeg`.

Update social links:
- Edit the LinkedIn/GitHub URLs in `src/components/Home.jsx`.

## Design notes

- Timeline uses CSS positioning with a center line and animated grow on load.
- Cards use a subtle blur + shadow for depth.
- Typography uses Playfair Display for headings and Noto Sans KR for body text.

## Deployment

This is a static site and can be deployed to any static hosting provider (GitHub Pages, Netlify, Vercel). Build output is in `dist/` after `npm run build`.
