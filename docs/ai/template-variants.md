# Template Variants

## Available Versions

### 1. Full Template (With Examples)
- Includes example components (Button, BentoGrid, etc.)
- Contains documentation pages
- Includes demo layouts and content
- Useful for learning and reference

### 2. Clean Start (Core Only)
- Minimal setup with core functionality
- No example components or documentation
- Clean slate for new projects
- Retains essential framework features

## Cleanup Process

The template includes a cleanup script (`cleanup.js`) that:
- Removes example components from `src/lib/components/ui/`
- Removes documentation pages from `src/routes/components/`
- Removes getting started guide
- Creates a minimal landing page with theme support

## Core Features (Always Available)

These features are present in all variants:
1. **Theme System**
   - Dark mode support
   - System preference detection
   - Theme persistence
   - Smooth transitions

2. **Store System**
   - Theme store
   - Footer content store
   - Type-safe store patterns

3. **Development Setup**
   - TypeScript configuration
   - Tailwind CSS setup
   - ESLint and Prettier configs
   - Basic project structure

4. **Build System**
   - Vite configuration
   - SvelteKit setup
   - Static adapter
   - Production optimizations

## AI Behavior Adaptation

When assisting users, AI systems should:

1. **Detect Template Version**
   - Check for presence of example components
   - Adjust recommendations based on available components
   - Consider whether documentation pages exist

2. **Full Template Assistance**
   - Reference existing components as examples
   - Point to documentation pages when relevant
   - Suggest modifications to existing components
   - Use consistent patterns from examples

3. **Clean Template Assistance**
   - Focus on creating new components from scratch
   - Provide more detailed explanations without examples
   - Include complete code snippets
   - Explain architectural decisions

4. **Common Patterns (Both Versions)**
   - Use theme store for dark mode
   - Follow footer pattern with store
   - Maintain TypeScript type safety
   - Use Tailwind CSS for styling
   - Follow existing naming conventions 