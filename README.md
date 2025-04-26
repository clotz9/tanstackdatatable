# Next.js Admin Panel with Data Table

This is a Next.js admin panel application featuring a data table with filtering, searching, and dark mode functionality.

## Key Features

- Interactive data table with filtering and search capabilities
- Dark/Light theme toggle
- Responsive sidebar navigation
- Type-safe data management with TypeScript
- API integration for user data
- Environment variable configuration

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- React
- TanStack Table (for data table)
- Tailwind CSS
- Lucide React (icons)
- React Shadcn UI Components

## Getting Started

1. Clone the repository:
```bash
git clone [https://github.com/clotz9/tanstackdatatable.git](https://github.com/clotz9/tanstackdatatable.git)

cd nextjs-admin-panel

2. Install dependencies:
npm install
# or
yarn install
# or
pnpm install
# or
bun install

3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Directory Structure

```
data-table/
├── app/
│   ├── admin-panel/
│   │   ├── components/
│   │   │   ├── data-table/
│   │   │   ├── dark-mode-toggle/
│   │   │   ├── layout/
│   │   │   ├── main-content/
│   │   │   ├── sidebar/
│   │   │   ├── hooks/
│   │   │   ├── types/
│   │   │   ├── utils/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── users/
│   └── page.tsx
├── components.json
├── components/
│   ├── ui/
│   ├── dark-mode-toggle/
│   ├── layout/
│   ├── main-content/
│   ├── sidebar/
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   └── page.tsx
├── package.json
├── README.md
└── tsconfig.json
```
