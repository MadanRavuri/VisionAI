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

