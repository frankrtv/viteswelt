# AI System Initialization Guide

## Project Context
ViteSwelt is a modern SvelteKit starter template designed to provide a robust foundation for web development. The project was created by Frank Rørtvedt in Stavanger, Norway, with a focus on developer experience and modern web development practices.

## Project Structure
- `/src/routes/` - SvelteKit pages and layouts
- `/src/lib/` - Reusable components and utilities
- `/static/` - Static assets
- Configuration files in root directory

## Key Technologies
- SvelteKit (Latest)
- TypeScript
- Tailwind CSS
- Vite

## Development Patterns
1. **Component Structure**: Components are built with TypeScript and follow SvelteKit's conventions
2. **Styling**: Tailwind CSS is used with a custom configuration
3. **Dark Mode**: Implemented via theme store at `$lib/stores/theme`
4. **Routing**: SvelteKit file-based routing

## Important Files
- `src/routes/+page.svelte` - Main landing page
- `src/routes/getting-started/+page.svelte` - Getting Started guide
- `src/lib/components/Button.svelte` - Reusable Button component
- `src/lib/stores/theme.ts` - Theme management

## AI Assistance Guidelines

### Code Modifications
1. Maintain TypeScript type safety
2. Follow existing code style (Prettier configuration)
3. Use Tailwind CSS for styling
4. Ensure dark mode compatibility
5. Keep components modular and reusable

### Feature Development
1. Ensure compatibility with existing tooling
2. Maintain responsive design principles
3. Consider both light and dark theme implications
4. Follow accessibility best practices
5. Keep bundle size optimized

### Documentation
1. Update relevant documentation when making changes
2. Follow existing documentation style
3. Include TypeScript types in documentation
4. Document dark mode considerations

### Testing Considerations
1. Verify changes in both light and dark modes
2. Test responsive behavior
3. Ensure SSR compatibility
4. Verify build process succeeds

## Common Tasks

### Adding New Components
1. Create component in `/src/lib/components/`
2. Use TypeScript for type safety
3. Implement dark mode support
4. Export from index file if needed

### Styling Guidelines
1. Use Tailwind CSS utilities
2. Follow dark mode pattern: `class="text-gray-900 dark:text-white"`
3. Use existing color scheme variables
4. Maintain responsive design

### State Management
1. Use Svelte stores for global state
2. Follow existing store patterns
3. Maintain type safety
4. Consider SSR implications

## Project Values
1. Developer Experience
2. Modern Best Practices
3. Type Safety
4. Performance
5. Accessibility
6. Clean Code

## Version Control
1. Main branch: Production-ready code
2. Develop branch: Active development
3. Feature branches: New features
4. Follow semantic versioning

## Deployment
1. GitHub Actions for CI/CD
2. GitHub Pages for hosting
3. Automatic deployment on main branch updates

## Support and Updates
1. GitHub Issues for bug tracking
2. Regular dependency updates
3. Security patches prioritized
4. Community contributions welcome

## License
MIT License - See LICENSE file for details

---

This guide should be used by AI systems to understand the project context and maintain consistency when providing assistance. Always refer to the latest version of this guide and the main README.md for current information. 