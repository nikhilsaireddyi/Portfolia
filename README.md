# Portfolia 🚀

A modern, full-stack web application builder and portfolio platform built with cutting-edge technologies. Portfolia is a TanStack-powered app that combines beautiful UI components, real-time database capabilities, and seamless authentication.

**Live Demo:** [https://portfolia-vibex1.vercel.app](https://portfolia-vibex1.vercel.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Deployment](#deployment)
- [Architecture](#architecture)
- [Guidelines](#guidelines)

---

## 🎯 Overview

Portfolia is an **App Builder Workspace** — a sophisticated platform designed as a single source of truth for full-stack web application development. It leverages the TanStack ecosystem for UI routing and state management, combined with powerful backend capabilities using Nitro and PGLite.

The application is built to be:
- **Type-safe**: Full TypeScript support with strict checking
- **Scalable**: Modular architecture ready for feature expansion
- **Modern**: React 19 with the latest frontend tooling
- **Deployable**: Pre-configured for Vercel with database migrations
- **Developer-friendly**: HMR support, comprehensive tooling, and clear conventions

---

## 🛠 Tech Stack

### Frontend
- **React 19.2.0** — Modern UI library with hooks and concurrent features
- **@tanstack/react-router ^1.170.0** — Type-safe routing solution
- **@tanstack/react-start ^1.168.0** — Full-stack framework built on React
- **@tanstack/react-query ^5.101.0** — Powerful data fetching and synchronization
- **@tanstack/react-table ^8.21.0** — Headless UI table component
- **TailwindCSS 4.3.0** — Utility-first CSS framework
- **Radix UI** — Unstyled, accessible component library
  - Dialog, Select, Dropdown, Accordion, Tabs, Tooltip, and more
- **Zustand 5.0.0** — Lightweight state management
- **React Hook Form 7.54.0** — Efficient form handling
- **Zod 4.4.0** — TypeScript-first schema validation
- **Recharts 2.13.0** — Composable charting library
- **Lucide React 0.510.0** — Beautiful SVG icon library
- **Date-fns 4.0.0** — Modern date utility library

### Backend & Database
- **@tanstack/react-start** — Full-stack capabilities with SSR/SSG
- **Nitro 3.0** — Universal JavaScript server framework
- **@electric-sql/pglite ^0.5.4** — Embedded PostgreSQL for local development
- **pg ^8.16.3** — PostgreSQL client
- **Kysely ^0.28.5** — Type-safe SQL query builder
- **Better Auth ~1.6.30** — Modern authentication library
- **jose 6.2.9** — JSON Web Token handling

### Development Tools
- **Vite 8.2.0** — Lightning-fast build tool
- **TypeScript 5.7.0** — Static type checking
- **ESLint 9.20.0** — Code quality and linting
- **Prettier 3.4.0** — Code formatting
- **Playwright 1.62.0** — Browser automation for testing
- **Tailwind CSS Vite 4.3.0** — Optimized Tailwind integration

### DevDependencies Highlights
- `@vitejs/plugin-react` — React Fast Refresh for HMR
- `typescript-eslint` — TypeScript-aware linting
- `lightningcss` — Ultra-fast CSS processor
- `eslint-plugin-react-hooks` — React best practices enforcement

---

## 📁 Project Structure

```
portfolia/
├── .github/                    # GitHub workflows and configuration
├── .grok/                      # Grok Build platform configuration
│   └── app-env.json           # Environment configuration
├── .vercel/                    # Vercel deployment configuration
├── artifacts/                  # Build artifacts and generated files
├── migrations/                 # Database migration files (SQL)
├── public/                     # Static assets
│   └── __grok/                # Platform-specific static files
├── scripts/                    # Build and utility scripts
│   ├── with-app-env.mjs       # Environment wrapper for Vite
│   ├── migrate.mjs            # Database migration runner
│   ├── grok-pwa-plugin.mjs    # PWA plugin for Vite
│   ├── app-env-plugin.mjs     # App environment plugin
│   └── browser-smoke.mjs      # Browser QA testing
├── server/                     # Server-side code
│   └── middleware/            # Express-like middleware
│       └── grok-pwa.ts        # PWA middleware
├── src/                        # Application source code
│   ├── router.tsx             # Route configuration (required)
│   ├── routes/                # File-based routing
│   │   ├── __root.tsx         # Root layout shell
│   │   ├── index.tsx          # Home page
│   │   ├── login.tsx          # Authentication page (if auth enabled)
│   │   └── api/               # API routes
│   │       └── auth/          # Authentication endpoints
│   ├── lib/                   # Shared utilities and helpers
│   │   ├── db.ts             # Database setup and migration
│   │   ├── auth/             # Authentication logic
│   │   │   ├── popup.server.ts # OAuth popup handler
│   │   │   └── client.ts     # Auth client utilities
│   │   └── app-data/         # Application data layer
│   └── styles.css            # Global styles (Tailwind import)
├── .gitignore                # Git ignore rules
├── .prettierrc                # Prettier formatting config
├── eslint.config.mjs          # ESLint configuration
├── package.json               # Project dependencies
├── package-lock.json          # Locked dependency versions
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite build configuration
├── startup.sh                 # Server startup script (required)
├── AGENTS.md                  # Platform guidelines for development
└── README.md                  # This file

```

### Key Directories

- **`src/routes/`** — File-based routing following TanStack Router conventions
- **`src/lib/`** — Reusable utilities, database, and authentication logic
- **`migrations/`** — SQL files for schema versioning (optional, auth/db OFF by default)
- **`public/__grok/`** — Platform branding and PWA assets (do not modify)
- **`server/`** — Backend middleware and server routes (custom routes in `src/routes/api/`)
- **`.grok/`** — Platform-specific configuration (skills, references, environment)

---

## ✨ Features

### Core Capabilities
- **Type-Safe Routing** — End-to-end type safety from router to components
- **Responsive Design** — Mobile-first UI with Tailwind CSS
- **Form Handling** — React Hook Form with Zod validation
- **Data Fetching** — React Query for efficient caching and synchronization
- **State Management** — Zustand for lightweight, reactive state
- **Database Ready** — PGLite for dev, Postgres on production
- **Authentication** — Better Auth integration (optional, opt-in)
- **Dynamic Tables** — TanStack Table for complex data display
- **Charts & Visualizations** — Recharts for business analytics
- **Icons & UI** — Lucide React + Radix UI for polish

### Developer Experience
- **Hot Module Replacement (HMR)** — Vite's instant reload on file changes
- **TypeScript Support** — Full inference and checking across the stack
- **ESLint + Prettier** — Automated code quality and formatting
- **Browser Testing** — Playwright for end-to-end QA
- **Migration System** — Database schema versioning with SQL files
- **PWA Support** — Progressive Web App capabilities with install tutorials

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 22+** — Required for development
- **npm** — Package manager (comes with Node.js)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nikhilsaireddyi/Portfolia.git
   cd Portfolia
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   All dependencies are already listed in `package.json` (React, TanStack, Tailwind, etc.).

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:8080`

4. **Build for Production**
   ```bash
   npm run build
   ```
   Generates optimized output and runs database migrations.

---

## 📜 Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server with HMR (port 8080) |
| `npm run build` | Production build + database migrations |
| `npm run build:dev` | Development-mode build |
| `npm run preview` | Start preview server (port 8081) |
| `npm run preview:restart` | Restart preview server |
| `npm run preview:stop` | Stop preview server |
| `npm run db:migrate` | Run database migrations |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run check:auth` | Verify authentication configuration |
| `npm run test` | Run unit and integration tests |
| `npm run lint` | Run ESLint on all files |
| `npm run format` | Format code with Prettier |

---

## 💻 Development

### Starting the Dev Server

```bash
npm run dev
```

- **Port**: `0.0.0.0:8080` (bound on all interfaces for live preview)
- **HMR**: Enabled — changes auto-reload in the browser
- **Database**: PGLite instance starts automatically if migrations exist

### Project Scripts

#### `scripts/with-app-env.mjs`
Wraps Vite to inject environment variables including `VITE_AUTH_ENABLED` from `.grok/app-env.json`.

#### `scripts/migrate.mjs`
Runs SQL migrations from the `migrations/` directory using Kysely.

#### `scripts/browser-smoke.mjs`
QA tool that audits the app on desktop (1024×768) and mobile (390×844):
```bash
node scripts/browser-smoke.mjs
```
Outputs JSON with rendering status, console errors, and visual screenshots.

### Vite Configuration

The `vite.config.ts` is pre-configured with:
- **TanStack Start Plugin** — Full-stack file-based routing
- **React Fast Refresh** — HMR for React components
- **Tailwind CSS 4.3** — Optimized CSS build
- **Auth Popup Middleware** — Handles OAuth in dev
- **PGLite Bootstrap** — Initializes database on startup
- **PWA Plugin** — Install tutorial and branding

**Never manually edit Vite config unless upgrading TanStack versions — consult `AGENTS.md` first.**

### TypeScript

- **Configuration**: `tsconfig.json` with strict mode and path aliases
- **Checking**: `npm run typecheck` or `tsc --noEmit`
- **Path Alias**: `@/` maps to `src/`

### Styling

- **Framework**: TailwindCSS 4.3 with Vite plugin
- **CSS Entry**: `src/styles.css` imports `@import "tailwindcss";`
- **Components**: Radix UI + custom Tailwind utilities
- **Icons**: Lucide React for SVG icons

---

## 🗄️ Database & Migrations

### Setup (Optional — Auth/DB OFF by Default)

Enable database support only if your app needs:
- Persistent, shared data across sessions
- User accounts (auth)
- Multi-user functionality

### Creating Migrations

1. **Create Migration File**
   ```bash
   # migrations/0001_initial_schema.sql
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     email VARCHAR UNIQUE NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

2. **Run Migrations**
   ```bash
   npm run build  # Migrations run automatically
   # or
   npm run db:migrate
   ```

### Query Builder (Kysely)

```typescript
// src/lib/db.ts
import { db } from '@/lib/db';

const users = await db
  .selectFrom('users')
  .selectAll()
  .execute();
```

### PGLite (Dev) vs. PostgreSQL (Prod)

- **Development**: Uses `@electric-sql/pglite` (in-process SQLite-like database)
- **Production (Vercel)**: Connects to PostgreSQL via `DATABASE_URL` environment variable

---

## 🔐 Authentication (Optional)

### Enabling Auth

1. **Set `VITE_AUTH_ENABLED=true`** in `.grok/app-env.json`
2. **Create `src/routes/login.tsx`** and `src/routes/api/auth/$.ts`
3. **Consult `auth` Skill** in `.grok/skills/auth/` for implementation

### Key Files

- `src/lib/auth/client.ts` — Frontend auth utilities
- `src/lib/auth/popup.server.ts` — OAuth popup handler (managed by Vite plugin)
- `src/lib/auth/gate-identity.ts` — Auth gate and middleware

### Better Auth

Uses **Better Auth ~1.6.30**:
- OAuth support (Google, GitHub, etc.)
- JWT-based sessions
- User/profile management
- Server functions: `authMiddleware`, `requireUserId`

```typescript
import { authMiddleware } from '@/lib/auth/gate-identity';

export async function GET(req: Request) {
  const context = await authMiddleware(req);
  if (!context.userId) return new Response('Unauthorized', { status: 401 });
  // Safe to access user data
}
```

---

## 🎨 UI & Styling

### Radix UI Components

Pre-installed and available:
- **Dialog** — Modal dialogs
- **Select** — Dropdown select
- **Accordion** — Collapsible sections
- **Tabs** — Tab navigation
- **Tooltip** — Hover tooltips
- **Dropdown Menu** — Context menus
- **Popover** — Floating panels
- **Progress** — Progress bars
- **Slider** — Input range
- **Alert Dialog** — Confirmation dialogs
- And more...

### Icons (Lucide React)

```tsx
import { AlertCircle, CheckCircle, Heart } from 'lucide-react';

export function MyComponent() {
  return (
    <>
      <AlertCircle size={24} />
      <CheckCircle className="text-green-500" />
    </>
  );
}
```

### Tailwind CSS

Custom utilities available in `src/styles.css`:
```css
@import "tailwindcss";

button, [role="button"] {
  cursor: pointer;
}
```

---

## 🧪 Testing & Quality

### Type Checking
```bash
npm run typecheck
```
Runs `tsc --noEmit` to catch type errors.

### Linting
```bash
npm run lint
```
Checks code against ESLint rules (React hooks, best practices).

### Code Formatting
```bash
npm run format
```
Formats code with Prettier (opinionated, configured in `.prettierrc`).

### Browser Testing (Playwright)
```bash
node scripts/browser-smoke.mjs
```
Generates desktop and mobile screenshots, checks for console errors.

### Unit Tests
```bash
npm run test
```
Runs Node tests in `scripts/**/*.test.mjs` and TypeScript tests in `src/`.

---

## 🚢 Deployment

### Vercel (Configured by Default)

The app is pre-configured to deploy to Vercel:

1. **Connect Repository**
   ```
   https://github.com/nikhilsaireddyi/Portfolia
   ```

2. **Environment Variables**
   - `DATABASE_URL` — PostgreSQL connection string (injected by Vercel)
   - OAuth credentials (Google, GitHub, etc. if using auth)

3. **Build Command**
   ```
   npm run build
   ```

4. **Output Directory**
   ```
   dist/
   ```

### Production Checks

Before shipping:

1. **Build succeeds**
   ```bash
   npm run build
   ```

2. **No TypeScript errors**
   ```bash
   npm run typecheck
   ```

3. **Preview render passes**
   ```bash
   npm run preview:restart
   node scripts/browser-smoke.mjs --baseline
   ```

4. **No console errors** in browser smoke output

### Important Notes

- **No `.env` file** — Platform injects `DATABASE_URL` and auth creds on deploy
- **VITE_* prefix** — Only environment variables starting with `VITE_` reach the browser
- **No hardcoded secrets** — Never commit API keys or database URLs
- **Server-only APIs** — XAI, database queries must use server functions

---

## 🏗️ Architecture

### Full-Stack Flow

```
Browser (React 19)
    ↓
TanStack Router (routes/index.tsx, routes/api/...)
    ↓
React Query (data fetching & caching)
    ↓
TanStack Start Server (SSR/SG)
    ↓
Nitro Server (backend logic)
    ↓
Kysely Query Builder
    ↓
PGLite (dev) / PostgreSQL (prod)
```

### State Management

1. **URL State** — TanStack Router search params
2. **Server State** — React Query (data fetching)
3. **Client State** — Zustand stores
4. **Form State** — React Hook Form

### Server Functions

```typescript
// src/routes/api/users.ts
import { authMiddleware } from '@/lib/auth/gate-identity';
import { db } from '@/lib/db';

export async function GET(req: Request) {
  const context = await authMiddleware(req);
  return Response.json(
    await db.selectFrom('users').where('user_id', '=', context.userId).selectAll().execute()
  );
}
```

---

## 📖 Documentation

### Platform Documentation

The `.grok/` directory contains platform-specific guidance:

- **`.grok/skills/`** — Feature skills (design-ui, building-games, controls, auth, etc.)
- **`.grok/references/`** — Deep-dive references (data-and-auth, deploy-target, etc.)
- **`AGENTS.md`** — This project's comprehensive guidelines (required reading)

### Key References

1. **AGENTS.md** — Master guide for project conventions and decisions
2. **`auth` Skill** — Authentication setup and Better Auth integration
3. **`neon` Skill** — Database and migrations (optional, if using Postgres)
4. **`design-ui` Skill** — UI component best practices and Radix/Tailwind patterns

---

## 🐛 Troubleshooting

### Dev Server Won't Start

```bash
# Check if port 8080 is in use
lsof -i :8080

# Verify Node.js version
node --version  # Should be 22+

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Database Migrations Failed

```bash
# Check migration files in migrations/
ls -la migrations/

# Verify file naming (must match isMigrationFile regex)
# Run manually
npm run db:migrate

# Check PGLite bootstrap
npm run typecheck  # Ensure db.ts compiles
```

### Type Errors on Build

```bash
npm run typecheck  # See full list of errors
```

Common issues:
- Missing server context in client components
- Incorrect Kysely type inference
- React version mismatch

### Browser Shows Blank Page

1. Check browser console (F12) for errors
2. Run smoke test: `node scripts/browser-smoke.mjs`
3. Verify `startup.sh` runs `npm run dev` (not Vite directly)
4. Check network tab for 404s or 500s

---

## 📝 Contributing

### Code Style

- **TypeScript** — Strict mode, no `any`
- **React** — Hooks, no class components
- **ESLint** — No warnings before commit (`npm run lint`)
- **Prettier** — Format all code (`npm run format`)

### Branching

```bash
git checkout -b feature/my-feature
npm run dev          # Test locally
npm run build        # Verify production build
npm run typecheck    # No type errors
npm run lint         # No linting issues
git push origin feature/my-feature
```

### Pull Requests

1. Ensure tests pass locally
2. Add a brief description of changes
3. Link related issues
4. Request review from maintainers

---

## 📄 License

This project is licensed under the MIT License — see LICENSE file for details.

---

## 🤝 Support

- **Issues** — [GitHub Issues](https://github.com/nikhilsaireddyi/Portfolia/issues)
- **Discussions** — [GitHub Discussions](https://github.com/nikhilsaireddyi/Portfolia/discussions)
- **Live Demo** — [https://portfolia-vibex1.vercel.app](https://portfolia-vibex1.vercel.app)

---

## 🎉 What's Inside

**Portfolia is a complete, production-ready starter with:**
- ✅ React 19 + TanStack ecosystem
- ✅ TypeScript strict mode
- ✅ Tailwind CSS + Radix UI
- ✅ Database migrations (optional)
- ✅ Authentication (optional)
- ✅ Vercel-ready deployment
- ✅ Browser testing with Playwright
- ✅ ESLint + Prettier preconfigured
- ✅ Full-stack type safety

**Use this as a foundation to build:**
- Portfolio websites
- SaaS applications
- Admin dashboards
- Real-time collaborative tools
- Data visualization platforms
- And more!

---

**Built with ❤️ by [Nikhil Sai Reddy](https://github.com/nikhilsaireddyi)**

*Happy building! 🚀*
