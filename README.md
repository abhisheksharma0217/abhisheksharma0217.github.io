# Abhishek Sharma — Embedded systems portfolio

A personal engineering portfolio covering embedded sensing, signal processing, clinical software, and the path toward on-device intelligence.

The website implementation is open source under the [MIT License](LICENSE). Personal content and third-party material have separate terms described in [THIRD_PARTY.md](THIRD_PARTY.md).

## Publish with GitHub Pages

This package is ready for GitHub Pages. Hosting requires no application server, paid plan, or build service. Python is only needed when regenerating the page content locally.

1. Sign in to the GitHub account that should own the portfolio. Create a **public** repository named `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with that account's exact username. For example, the account `octocat` uses `octocat.github.io`. Leave the README, license, and .gitignore initialization options off; this package supplies them. If that repository already exists, use it and integrate these files without overwriting unrelated work.
2. Unzip this package. Upload the **contents inside** `abhishek-portfolio-github/` into the repository, preserving the folders. In an empty repository, use **uploading an existing file**; otherwise use **Add file → Upload files**. Commit the files to `main`. The repository should contain `docs/index.html` directly, not `abhishek-portfolio-github/docs/index.html`. Upload the extracted files, not the ZIP itself.
3. Confirm that `docs/.nojekyll` is present. If your file picker omitted it, use **Add file → Create new file**, enter `docs/.nojekyll`, and commit an empty file. It tells GitHub to serve the prepared website without Jekyll processing.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/docs**, then **Save**. If you used a differently named branch, select that branch instead.
5. Wait for the deployment to finish. The **Pages** settings show the live address; the **Actions** tab shows deployment progress and any errors. For a user repository named as above, the address is `https://YOUR-USERNAME.github.io/`.

After this setup, commits that change the published files in `docs/` update the website automatically. Add the live address to the repository's **About → Website** field and to your LinkedIn profile.

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

The profile reflects September 2026: PhD research is complete, with submission and defense pending. The October 2026 appointment with Prof. Oliver Amft is upcoming. Keep those statements current as milestones are completed.

The on-device processing project is ongoing and is distinct from the published journal evidence. This repository contains the portfolio website; project firmware, analysis code, datasets, and unpublished manuscripts are not included. Link the ESP32 handover repository after it has been prepared and published, retaining contributor attribution and reproducible examples.

## Your own domain

The free GitHub address is sufficient for launch. A domain you own can be connected later through the repository's Pages settings. See [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages). No domain or GitHub username is hardcoded into this website.

## Reusing the design

Keep the MIT copyright and license notice when reusing the website implementation. Replace the personal identity, biography, contact details, and project claims with your own. Follow the separate terms for the research image and other credited material in `THIRD_PARTY.md`.
