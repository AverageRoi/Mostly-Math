# Mostly Math

*A collection of mathematical digressions.*

A minimal, deliberately close-to-default **Hugo Stack** site for personal mathematical investigations. This is not a course or a series of formulaic tutorials; each article follows a question wherever the calculation takes it.

There are three complete notes:

- Infinite Products and the Riemann Zeta Function
- Iterated Logarithms
- Can Infinitely Many Lines Become a Curve?

## Deploy to Netlify (no Node, no Python, no Actions)

1. Extract the ZIP, then commit **the contents of `mostly-math/`** at the root of a new GitHub repository.
2. In Netlify choose **Add new project → Import an existing project → GitHub** and select the repository.
3. Netlify reads `netlify.toml` and builds the site with **Hugo Extended**. No GitHub Actions, npm packages or Python installation are needed.
4. Future commits trigger automatic rebuilds.

The [official Stack starter](https://github.com/CaiJimmy/hugo-theme-stack-starter) loads the Stack theme through a **Hugo module**. We retain that approach and pin `github.com/CaiJimmy/hugo-theme-stack/v4` at `v4.0.3` in `go.mod`/`go.sum`. Netlify must be able to access Go modules during the build.

The site uses the **original Stack dark palette and typography** with the light mode switch disabled. A small `custom.scss` file styles the typographic Gamma mark, source-image presentation, welcome note and graph controls; it does not replace the theme's appearance. Every article now references an existing Wikimedia Commons cover image, credited in About and LICENSES.md. The cover images load from Wikimedia, so they require internet access.

## Interactive graphing

The articles embed [JSXGraph](https://jsxgraph.org/) v1.14.0 from a version-pinned CDN. `static/js/mostly-graphs.js` calculates the series and curves directly in the browser. If the CDN cannot load, an independent built-in Canvas implementation renders the same graphs, including the sliders. No chart images are generated, and future posts reuse the same plotting component.

Graph types currently supported:

- `products` : partial sums and products of 1/n²;
- `logarithms` : the transformed `u / log10(u)` plot, with asymptote and minimum;
- `harmonic` : harmonic points joined by line segments, with a logarithmic comparison.

To embed one in a new post, set `graphs: true` in its YAML front matter and insert:

```md
{{< mm-graph kind="harmonic" >}}
An optional caption describing the plotted relationships.
{{< /mm-graph >}}
```

The shortcode is in `layouts/_shortcodes/mm-graph.html`; the graph implementation is in `static/js/mostly-graphs.js`. The page loads the graphing assets only for posts with `graphs: true`.

## Add a notebook entry

Make a folder such as `content/post/a-new-question/` and add `index.md`:

```md
---
title: "A New Question"
description: "A short, optional description."
slug: "a-new-question"
date: 2026-10-21
math: true
graphs: true
---

One thing led to another...

\[
\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{6}.
\]
```

All equations are rendered by Stack's existing KaTeX integration. Leave out `graphs: true` and the shortcode if the note does not need a plot. There is **no prescribed article structure**.

## Project map

```text
assets/img/gamma.svg                 Minimal typographic Gamma mark
assets/scss/custom.scss             Small overrides using Stack's default tokens
config/_default/                    Hugo settings, menus, math support
content/post/                       Three Markdown articles
content/page/about/                 About page
layouts/home.html                   Compact welcome card + Stack article list
layouts/_shortcodes/mm-graph.html   Reusable figure/slider markup
layouts/_partials/head/custom.html  Conditional JSXGraph loading
static/js/mostly-graphs.js          Runtime plots + Canvas fallback
netlify.toml                        Hugo build on Git commits
```

## Local development (optional)

If you ever decide to run Hugo locally, install Hugo Extended and Go and run `hugo server` at the repository root. **But you do not need them** to review the accompanying standalone browser preview or to deploy to Netlify.

## Editorial / mathematics notes

The three texts reconstruct earlier notebook discussions, not unseen notebook pages. The iterated-logarithm post uses base-ten logarithms, as in the original notebook, and shows the full direct quotient-rule derivative before simplification. The `u=e` stationary point is a minimum only on the positive branch; at `s=1` the zeta series diverges. These distinctions are intentional.

## Credits

- [Hugo Stack](https://github.com/CaiJimmy/hugo-theme-stack) by Jimmy Cai (GPL-3.0; used as an external Go module).
- [Hugo Stack Starter](https://github.com/CaiJimmy/hugo-theme-stack-starter) (MIT; `LICENSE-STARTER` included).
- [JSXGraph](https://jsxgraph.org/) (MIT / LGPL-3.0-or-later), optionally loaded from CDN.
- The custom plots are calculated at runtime from their formulas and use no generated artwork.
