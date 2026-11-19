# AUREL — Vercel launch checklist

## Before deployment

1. Connect your Vercel account and import this project through a GitHub repository or the Vercel CLI.
2. Use Next.js framework detection and `npm run build`. Node.js 22 recommended.
3. Configure `ADMIN_SECRET` securely in Vercel if using admin review, but do not expose `/admin` publicly as a production administration solution.
4. Verify image licensing and loading. Current homepage editorial imagery uses remote Unsplash URLs in `app/globals.css`; imagery is not bundled and availability cannot be guaranteed. Do not represent these photographs as belonging to listed businesses.
5. Check the AUREL name and domain for trademark conflicts before launch.

## Critical limitation

Vercel serverless functions cannot persist this project's SQLite database. Submission and claim POST endpoints intentionally return HTTP 503 on Vercel rather than pretending to save requests. Before enabling these workflows, migrate `lib/db.ts` and request handlers to managed Postgres (e.g., Supabase or Neon), add authentication, abuse protection and an admin review workflow.

## Smoke test

- Open homepage and confirm hero/category/destination images load.
- Search the directory; test country and specialty filters.
- Open multiple business profiles and verify that contact links are sourced.
- Test mobile layout and keyboard navigation.
- Confirm submission/claim forms do not falsely report success.
- Run a production build and security review before promoting the site.

No live deployment is claimed by this package.
