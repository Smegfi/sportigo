# Next.js + shadcn/ui App

A clean, minimalistic Next.js application with shadcn/ui components, TypeScript, ESLint, and Prettier.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **shadcn/ui** components
- 🎯 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 📏 **ESLint** for code linting
- 💅 **Prettier** for code formatting
- 🚀 **Turbopack** for fast development

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

For example:

```bash
npx shadcn@latest add input
npx shadcn@latest add dialog
```

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/
│       └── ui/              # shadcn/ui components
├── lib/
│   └── utils.ts             # Utility functions
├── components.json          # shadcn/ui configuration
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Code Quality

This project includes:

- **ESLint** with Next.js and Prettier configurations
- **Prettier** for consistent code formatting
- **TypeScript** for type safety
- Pre-commit hooks (can be added with husky)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
