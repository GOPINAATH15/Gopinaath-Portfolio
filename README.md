# Gopinaath A — Portfolio

A dark-themed, glassmorphic personal portfolio built with React + Vite,
Tailwind CSS, and Framer Motion.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 3. Add your resume PDF

Drop your resume file into `public/` and name it:

```
public/Gopinaath_A_Resume.pdf
```

The Navbar and Hero "Download Resume" buttons already point to this path.

## 4. Connect the contact form (EmailJS)

The contact form is wired to EmailJS but ships with placeholder keys, so it
won't actually send email until you connect your own account:

1. Create a free account at https://www.emailjs.com
2. **Email Services** → add a service (e.g. Gmail) → copy the **Service ID**
3. **Email Templates** → create a template using these variable names in the
   template body: `{{from_name}}`, `{{from_email}}`, `{{message}}` → copy the
   **Template ID**
4. **Account → General** → copy your **Public Key**
5. Open `src/components/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```

with your real values. (Optional: move these into a `.env` file using Vite's
`import.meta.env.VITE_*` convention if you don't want them hard-coded.)

## 5. Edit content

All resume content (name, summary, skills, experience, projects, education)
lives in one place: `src/data/resume.js`. Update that file and every section
updates automatically — no need to touch component files for content changes.

## 6. Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy `dist/` to Vercel, Netlify, GitHub Pages, or
any static host.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx        # typing effect + terminal-style code card
│   ├── About.jsx
│   ├── Skills.jsx      # animated progress bars
│   ├── Experience.jsx  # commit-log styled timeline
│   ├── Projects.jsx    # glassmorphism project cards
│   ├── Education.jsx
│   ├── Contact.jsx     # EmailJS-powered form
│   └── Footer.jsx
├── data/
│   └── resume.js        # all content — edit this to update the site
├── App.jsx
├── main.jsx
└── index.css
```

## Design tokens

- Background: `#0F172A` (base), with softer/deeper elevations for panels and footer
- Primary accent: `#2563EB` (blue), lighter `#60A5FA` for text-on-dark accents
- Secondary accent: `#22D3AA` (used sparingly, e.g. terminal strings, status)
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (code/labels)
