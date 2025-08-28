# User Management App

This app shows a list of users and a user detail page. Data comes from JSONPlaceholder.

## Features

- See users in a list
- Switch between Card view and Table view
- Search by name or email
- Go to a user detail page
- See loading and error states
- Simple pagination

## Tech Stack

- Next.js App Router (Next 15 latest) + TypeScript
- TanStack Query for data fetching and cache
- Semantic UI (CSS from CDN) for UI parts
  - Limitations found for `semantic-ui-react` with **React 19**, so used custom components and tailwind
- Tailwind for basic styles

## Setup

1. Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_BASE_URL=https://jsonplaceholder.typicode.com
```

2. Install and run:

```bash
nvm use
pnpm install
pnpm dev
```

Open User [Management App](http://localhost:3000) at `http://localhost:3000`
