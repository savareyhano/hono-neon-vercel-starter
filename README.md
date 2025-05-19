# Bun Hono Neon Vercel Starter

A starter template for building web applications using Hono, Neon (Serverless Postgres), Drizzle ORM, and Bun, ready for deployment on Vercel. Includes Google OAuth2 authentication.

## ✨ Features

- **Hono:** Lightweight, simple, and ultrafast web framework.
- **Neon:** Serverless Postgres database.
- **Drizzle ORM:** TypeScript ORM for SQL databases.
- **Vercel:** Optimized for Vercel deployment.
- **Bun:** Fast JavaScript runtime, bundler, and package manager.
- **Google OAuth 2.0:** Secure authentication via Google.
- **JWT Authentication:** Access tokens stored in HTTPOnly cookies.
- **Zod Validation:** For request and environment variable validation.
- **Basic API Endpoints:**
  - Login with Google
  - Get current logged-in user
  - Logout

## 🥞 Tech Stack

- [Hono](https://hono.dev/)
- [Neon](https://neon.tech/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Vercel](https://vercel.com/)
- [Bun](https://bun.sh/)
- [Zod](https://zod.dev/)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/docs/installation) installed
- [Vercel CLI](https://vercel.com/docs/cli) installed
- A [Neon](https://neon.tech/) account and database project.
- A [Google Cloud Platform](https://console.cloud.google.com/) project with OAuth 2.0 credentials.

### Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/savareyhano/hono-neon-vercel-starter.git
    cd hono-neon-vercel-starter
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Set up environment variables:**
    Create a `.env` file by copying `.env.example`:

    ```bash
    cp .env.example .env
    ```

    Fill in the required values in `.env`:

    - `CORS_ORIGIN`: Your frontend application's URL (e.g., `http://localhost:3000`).
    - `FRONTEND_URL`: URL to redirect to after successful login (e.g., `http://localhost:3000/dashboard`).
    - `DATABASE_URL`: Your Neon database connection string (Pooled connection string).
    - `ACCESS_TOKEN_SECRET`: A strong secret string for signing JWTs.
    - `ACCESS_TOKEN_EXPIRE_IN_MINUTES`: Expiration time for access tokens.
    - `GOOGLE_OAUTH_REDIRECT_URL`: Your backend's Google OAuth callback URL (e.g., `http://localhost:3000/api/login/google/callback` for local dev, or your Vercel deployment URL).
      - Ensure this URL is added to your "Authorized redirect URIs" in Google Cloud Console.
    - `GOOGLE_CLIENT_ID`: Your Google OAuth Client ID.
    - `GOOGLE_CLIENT_SECRET`: Your Google OAuth Client Secret.

4.  **Database Setup (Drizzle ORM & Neon):**
    Push your Drizzle schema to your Neon database:
    ```bash
    bun run db:push
    ```
    _(Alternatively, if you have migration files, use `bun run db:migrate`)_

### Running Locally

Start the development server (uses Vercel CLI):

```bash
bun start
```

This will typically start the server at `http://localhost:3000`.

## 📜 Available Scripts

- `bun start`: Starts the development server using `vercel dev`.
- `bun run deploy`: Deploys the application to Vercel.
- `bun run db:push`: Pushes Drizzle schema changes to the database (for schema prototyping).
- `bun run db:generate`: Generates Drizzle migration files based on schema changes.
- `bun run db:migrate`: Applies pending Drizzle migrations to the database.
- `bun run db:studio`: Opens Drizzle Studio to browse your database.

## 📖 API Documentation

Detailed API endpoint documentation can be found in [`/docs/api.md`](./docs/api.md).

Key endpoints include:

- `GET /api/login/google`: Initiates Google OAuth flow.
- `GET /api/login/google/callback`: Callback URL for Google OAuth.
- `POST /api/logout`: Logs out the current user.
- `GET /api/users/me`: Retrieves details of the currently authenticated user.

## ☁️ Deployment

Deploy to Vercel:

```bash
bun run deploy
```

Ensure all environment variables from your `.env` file are configured in your Vercel project settings.
