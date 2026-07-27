# Pro IT Help — Version 6.1 Cloudflare Ready

This repository is configured for Cloudflare Workers Static Assets.

## Deployment structure

- `public/` contains every file Cloudflare should publish.
- `wrangler.jsonc` points `assets.directory` to `./public`.
- `.assetsignore` excludes Git history, dependencies, ZIP archives, and build metadata.

This prevents Cloudflare from treating `.git/objects/*.pack` files as website assets and avoids the 25 MiB per-asset deployment error.

## Cloudflare build settings

Use either:

- Build command: `npm install`
- Deploy command: `npm run deploy`

Or, when Cloudflare automatically installs dependencies:

- Deploy command: `npx wrangler deploy`

The root directory should remain the repository root.

## Adding gallery photographs

Upload photographs under:

`public/assets/images/photography/<category>/`

The GitHub gallery configuration is already updated to use the `public/` path.


## Recent enhancements
- Branded favicon and Apple touch icon
- Dark/light theme switcher with saved preference
- Active-section navigation and improved mobile menu accessibility
- Open Graph, Twitter card, canonical, and structured-data metadata
- Refined enterprise experience statement for the NSX-to-Illumio program
- Reduced-motion support and stronger keyboard focus styles

## Automatic deployment from GitHub to Cloudflare
This project is ready for a Git-connected Cloudflare deployment. In Cloudflare, create a new **Workers & Pages** project using **Import a repository**, select this GitHub repository, leave the build command blank, and use `public` as the assets/output directory. Pushes to the production branch will then deploy automatically. A project originally created with Direct Upload may need to be replaced with a new Git-connected project.
