# MD Adnan Rosul — Academic Portfolio

React + Vite + Bootstrap 5 academic portfolio populated from `Adnan_Rosul_CV.pdf`. It uses the reference repository's array-driven component approach with separate JSON content and an original academic design. Bootstrap is installed through npm and bundled locally; its grid, navbar, buttons, cards, badges, and spacing utilities support the layout. React controls navigation state without Bootstrap JavaScript.

## Run

With Node.js 22 LTS or newer installed:

```sh
npm install
npm run dev
```

Open the URL Vite prints. Build and preview with `npm run build` and `npm run preview`. Upload the contents of `dist/` to a static host. Relative asset paths support GitHub Pages subdirectories. No deployment has been performed.

A local Node runtime is also available in `.tools/node-v22.14.0-win-x64/` on this machine. In PowerShell, add it to PATH for the current session:

```powershell
$env:Path = "$PWD\.tools\node-v22.14.0-win-x64;$env:Path"
npm.cmd run dev
```

## Edit content

Edit **`src/data/portfolio.json`**. Sections are `profile`, `interests`, `research`, `education`, `experience`, `projects`, `skills`, `recognition`, and `leadership`. Add or remove objects in their arrays to add or remove records. Keep IDs unique and use valid JSON: double quotes, no comments, no trailing commas. Rebuild before publishing changes.

Your portrait is set to `images/self_photo.jpg` in `profile.image`. Other image fields are blank. Set `image` to an HTTPS URL or put a file in `public/images/` and use `"image": "images/photo.jpg"`. Update `imageAlt` with descriptive text. Blank images render no placeholder; failed images are hidden. Portrait, institution, organization, thesis and project images are supported. Research interests appear in the Research section, below the hero.

Research and project `links` start empty. Add real resources using:

```json
"links": [
  { "label": "Code", "url": "https://github.com/your-account/project" },
  { "label": "Thesis PDF", "url": "https://example.com/thesis.pdf" }
]
```

Replace `public/Adnan_Rosul_CV.pdf` to update the downloadable CV. If renaming it, update `profile.cv` and the fallback link in `index.html`. Edit `index.html` for search and social metadata.

## Structure

- `src/App.jsx`: page composition and academic sections.
- `src/components/`: hero, navigation, research cards, academic sections and shared components.
- `src/data/portfolio.json`: editable content.
- `src/styles.css`: responsive design, keyboard focus, reduced motion and print styles.
- `public/`: downloadable CV, portrait and favicon.

The old static pages, redirects, styles and legacy directory have been removed. `index.html` is the required Vite entry point. Body text is 18px on desktop and 17px on mobile, with larger labels and controls. The layout uses Bootstrap breakpoints, stacking the hero below 992px and collapsing navigation below 1200px.

The CV is the source of facts. Research is labeled as an undergraduate thesis; no publications or numerical FID results have been invented. Google Scholar was recovered from an embedded PDF hyperlink. Google Fonts have local font fallbacks.
