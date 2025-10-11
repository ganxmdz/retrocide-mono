# [Retrocide Mono](https://geonot.github.io/retrocide-mono/)

[**Retrocide Mono**](https://geonot.github.io/retrocide-mono/) is a monospaced display font. Every glyph shares the same baseline height—there are no descenders—making the typeface ideal for terminal aesthetics, synthwave UI, and tight typographic grids. Check out the showcase at [https://geonot.github.io/retrocide-mono/](https://geonot.github.io/retrocide-mono/)

## Highlights

- Fully monospaced; perfect alignment in code editors, terminals, and ASCII art.
- No descenders on lowercase glyphs, enabling compact line spacing and retro ticket-printer vibes.
- Optimised for crisp rendering in modern environments with dedicated `.ttf`, `.otf`, and `.woff2` builds.
- Ultra-angular geometry inspired by 80s chrome lettering and hacker title cards.

## Downloads

| Format | File | Notes |
| ------ | ---- | ----- |
| TrueType | [`Retrocide.ttf`](./Retrocide.ttf) | Best general-purpose install for desktop OSes. |
| OpenType | [`Retrocide.otf`](./Retrocide.otf) | Includes full hinting; use if your workflow prefers OTF. |
| WOFF2 | [`Retrocide.woff2`](./Retrocide.woff2) | Compressed for the web while retaining sharp edges. |

## Installation

### Desktop

- **macOS**: Double-click the `.otf` or `.ttf` file and select **Install Font** in Font Book.
- **Windows**: Right-click the font file and choose **Install** (or **Install for all users**).
- **Linux**: Copy the chosen font file to `~/.local/share/fonts/` (per-user) or `/usr/share/fonts/` (system) and run `fc-cache -f -v`.

### Web projects

Place the font files in your project and include a `@font-face` block similar to the one used on the microsite:

```css
@font-face {
   font-family: 'Retrocide';
   src: url('/fonts/Retrocide.woff2') format('woff2'),
          url('/fonts/Retrocide.ttf') format('truetype'),
          url('/fonts/Retrocide.otf') format('opentype');
   font-weight: normal;
   font-style: normal;
   font-display: swap;
}

body {
   font-family: 'Retrocide', monospace;
   letter-spacing: 0.08em;
}
```

## Usage ideas

- Code editors or terminals where consistent baselines are crucial.
- UI dashboards that want a synthwave edge without losing readability.
- ASCII art, trackers, retro HUD mockups, or generative pixel projects that benefit from squared-off glyphs.

For a live specimen and downloadable packages, visit the included microsite (`index.html`). It can be deployed as-is via GitHub Pages.

## Character set

Retrocide Mono ships with:

- Basic Latin (A–Z, a–z, 0–9)
- Punctuation and symbols commonly used in programming
- Mathematical operators and braces `()[]{}`

Because every glyph sits on the same baseline height, characters such as `g`, `p`, `q`, and `y` maintain the clean rectangular rhythm of their uppercase counterparts.

## License

The font is distributed under the license provided in [`LICENSE.txt`](./LICENSE.txt) (plain text) and [`LICENSE.md`](./LICENSE.md) (Markdown). Please review those files for commercial and redistribution terms before bundling Retrocide Mono in your own projects.

## Credits

- Typeface and Microsite by Rome Stone (orbit)
