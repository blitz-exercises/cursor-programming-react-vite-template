# ⚡ React + Vite Boilerplate for Cursor

A modern React boilerplate project designed to help you quickly start building cool stuff with React using Cursor. This template includes Vite, TypeScript, TailwindCSS, React Query, and follows clean architecture best practices.

![BLITZ](public/blitz-logo.svg)

## What is Cursor?

Cursor is an AI-powered code editor that helps you write code faster and more efficiently. It's built on VS Code and enhanced with AI capabilities to understand your codebase and help you build applications.

## Getting Started

### Step 1: Install Cursor

1. Visit [cursor.sh](https://cursor.sh) and click **"Download"**
2. Download Cursor for your operating system (macOS, Windows, or Linux)
3. Install Cursor following the installation instructions for your platform
4. Open Cursor after installation

### Step 2: Install Git from Cursor

If you don't have Git installed on your computer:

1. In Cursor, look at the **top left** of the window
2. Click on the **Git** menu
3. Cursor will detect if Git is missing and guide you to install it
4. Follow the on-screen instructions:
   - Click **Next** through the installation steps
   - Complete the installation on your computer
   - Restart Cursor if prompted

### Step 3: Clone This Project

1. In Cursor, click on **Git** in the top left menu
2. Select **"Clone from Repository"** (or "Clone Repository")
3. Paste the repository URL when prompted
4. Choose a folder to clone the project into
5. Cursor will automatically clone the repository and prompt you to open it
6. Click **"Open"** to start working

### Step 4: Install Node.js

This project requires Node.js to run. If you don't have Node.js installed:

1. Visit [nodejs.org/en/download](https://nodejs.org/en/download)
2. Download the **LTS (Long Term Support)** version for your operating system
3. Run the installer and follow the installation wizard:
   - Click **Next** through the installation steps
   - Accept the license agreement
   - Complete the installation
4. Verify the installation by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers displayed.

> **Note:** The Node.js installer includes npm (Node Package Manager), which is required to install project dependencies.

### Step 5: Install Dependencies

Open the integrated terminal in Cursor (`Ctrl+`` ` on Windows/Linux or `Cmd+`` ` on macOS) and run:

```bash
npm install
```

> **Note:** All npm commands work identically on Windows, macOS, and Linux. This project is fully cross-platform compatible.

### Step 6: Start Development

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
