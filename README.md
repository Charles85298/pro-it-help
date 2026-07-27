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
