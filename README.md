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
6. Build output directory: `/` or leave the default root setting.
7. Deploy.

## Custom domain
In the Cloudflare Pages project, open Custom Domains and add:
- `pro-it-help.com`
- `www.pro-it-help.com`

Let Cloudflare create the website DNS records. Keep existing MX, SPF, DKIM, DMARC, Microsoft, and Zoho verification records.

## Update AI project links
Open `ai-projects.html`. Replace `href="#"` placeholders with GitHub, live demo, architecture, and case-study links.

## Add photography
Create `assets/images/photography/`, copy your photographs there, and replace the placeholder gallery blocks in `photography.html` with:

```html
<div class="photo"><img src="assets/images/photography/example.jpg" alt="Description of photograph"></div>
```

## Update the logo
Replace `assets/images/cf-logo.png` with a newer logo using the same filename.

## Résumé
The downloadable résumé is stored at `assets/docs/Charles-Fleming-Resume-2024.docx`.
