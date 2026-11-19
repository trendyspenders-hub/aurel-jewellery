# AUREL — The World of Adornment

An original luxury editorial jewellery discovery website built with Next.js, React and TypeScript.

## Run locally

1. Install Node.js 20+ (Node 22 recommended).
2. Run `npm install` in this directory.
3. Copy `.env.example` to `.env.local` and set a long random `ADMIN_SECRET`.
4. Run `npm run dev` and open http://localhost:3000.
5. Run `npm run build` before deploying.

## What works

- Editorial homepage and responsive navigation.
- Directory search over **674 unique imported business records**; filters by country and specialty; pagination.
- Unique business profile routes, real sourced contact actions, source-safe unconfirmed status.
- City discovery based on actual imported records.
- Local-device favourites.
- Submission and claim request forms with server-side validation and persistent SQLite storage.
- Password-gated read-only admin request review (`/admin`).
- Metadata, responsive design and basic accessibility.

## Data provenance

Imported from `Jewelry_Prospects_Global_Expansion_India_Asia.xlsx`, worksheets `All Prospects` and `International Leads`. The other five worksheets contain market planning, sources or overlapping research. 686 source rows yielded 674 unique name+city+country records after merging 12 matching duplicates. All are marked **unconfirmed**. No external verification was performed. See `data/import-report.json`.

Public profiles omit internal notes, lead scores, outreach statuses and private contact people. The original workbook remains untouched.

## Important launch limitations

This is a functional **initial build**, not a security-audited production release. It has not been deployed. The admin area is **read-only** and uses an environment secret, not full multi-user authentication or RBAC. SQLite requires persistent storage and is unsuitable for ephemeral serverless hosts. For public launch, migrate requests and business records to managed Postgres/Supabase, implement administrator authentication and moderation, add rate limiting/CAPTCHA, configure backups and monitoring, conduct security and accessibility audits, verify businesses, review image licensing, and add legal/privacy pages. Forms work only when the server has a writable persistent disk.

Photography is currently externally served via Unsplash URLs; verify licensing and availability before commercial launch. Business cards deliberately use typographic placeholders instead of misattributing photos. The brand name **AUREL** is provisional; trademark and domain availability have not been checked.

## Future production roadmap

- Database-backed CRUD admin, authenticated users and role-based permissions.
- Moderation status updates and secure business verification.
- Search indexing, city/country structured pages, map integration and editorial CMS.
- Licensed media library and business-owned photo uploads.
- Spam protection, API rate limiting, automated QA and deployment pipeline.
