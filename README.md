# Abhishek Sharma — Embedded systems portfolio

A personal engineering portfolio covering embedded sensing, signal processing, clinical software, and the path toward on-device intelligence.

The website implementation is open source under the [MIT License](LICENSE). Personal content and third-party material have separate terms described in [THIRD_PARTY.md](THIRD_PARTY.md).

## Publish with GitHub Pages

This package is ready for GitHub Pages. Hosting requires no application server, or build service. Python is only needed when regenerating the page content locally.

commits that change the published files in `docs/` update the website automatically. Add the live address to the repository's **About → Website** field and to your LinkedIn profile.

Official instructions: [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [configure the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Edit and maintain

- Edit `content.py` for page text, shared header/footer, navigation labels, and the acquisition diagram. Run `python3 content.py` from this folder, then commit both the generator and the resulting HTML files in `docs/`.
- Edit `docs/styles.css` for the main appearance.
- Edit `docs/navigation.css` and `docs/navigation.js` for the section navigation and scroll progress.
- Put replacement or new images in `docs/assets/` and update their references in `content.py`.

The generated HTML is included, so the first deployment needs no local tools. GitHub Pages serves the generated files; it does not run `content.py`. Direct edits to generated HTML will be overwritten next time the generator runs.

To inspect a local copy, open `docs/index.html` in a browser. The site uses relative links and works without an application backend. Fonts load from Google Fonts with local sans-serif fallbacks. The page content and anchor navigation remain usable without JavaScript.

## Repository contents

| Path | Purpose |
| --- | --- |
| `content.py` | Editable page content and shared markup; Python standard library only |
| `docs/index.html` | Profile, work, experience, publications, and contact |
| `docs/sensing.html` | Embedded measurement case study |
| `docs/etesting.html` | Clinical software and maintenance case study |
| `docs/styles.css` | Main layout, typography, responsive and print styles |
| `docs/navigation.css`, `docs/navigation.js` | Section highlighting and reading progress |
| `docs/assets/` | Attributed project image |
| `LICENSE`, `THIRD_PARTY.md` | Website code license and content/asset attribution |

## Content status

The on-device processing project is ongoing and is distinct from the published work. Firmware, recorded example data, analysis scripts, and technical documentation are available in the [ESP32 sensing pipeline repository](https://github.com/abhisheksharma0217/esp32-sensing-pipeline). That repository records the implementation qualifications, contributor attribution, benchmark scope, and licensing status. This repository contains the portfolio website.

## Reusing the design

Refer to the MIT copyright and license notice when reusing the website implementation. Follow the separate terms for the research image and other credited material in `THIRD_PARTY.md`.
