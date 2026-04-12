# Portfolio

Personal portfolio website built with React and Tailwind CSS. Deployed on Vercel.

## Tech Stack

- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [react-icons](https://react-icons.github.io/react-icons/) — icons

## Project Structure

```
src/
├── data/
│   └── profile.js       # All personal content lives here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
└── index.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Customising

All personal content is centralised in `src/data/profile.js`. To set up for a new person:

1. Update `src/data/profile.js` with their personal details
2. Add their headshot as `public/portrait.jpg`
3. Add their CV as `public/resume.pdf` to enable the Resume button in the navbar
4. Set `VITE_APP_URL` in `.env` to the deployed URL
5. Update `og:title` and `og:description` in `index.html` (social crawlers don't run JS)
6. Add a social preview image as `public/preview.jpg`
7. Deploy to Vercel (push to `main` triggers automatic deployment)

## Sections

| Section    | Description                                |
| ---------- | ------------------------------------------ |
| Hero       | Name, tagline, bio, CTA buttons            |
| About      | Bio paragraphs, interests, education       |
| Skills     | Certifications, tech stack, publications   |
| Experience | Work history timeline                      |
| Projects   | Featured projects with tech tags and links |
| Blog       | Writing placeholder                        |
| Contact    | Email CTA, social links                    |
