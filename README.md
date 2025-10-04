# Retrocide Microsite

Static retro/synthwave microsite to showcase the **Retrocide** monospaced font (no descenders) crafted by **orbit**.

## Features

- CRT-inspired chrome with animated scanlines, glitch title, neon glow, cursor trails, and Matrix footer.
- Font showcase blocks with code samples, terminal snippets, and descender highlight.
- Retro ASCII banner rendered with the Retrocide typeface.
- Download buttons for `.ttf`, `.otf`, and `.woff2` font bundles.
- Konami code Easter egg that activates a hue rotation.

## Project structure

```
retrocide/
├── index.html     # Landing page
├── style.css      # Neon synthwave styling
├── script.js      # Interaction & effects (glitch, matrix rain, konami)
├── Retrocide.ttf  # Font file (TrueType)
├── Retrocide.otf  # Font file (OpenType)
├── Retrocide.woff2# Font file (Web optimized)
├── LICENSE.md
├── LICENSE.txt
└── README.md
```

## Local preview

Use any static file server, or simply open `index.html` directly in a browser. For a quick local server:

```bash
cd retrocide
python -m http.server 5500
```

Then visit [http://localhost:5500](http://localhost:5500).

## GitHub Pages deployment

GitHub Pages serves files from the repository root (for **main** branch deployment) or from the `gh-pages` branch/`docs/` folder. With the current layout you can:

1. Push the repository to GitHub.
2. In the repository settings, under **Pages**, select:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Save — the site will be available at `https://<username>.github.io/retrocide-mono/` once the build finishes.

All assets are referenced with relative paths, so no changes are required.

## Optional improvements

- Add a `preview.png` screenshot (current README references one) for a quick visual on GitHub.
- Create a GitHub Actions workflow for automated deploys to a `gh-pages` branch if desired.
- Provide a minified build or additional font specimens as separate pages.

## License

See [`LICENSE.md`](./LICENSE.md) and [`LICENSE.txt`](./LICENSE.txt) for font licensing terms shared upstream.
