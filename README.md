# pro-it-help.com portfolio website

Static website for Charles Fleming, ready for GitHub and Cloudflare Pages.

## Upload to GitHub
1. Create a GitHub repository, such as `pro-it-help-website`.
2. Upload everything in this folder to the root of the repository.
3. Commit the files.

## Connect Cloudflare Pages
1. Cloudflare Dashboard → Workers & Pages.
2. Create application → Pages → Connect to Git.
3. Select the GitHub repository.
4. Framework preset: `None`.
5. Build command: leave blank.
6. Build output directory: `public`.
7. Deploy.

## Custom domain
In the Cloudflare Pages project, open Custom Domains and add:
- `pro-it-help.com`
- `www.pro-it-help.com`

Let Cloudflare create the website DNS records. Keep existing MX, SPF, DKIM, DMARC, Microsoft, and Zoho verification records.

## Update AI project links
Open `ai-projects.html`. Replace `href="#"` placeholders with GitHub, live demo, architecture, and case-study links.

## Add photography
Place photographs in the matching category folder under `public/assets/images/photography/`. The current galleries are populated from `public/assets/js/gallery-data.js`.

## Update the logo
Replace `assets/images/cf-logo.png` with a newer logo using the same filename.

## Résumé
The downloadable résumé is stored at `assets/docs/Charles-Fleming-Resume-2024.docx`.

## Photography folder organization

The photography portfolio is divided into these folders:

- `assets/images/photography/arizona-landscapes/`
- `assets/images/photography/people/`
- `assets/images/photography/architecture/`
- `assets/images/photography/nature-detail/`
- `assets/images/photography/night-photography/`
- `assets/images/photography/travel-places/`

To add a photograph:

1. Copy the image into its matching folder.
2. Open `assets/js/gallery-data.js`.
3. Add the filename, title, and alternative text to that category's `photos` array.
4. Commit and push the changes to GitHub. Cloudflare Pages will redeploy automatically.

Each category card on `photography.html` opens the category in `gallery.html`. The gallery includes a full-size lightbox with previous/next navigation and keyboard controls.

## Theme and capability ticker
The site includes a Light/Dark button in the upper-right corner. The visitor's choice is saved in the browser and used on every page. The homepage also includes a continuously scrolling capability ticker; hovering pauses it, and reduced-motion browser settings disable the animation.
