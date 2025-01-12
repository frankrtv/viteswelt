# ViteSwelt AI Agent Initialization

## Purpose
This documentation is designed for AI systems and Cursor IDE to properly initialize and work with the ViteSwelt template. Start here to understand the project and access relevant documentation.

## Core Documentation

1. **Project Understanding**
   - [Project Overview](./project-overview.md) - Core concepts and features
   - [Development Guidelines](./development-guidelines.md) - Coding standards and practices
   - [Component Patterns](./component-patterns.md) - Reusable patterns and components
   - [Template Variants](./template-variants.md) - Different template versions

2. **Official Framework Documentation**
   - [Svelte 5 Documentation](./llm-docs/svelte/llms.txt) - Official Svelte documentation (Beta)
   - [SvelteKit Documentation](./llm-docs/sveltekit/llms.txt) - Official SvelteKit documentation

> Note: Additional documentation versions (full and small context) are available in the `llm-docs` directory if needed.

## Key Technologies & Versions

```json
{
  "svelte": "^5.17.3",
  "sveltekit": "^2.15.2",
  "tailwindcss": "3.4.17",
  "vite": "^6.0.7",
  "typescript": "^5.7.3"
}
```

## Important Considerations

1. **Svelte 5 Beta**
   - Using beta version with runes
   - Breaking changes possible
   - Reference [Svelte 5 docs](./llm-docs/svelte/llms.txt) for latest syntax

2. **Dark Mode**
   - System-aware theme detection
   - Persistent theme storage
   - Use `dark:` prefix for dark mode styles

3. **TypeScript**
   - Strict type checking enabled
   - Type definitions required
   - Follow type-safe patterns

## File Structure Quick Reference

```
src/
├── lib/
│   ├── components/
│   │   ├── ui/        # Core UI components
│   │   ├── layout/    # Layout components
│   │   └── bento/     # Bento grid components
│   └── stores/
│       ├── theme.ts   # Theme management
│       └── footer.ts  # Footer content
└── routes/           # SvelteKit pages
```

## Documentation Updates

- LLM documentation is automatically updated via `npm run update-llm-docs`
- Each documentation file has an accompanying `.meta.json` for source tracking
- Official framework documentation is fetched from source

## Getting Help

If you need more information:
1. Check the [Component Patterns](./component-patterns.md) for implementation examples
2. See [Development Guidelines](./development-guidelines.md) for best practices
3. For more detailed framework documentation, additional versions are available in `llm-docs/` 