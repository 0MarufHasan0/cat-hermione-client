# Kindora

> A modern community event platform for creating, discovering, and joining meaningful events.

Kindora is a full-featured Next.js client for a community event management platform. Users can browse upcoming events, join events, create their own events, and manage everything from a clean, responsive dashboard.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Better Auth**, and **shadcn/ui** primitives.

---

## ✨ Features

- 🔐 **Authentication** — Email/password and Google sign-in with Better Auth
- 🛡️ **Protected routes** — Server-side session checks with Next.js proxy
- 📅 **Event discovery** — Browse, filter by category, and view event details
- ➕ **Event creation** — Publish community events with images, dates, and locations
- ✅ **Join events** — Join events and cancel participation at any time
- 🗂️ **Event management** — Edit and delete events you have created
- 🌗 **Dark mode** — System-aware theme switching
- 🔔 **Toast notifications** — Clear feedback for every action
- 💀 **Loading skeletons** — Polished loading states instead of blank screens
- 🐾 **Custom 404 page** — Friendly not-found experience
- 📱 **Responsive UI** — Mobile-first layouts with a slide-out navigation menu

---

## 🧰 Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Base UI |
| Icons | Lucide React |
| Auth | Better Auth (MongoDB adapter) |
| Database | MongoDB |
| Notifications | React Toastify |
| Fonts | DM Sans, Lora, Geist Mono |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm
- MongoDB database
- A running backend API (default: `http://localhost:8000`)

### 1. Clone the repository

```bash
git clone https://github.com/0MarufHasan0/cat-hermione-client.git
cd cat-hermione-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

```env
# Backend API base URL used by the client
NEXT_PUBLIC_BASE_URI=http://localhost:8000

# Better Auth
BETTER_AUTH_SECRET=your-secret
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_MONGO_URI=your-mongodb-connection-string

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_URI` | ✅ | Base URL of the backend API |
| `BETTER_AUTH_SECRET` | ✅ | Secret used by Better Auth |
| `BETTER_AUTH_URL` | ✅ | Public URL of this Next.js app |
| `BETTER_AUTH_MONGO_URI` | ✅ | MongoDB connection string |
| `GOOGLE_CLIENT_ID` | ✅ | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | ✅ | Google OAuth client secret |

> `.env` files are ignored by Git. Use `.env.example` as the template.

---

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Typecheck the project |

---

## 🗺️ Routes

| Route | Description | Access |
| --- | --- | --- |
| `/` | Landing page with upcoming events | Public |
| `/upcoming-events` | Browse and filter all events | Public |
| `/upcoming-events/[id]` | Event details page | Public |
| `/sign-in` | Sign in with email or Google | Public |
| `/sign-up` | Create a new account | Public |
| `/create-event` | Create a new event | Protected |
| `/my-event` | Manage events you created | Protected |
| `/join-event` | View and cancel joined events | Protected |

---

## 🔌 API Integration

All backend requests use a single shared base URL from `src/lib/api.ts`:

```ts
export const BASE_URI =
  process.env.NEXT_PUBLIC_BASE_URI ?? "http://localhost:8000";

export function apiUrl(path: string) {
  return `${BASE_URI}${path.startsWith("/") ? path : `/${path}`}`;
}
```

Example usage:

```ts
const res = await fetch(apiUrl("/events"));
```

This keeps endpoints consistent and makes switching environments as simple as changing `NEXT_PUBLIC_BASE_URI`.

---

## 🔒 Authentication & Route Protection

- Auth is configured in `src/lib/auth.ts` using **Better Auth** with a MongoDB adapter.
- The client is configured in `src/lib/auth-client.ts`.
- Protected routes are guarded by `src/proxy.ts` (Next.js 16 proxy).
- Unauthenticated users are redirected to `/sign-in`.

Protected routes include `/upcoming-events`, `/create-event`, `/my-event`, and `/join-event`.

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (event-management)/
│   │   ├── create-event/
│   │   ├── join-event/
│   │   └── my-event/
│   ├── api/
│   │   ├── auth/[...all]/
│   │   └── debug-session/
│   ├── upcoming-events/
│   │   ├── [id]/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── layout/navbar.tsx
│   ├── ui/                  # shadcn/ui primitives
│   ├── create-event-form.tsx
│   ├── event-skeletons.tsx
│   └── ...
├── lib/
│   ├── api.ts
│   ├── auth.ts
│   └── auth-client.ts
└── proxy.ts
```

---

## 🎨 UI Highlights

- Built with Tailwind CSS v4 using theme tokens defined in `src/app/globals.css`
- Dark mode enabled through `next-themes`
- Toast notifications provided by React Toastify
- Skeleton loading states for event grids, detail pages, forms, and dashboards
- Accessible, responsive navigation with desktop and mobile menus

---

## 🚢 Deployment

1. Push your code to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Add all environment variables from `.env.example`.
4. Set `NEXT_PUBLIC_BASE_URI` to your deployed backend URL.
5. Deploy 🎉

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

---

<p align="center">
  Made with ❤️ for communities that care.
</p>
