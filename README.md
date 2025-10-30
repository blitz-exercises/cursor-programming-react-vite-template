# ⚡ React + Vite Boilerplate for Cursor

A modern React boilerplate project designed to help you quickly start building cool stuff with React using Cursor. This template includes Vite, TypeScript, TailwindCSS, React Query, and follows clean architecture best practices.

![BLITZ](public/blitz-logo.svg)

## What is Cursor?

Cursor is an AI-powered code editor that helps you write code faster and more efficiently. It's built on VS Code and enhanced with AI capabilities to understand your codebase and help you build applications.

## Getting Started

### Step 1: Download Cursor

1. Visit [cursor.sh](https://cursor.sh)
2. Download Cursor for your operating system (macOS, Windows, or Linux)
3. Install Cursor following the installation instructions for your platform

### Step 2: Clone This Project in Cursor

1. **Open Cursor**
2. **Clone the repository directly via URL:**
   - Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux) to open the command palette
   - Type "Git: Clone" and select it
   - Paste the repository URL when prompted
   - Choose a folder to clone the project into
   - Cursor will automatically clone the repository and prompt you to open it
3. **Open the project:**
   - Once cloned, Cursor will prompt you to open the folder
   - Click "Open" to start working immediately

### Step 3: Install Dependencies

Open the integrated terminal in Cursor (`Ctrl+`` ` on Windows/Linux or `Cmd+`` ` on macOS) and run:

```bash
npm install
```

> **Note:** All npm commands work identically on Windows, macOS, and Linux. This project is fully cross-platform compatible.

### Step 4: Start Development

```bash
npm run dev
```

Your app will be available at `http://localhost:5173`

## Project Structure

This boilerplate follows clean architecture principles:

- **`src/dal/`** - Data Access Layer (pure functions for HTTP requests)
- **`src/features/*/api/`** - React Query hooks for data fetching
- **`src/features/*/components/`** - Presentational components
- **`src/features/*/containers/`** - Container components for data orchestration
- **`src/components/`** - Shared reusable UI components
- **`src/lib/http/`** - Centralized HTTP client configuration

## Tech Stack

- **React 19** - Latest stable version of React
- **TypeScript 5** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Query** - Server state management
- **ESLint** - Code linting with TypeScript support

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Building Cool Stuff

Now that you're set up with Cursor and this boilerplate, you're ready to start building! The project structure is set up to help you organize your code cleanly and efficiently. Use Cursor's AI features to help you write components, create API integrations, and build amazing React applications.

Happy coding! 🚀
