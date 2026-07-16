# Kemal Personal Branding Website

A responsive personal portfolio for Muhammad Irsyad Kemal Pasha Ramadhan. The website presents his background, journey, experience, projects, skills, journal, gallery, and contact information.

Production URL: `https://kemal-business-portfolio.kyairecookstlf.chatgpt.site`

## Run the website

1. Install Node.js 20 or newer.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000` in a browser.

## Edit the content

- General identity and contact information: `content/site.ts`
- Journey and project case studies: `content/journey.ts`
- Journal articles: `content/blog.ts`
- Main visual styling: `app/globals.css`

Most repeated content is stored centrally. Editing one journey item updates the journey timeline, project cards, and its case study page.

## Add original photos

Create `public/images` and place optimized WebP images inside it. Use descriptive filenames such as `hipmi-jejak-budaya-01.webp`. Keep each image below 350 KB when possible. The Gallery page currently uses honest visual placeholders because the source material did not include original photographs.

## Important items before public launch

- Add verified participant, team, partner, and sponsorship metrics.
- Add a LinkedIn URL when available.
- Confirm that the phone number and email may be displayed publicly.
- Replace Gallery placeholders with original documentation.

## Build for production

Run `npm run build`, then `npm start`.
