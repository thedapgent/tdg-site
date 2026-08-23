# The Dapper Gentleman — Website

Custom-suiting business site for The Dapper Gentleman (Brampton, ON).
Built with React + Vite + Tailwind CSS v4.

## Pages
- Home
- About
- Services
- Pricing
- Gallery
- Policies
- Contact (form powered by Formspree)

The "Consulting" nav link goes to the separate consulting subdomain
(https://consulting.thedappergentleman.ca/) rather than a page on this site.

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Go to vercel.com → New Project → import the GitHub repo.
3. Vercel auto-detects Vite — no config changes needed.
4. Deploy.
5. In Project Settings → Domains, add `thedappergentleman.ca` and follow
   Vercel's DNS instructions (usually an A record or CNAME change at your
   domain registrar).

## Updating the contact form

The Formspree endpoint lives in `src/pages/Contact.jsx` at the top of the
file (`FORMSPREE_ENDPOINT`). Replace it there if you ever create a new form.
