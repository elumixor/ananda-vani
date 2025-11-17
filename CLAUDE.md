# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ánanda Vànii is a multilingual text display application for spiritual teachings. It's a simple React app that allows users to switch between different language versions of the same text.

## Tech Stack

- **Runtime**: Bun (not npm/node)
- **Build**: Vite + TypeScript
- **Framework**: React 18
- **Linting/Formatting**: Biome (not ESLint/Prettier)
- **Deployment**: GitHub Pages at `/ananda-vani/` base path

## Development Commands

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production (runs TypeScript compiler + Vite build)
bun run build

# Preview production build locally
bun run preview

# Lint code
bun run lint

# Lint and auto-fix issues
bun run lint:fix

# Format code
bun run format
```

## Architecture

### Data Model

The app uses a centralized language data structure defined in `src/types.ts`:

```typescript
interface Language {
  code: string;        // ISO 639-1 language code
  name: string;        // Display name for the language
  title: string;       // Title of the text in that language
  content: string;     // Main text content
  attribution: {
    author: string;
    source: string;
    date: string;
  };
}
```

All language data is stored in `src/data/languages.ts` as a simple array export. The app automatically loads and displays all languages from this array.

### Component Structure

- `App.tsx`: Root component that manages language selection state and coordinates the two main components
- `LanguageSelector.tsx`: Dropdown component for switching between available languages
- `TextDisplay.tsx`: Component that renders the selected language's title, content, and attribution

The app uses a simple prop-drilling pattern - no state management library needed.

## Adding New Languages

To add a new language, edit `src/data/languages.ts` and add a new entry to the `languages` array following the `Language` interface structure. The language will automatically appear in the selector.

## Code Style Preferences

Based on biome.jsonc configuration:
- Double quotes for strings
- 2-space indentation
- 120 character line width
- No explicit `any` types (error level)
- Import types must use `import type` syntax
- Prefer interface over type definitions
- No unused template literals
- Shorthand object property syntax preferred
