# AGENTS.md

## Project
École Jasmin – Centre de Formation Professionnelle

## Goal
Build a premium, modern, fast, smooth, and fully responsive marketing website for a culinary and pastry school using React, Vite, Tailwind CSS, and Framer Motion.

## Core stack
- React
- Vite
- Tailwind CSS
- Framer Motion
- Vercel deployment

## Non-goals
- No backend
- No Supabase
- No authentication
- No database
- No dashboard
- No unnecessary libraries
- No over-engineering

## Primary priorities
1. Smoothness and perceived performance
2. Responsive design quality
3. Premium visual design
4. Clean reusable architecture
5. Easy Vercel deployment
6. Maintainable code

## Performance rules
- Prefer transform and opacity animations
- Avoid animating width, height, top, left, box-shadow heavily
- Avoid large expensive blur areas
- Avoid animation spam
- Avoid unnecessary rerenders
- Keep hover interactions light and smooth
- Prioritize fast, polished UI over flashy effects
- Use lazy loading when helpful for non-critical visuals
- Keep DOM structure clean

## Design rules
- Use the official palette:
  - #EDE6DA
  - #D8C7A6
  - #B79A6B
  - #8C6F4A
  - #4A3A2A
  - #1A1A1A
  - #F7F5F0
- Aesthetic must feel:
  - luxury
  - elegant
  - warm
  - culinary
  - premium
  - modern
- Use generous whitespace
- Use refined typography
- Use subtle shadows
- Use rounded corners tastefully
- Glassmorphism only when it improves the design
- Avoid clutter

## UX rules
- Mobile-first
- Excellent tablet and desktop adaptation
- Sticky navbar
- Smooth mobile menu
- Accessible buttons and forms
- Clear CTA hierarchy
- No laggy hover states
- Smooth scrolling

## Animation rules
- Use Framer Motion sparingly and intentionally
- Entry animations should be subtle
- Hover animations must be responsive and lightweight
- Avoid heavy parallax
- Keep motion premium, not distracting

## Code structure
- Keep components modular
- Prefer reusable section and card components
- Suggested structure:

src/
  components/
  sections/
  assets/
  data/
  hooks/
  App.jsx
  main.jsx

- Create small focused components
- Avoid massive monolithic files
- Keep naming clear and consistent

## Content sections required
- Top Header Bar
- Navbar
- Hero
- About
- Formations
- Chefs / Formateurs
- Events
- FAQ
- CTA
- Contact
- Footer

## Content data
School name:
École Jasmin – Centre de Formation Professionnelle

Address:
Route de Tunis km 6, Sakiet Ezzit, Sfax, Tunisia

Phone:
+216 23 061 414

Email:
ecole.jasmin2012@gmail.com

Hero heading:
Devenez un Chef Professionnel en Cuisine & Pâtisserie

Hero subtitle:
Formation professionnelle certifiée et reconnue par l'État

About text:
مركز التكوين المهني الياسمين / JASMIN هو مؤسسة تكوينية تقدم برامج احترافية في الطبخ و المرطبات، مع شهادات معترف بها من طرف الدولة.

Formation titles:
- شهادة المؤهل التقني المهني في الطبخ
- شهادة المؤهل التقني المهني في المرطبات
- شهادة الكفاءة المهنية في الطبخ و المرطبات
- شهادة المهارة في الطبخ
- شهادة المهارة في المرطبات

Event titles:
- Graduation Day
- Dîner gastronomique
- Masterclass

FAQ items:
- Diplômes proposés ?
- Conditions d’inscription ?
- Localisation ?
- Types de formation ?

CTA text:
Prêt à commencer votre carrière culinaire ?

CTA button:
S’inscrire maintenant

## Deliverable expectations
- Production-style frontend
- Clean visual polish
- Strong responsiveness
- Smooth interactions
- Vercel-ready
- Minimal setup friction

## What to avoid
- Slow hover effects
- Heavy visual noise
- Poor mobile spacing
- Inconsistent section styling
- Unnecessary dependencies
- Backend setup
- Placeholder structure without polish

## Definition of done
The website is complete when:
- it looks premium
- it feels smooth
- it is fully responsive
- sections are reusable and well-structured
- animations are polished and lightweight
- it runs locally without errors
- it is ready for Vercel deployment