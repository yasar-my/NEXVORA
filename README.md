# Yasar M — Cinematic Developer Portfolio

A responsive React + Vite portfolio for Yasar M, with a real-time Three.js scene, cinematic hero backdrop, layered entrance and hover animations, animated project artwork, scroll-reveal sections, project filters, technical case-study modals, the latest supplied resume, and a validated contact inquiry form. Respects the visitor’s reduced-motion preference.

## Requirements
- Node.js 18+ (Node 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Vite prints the local development URL.

## Production build
```bash
npm run build
npm run preview
```
The production output is written to `dist/`.

## Contact form setup
By default, the form validates the fields and opens a prefilled email draft to `yasarm8675@gmail.com`. The site does **not** claim that the email was sent.

To receive form submissions through Formspree:
1. Create a form in your Formspree account and set the destination/recipient to `yasarm8675@gmail.com`.
2. Complete any email verification required by the provider.
3. Copy its endpoint.
4. Copy `.env.example` to `.env`.
5. Set `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID`.
6. Restart the dev server and redeploy.
7. Send a real test submission from the deployed site and confirm it arrives in the inbox (and check spam).

Do not put secret API keys in Vite variables. `VITE_*` values are public in the browser. For production email delivery, use a backend or a provider's public form endpoint with provider-side spam controls.

## Personal content
- Project titles, links, stacks, descriptions: `src/data/projects.js`
- Page sections, skill groups, services, workflow and contact details: `src/App.jsx`
- Theme, responsive breakpoints and layouts: `src/styles.css`
- Resume: `public/Yasar-M-Resume.pdf`

Update personal details only with verified information. Project descriptions include caveats where the supplied live deployment and repository association has not yet been verified.

## Live projects
The five supplied demo URLs are preserved exactly:
- https://spendora-three.vercel.app/
- https://feast-fete.vercel.app/
- https://yasar-m-portfolio.vercel.app/
- https://yasar-portfolio-swart.vercel.app/
- https://marvel-xmen-cinematic-universe.vercel.app/

GitHub links point to the supplied repositories. The README for Feast & Fete, Expense Tracker, Marvel × X-Men and 3D-PortFolio was retrieved through the connected GitHub integration during project preparation. A README retrieval for other requested repositories returned 404 and those details have not been fabricated.

## Cinematic animation pass
The hero includes a cinematic artwork backdrop, layered entrance motion, ambient glow, and floating 3D scene. Project cards and interface artwork have subtle perspective/hover motion, charts animate in, and interactive controls receive glow/shine feedback. Global CSS includes a `prefers-reduced-motion` fallback. Keep animations subtle on mobile to preserve readability and performance.

## 3D scene
`src/components/Scene.jsx` uses React Three Fiber / Three.js to render a wireframe icosahedral core, orbital rings, floating interface panels, lights and a grid. It is not a static image. The canvas uses a capped device-pixel ratio to help performance.

## Validation status
- Source files and project structure created.
- Exact five demo URLs are present in project data.
- Latest supplied resume PDF copied into `public/Yasar-M-Resume.pdf`; profile and experience content updated from that resume.
- Build has **not** been run in this environment; run `npm install` and `npm run build` locally to verify dependency resolution and production compilation.
- Live demo availability and screenshots were not independently browser-tested. Project cards therefore use original CSS illustrations rather than claiming to be screenshots of the real products.
- Form submission reaches the inbox only after a real provider endpoint is configured and verified; otherwise it opens a prefilled email draft. The generated package cannot configure a private provider account on the user’s behalf.
- Responsive CSS includes mobile, tablet, desktop and wide-screen layouts. Validate with browser device emulation before deployment.

## Deploy
Deploy to Vercel, Netlify or another static host:
1. Push this folder to a Git repository.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Add `VITE_FORMSPREE_ENDPOINT` only if using a configured form endpoint.
5. Deploy and test the five project links, resume download and contact form on the production domain.

## Notes
This project avoids fabricated testimonials, pricing, metrics, certifications and client claims. The certification area explicitly requests verified certificate information instead of inventing credentials.
