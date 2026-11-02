# Noa Aharon · Portfolio

Personal portfolio built with React, Vite and Tailwind CSS. Live at https://noaharon11.github.io.

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `src/components/` – one component per section (Hero, About, Projects, …)
- `src/data/` – the content itself (projects, experience, skills, links). Edit these to update the site.
- `public/` – static files served as-is (résumé PDF, favicon)

## Deploy

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`.
In the repo settings, **Pages → Source** must be set to **GitHub Actions**.
