# NextLevel Backend

A Strapi-based API powering the NextLevel e-commerce platform. It manages products, categories, orders, and media, integrates with Stripe for payments and Clerk for authentication, uses SQLite in development and PostgreSQL in production, and is deployed on Render.

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Environment Variables](#environment-variables)
- [Setup](#setup)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Authentication](#authentication)
- [Payments](#payments)
- [Media & File Storage](#media--file-storage)
- [Database](#database)
- [API](#api)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Overview
NextLevel Backend is a headless Strapi API for a full-stack e-commerce experience. It handles catalog data, orders, authentication, payments, and media storage with production-ready defaults.

## Architecture
- **Strapi** for content and API.
- **Clerk** for authentication and user management.
- **Stripe** for payments and webhooks.
- **Cloudinary** for media storage.
- **SQLite** for local development; **PostgreSQL** for production.
- Deployed on **Render**.

```
Client (Next.js) → Clerk → API (Strapi) → DB (SQLite dev / Postgres prod) → Stripe → Cloudinary
```

## Tech Stack
- Runtime: Node.js
- Framework: Strapi
- Auth: Clerk
- Payments: Stripe
- Media: Cloudinary
- DB: SQLite (dev), PostgreSQL (prod)
- Deploy: Render

## Environment Variables
Create a `.env` (local) with at least:
- `HOST=0.0.0.0`
- `PORT=1337`
- `APP_KEYS=...` (comma-separated)
- `API_TOKEN_SALT=...`
- `ADMIN_JWT_SECRET=...`
- `TRANSFER_TOKEN_SALT=...`
- `DATABASE_CLIENT=sqlite` (or `postgres`)
- `DATABASE_FILENAME=./data.db` (if sqlite)
- `DATABASE_HOST=...`
- `DATABASE_PORT=5432`
- `DATABASE_NAME=...`
- `DATABASE_USERNAME=...`
- `DATABASE_PASSWORD=...`
- `DATABASE_SSL=false` (Render Postgres often `true`)
- `CLOUDINARY_NAME=...`
- `CLOUDINARY_KEY=...`
- `CLOUDINARY_SECRET=...`
- `STRIPE_SECRET_KEY=...`
- `STRIPE_WEBHOOK_SECRET=...`
- `CLERK_PUBLISHABLE_KEY=...`
- `CLERK_SECRET_KEY=...`

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure `.env` with the variables above.
3. (Optional) Seed or import data via Strapi admin or programmatic scripts.

## Running Locally
```bash
npm run develop
# or
npm run start
```
- Default: `http://localhost:1337`
- Local DB: SQLite (`DATABASE_CLIENT=sqlite`).

## Deployment
- Target: Render
- Use `DATABASE_CLIENT=postgres` and set Postgres connection vars.
- Ensure `APP_KEYS`, `ADMIN_JWT_SECRET`, `API_TOKEN_SALT`, `TRANSFER_TOKEN_SALT` are set.
- Set Stripe, Clerk, Cloudinary keys in Render dashboard env vars.
- Expose `STRIPE_WEBHOOK_SECRET` and configure Stripe webhook URL to your Render hostname.

## Authentication
- Provider: Clerk
- Public key: `CLERK_PUBLISHABLE_KEY`
- Server key: `CLERK_SECRET_KEY`
- Typical flow: frontend obtains Clerk session → API checks Clerk JWT/session.

## Payments
- Provider: Stripe
- Keys: `STRIPE_SECRET_KEY`, webhook `STRIPE_WEBHOOK_SECRET`
- Webhooks: configure in Stripe to point to `/api/stripe/webhook` (or the configured Strapi endpoint).

## Media & File Storage
- Provider: Cloudinary
- Vars: `CLOUDINARY_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET`
- Uploads and transformations handled via Strapi Cloudinary plugin/provider.

## Database
- Dev: SQLite (file-based, `DATABASE_FILENAME`).
- Prod: PostgreSQL (Render). Enable SSL if required by Render (`DATABASE_SSL=true`).

## API
Common entities:
- Products: CRUD, pricing, media, categories.
- Categories: hierarchical classification.
- Orders: line items, totals, payment status.
- Users: via Clerk; roles/permissions enforced in Strapi.

(See Strapi admin for generated endpoints and permissions.)

## Testing
- Add integration tests for critical flows (auth, payments, order creation).
- Stripe webhook tests: use Stripe CLI to forward events locally:
  ```bash
  stripe listen --forward-to localhost:1337/api/stripe/webhook
  ```

## Troubleshooting
- **DB connection errors (prod)**: verify Postgres vars and SSL setting.
- **Auth failures**: check Clerk keys and frontend session passing.
- **Stripe webhook failures**: confirm webhook secret and endpoint URL.
- **Media upload issues**: validate Cloudinary credentials and Strapi upload provider config.

## License
MIT
