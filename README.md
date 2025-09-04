# Vercel Deployment

## How to Deploy

1. Push your code to GitHub (or connect your repo to Vercel).
2. Vercel will auto-detect the frontend (Vite) and backend (Express in `server/index.js`).
3. The `vercel.json` config is already set up for static frontend and API routes.

## Environment Variables

- Set your MongoDB URI and any secrets in Vercel Project Settings > Environment Variables.
- Example: `MONGODB_URI`, `NODE_ENV`, etc.

## File Uploads

- **Warning:** File uploads are NOT persistent on Vercel serverless functions. Uploaded files will not be saved. Use a cloud storage service (S3, etc.) for production uploads.

## Build & Output

- Vercel will run `vite build` and serve the output from `/dist`.
- API routes are handled by Express in `server/index.js`.

## Local Development

- Run `npm run dev` for frontend.
- Run `npm run server` for backend (local only).

---
VisionAI - Vercel Deployment Notes

One-time setup
1. Push this repo to GitHub.
2. In Vercel, Import the project from GitHub.
3. Set Environment Variables in Vercel (Project Settings → Environment Variables):
   - NODE_ENV=production
   - VERCEL=1
   - MONGODB_URI=<your Mongo connection string>
   - BREVO_EMAIL=<your Brevo/SMTP email>
   - BREVO_API_KEY=<your Brevo API key>
   - COMPANY_EMAIL=noreply.visionai@gmail.com

Build settings
- Framework preset: Other
- Root Directory: /
- Build Command: npm run build
- Output Directory: dist

Notes
- API is served via serverless functions at /api/* and the SPA is served from dist.

Local
- Frontend: npm run dev
- Server: npm run server

