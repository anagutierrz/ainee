# Ainee Pimentel — Demo landing page

Static, Vercel-ready demo built from the supplied brief and brand assets.

## Project structure

The deployable files are already at the project root:

- `index.html`
- `styles.css`
- `script.js`
- `vercel.json`
- Image assets are stored directly in the project root
- `README.md`

This structure can be uploaded directly to a GitHub repository or imported into Vercel with no build step.

## Visual-reference images

The demo includes generated wedding imagery in the project root to show the intended art direction while real, client-approved wedding photography is pending. The interface labels these images as demo/reference material so they are not presented as Ainee Pimentel's actual weddings.

Files:

- `hero-wedding-reference.webp`
- `wedding-reference-01.webp`
- `wedding-reference-02.webp`
- `wedding-reference-03.webp`

The supplied professional portrait and logo remain in use:

- `ainee-pimentel.webp`
- `logo-ainee-pimentel.webp`

## Run locally

```bash
npx serve .
```

Or simply open `index.html` in a browser for a quick preview.

## Deploy to Vercel

### GitHub → Vercel

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In Vercel choose **Add New Project** and import that repository.
4. Framework Preset: **Other**.
5. No build command is required.
6. Deploy.

### Vercel CLI

From this directory:

```bash
vercel
```

The demo is set to `noindex, nofollow` in both HTML and Vercel response headers.

## Pending before final release

- Approved biography, experience and differentiators
- Confirmed services and locations served
- Real wedding photography/video with usage permission
- Authorized testimonials
- Instagram, email and phone
- Official Aisle Planner embed instructions/code, if available
- Final domain/hosting details
- Blog/CMS decision
