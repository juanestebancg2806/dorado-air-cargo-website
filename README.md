# El Dorado Air Cargo S.A.S. 🌍✈️

**Official website for El Dorado Air Cargo S.A.S.**, a Colombian logistics and air cargo company with over 30 years of experience in national and international freight transportation.

Built with [Astro](https://astro.build/) + [React](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/), optimized for performance and SEO.

---

## 🔗 Live Site

[https://www.eldoradoaircargo.com](https://www.eldoradoaircargo.com) 

---

## 📦 Tech Stack

- **Astro** — Static Site Generator (SSG)
- **React** — UI components
- **Tailwind CSS** — Utility-first styling
- **Astro Icon** — Icon integration
- **@astrojs/sitemap** — Auto-generated sitemaps
- **SEO Optimized** — Meta tags, canonical URLs, `robots.txt`, `llm.txt`, JSON-LD structured data

---

## 📁 Project Structure

```text
├── public/              # Static assets (robots.txt, images, favicon, etc.)
├── src/
│   ├── components/      # Reusable components (Navbar, Footer, etc.)
│   ├── layouts/         # MainLayout with head meta tags
│   ├── pages/           # Routes: /, /servicios, /contacto, etc.
│   └── styles/          # Global styles with Tailwind
├── astro.config.mjs     # Astro project config (includes sitemap and site URL)
└── tsconfig.json        # TypeScript config
```
---

## 🚀 Running

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start dev server**:
    ```bash
   npm run dev #This will start the site at http://localhost:4321 by default.
   ```
  

3. **Build for production:**:
    ```bash
   npm run build #The static output will be generated in the dist/ folder.
   ```
  

## 🧠 SEO & Accessibility

- ✅ Meta title and description for each page
- ✅ Canonical URLs to prevent duplicate content
- ✅ Open Graph and Twitter card tags for social sharing
- ✅ JSON-LD for structured organization data
- ✅ `sitemap.xml` and `robots.txt` for search engine indexing
- ✅ `llm.txt` for large language model (AI) crawler permissions
- ✅ Descriptive and optimized `alt` attributes on all images
- ✅ Accessible markup and responsive layout

## 📄 Sitemap & Robots

- **Sitemap**: Automatically generated using `@astrojs/sitemap`
  - Output: `/sitemap-index.xml` and `/sitemap-0.xml`
- **robots.txt**: Located in `public/robots.txt`
  - Allows search engines to index all content
  - Points to the sitemap URL
- **llm.txt**: Located in `public/llm.txt`
  - Grants permission to LLM crawlers for indexing

