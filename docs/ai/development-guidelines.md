# Development Guidelines

## Code Modifications

1. **TypeScript**
   - Maintain strict type safety
   - Use proper type annotations
   - Avoid `any` types
   - Leverage type inference when appropriate

2. **Styling**
   - Use Tailwind CSS utilities
   - Follow dark mode pattern: `class="text-gray-900 dark:text-white"`
   - Use existing color scheme variables
   - Maintain responsive design

3. **Component Development**
   - Keep components modular and reusable
   - Follow SvelteKit's conventions
   - Implement dark mode support
   - Consider SSR compatibility

4. **State Management**
   - Use Svelte stores for global state
   - Follow existing store patterns
   - Maintain type safety
   - Consider SSR implications

## Feature Development

1. **Compatibility**
   - Ensure compatibility with existing tooling
   - Maintain responsive design principles
   - Consider both light and dark theme implications
   - Follow accessibility best practices

2. **Performance**
   - Keep bundle size optimized
   - Implement lazy loading where appropriate
   - Use proper image optimization
   - Consider code splitting

## Documentation

1. **Code Documentation**
   - Update relevant documentation when making changes
   - Follow existing documentation style
   - Include TypeScript types in documentation
   - Document dark mode considerations

2. **Testing**
   - Verify changes in both light and dark modes
   - Test responsive behavior
   - Ensure SSR compatibility
   - Verify build process succeeds

## Common Tasks

### Adding New Components
1. Create component in `/src/lib/components/`
2. Use TypeScript for type safety
3. Implement dark mode support
4. Export from index file if needed

### Styling Guidelines
1. Use Tailwind CSS utilities
2. Follow dark mode pattern
3. Use existing color scheme
4. Maintain responsive design

### State Management
1. Use Svelte stores for global state
2. Follow existing store patterns
3. Maintain type safety
4. Consider SSR implications 