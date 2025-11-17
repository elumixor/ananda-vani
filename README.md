# Ánanda Vànii

A multilingual text display application for spiritual teachings.

## Features

- Simple and elegant text display
- Easy language switching
- Responsive design
- Built with React, TypeScript, and Vite
- Deployed on GitHub Pages

## Development

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Install dependencies

```bash
bun install
```

### Run development server

```bash
bun run dev
```

### Build for production

```bash
bun run build
```

### Preview production build

```bash
bun run preview
```

## Adding New Languages

To add a new language:

1. Open `src/data/languages.ts`
2. Add a new entry to the `languages` array with the following structure:

```typescript
{
  code: "en", // Language code (ISO 639-1)
  name: "English", // Language name
  title: "Ánanda Vànii", // Title of the text
  content: "Your text content here...", // Main text
  attribution: {
    author: "Shrii Shrii Anandamurti",
    source: "Source title",
    date: "Date and location",
  },
}
```

The new language will automatically appear in the language selector.

## License

MIT
