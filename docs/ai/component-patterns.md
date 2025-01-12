# Component Patterns

## Core Components

### Button Component
```svelte
<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  
  export let variant: 'primary' | 'secondary' = 'primary';
  export let href: string | undefined = undefined;
  
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
  };
</script>

{#if href}
  <a {href} class={twMerge(baseStyles, variants[variant], $$props.class)}>
    <slot />
  </a>
{:else}
  <button class={twMerge(baseStyles, variants[variant], $$props.class)}>
    <slot />
  </button>
{/if}
```

### Theme Store Pattern
```typescript
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (browser) {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const theme = writable<Theme>(getInitialTheme());
```

## Design Patterns

### Dark Mode Implementation
1. **CSS Classes**
   ```html
   <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
     <!-- Content -->
   </div>
   ```

2. **Theme Toggle**
   ```svelte
   <script>
     import { theme } from '$lib/stores/theme';
     $: isDark = $theme === 'dark';
   </script>
   ```

### Responsive Design
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- Grid items -->
</div>
```

## Component Organization

### Directory Structure
```
src/lib/components/
├── ui/           # Core UI components
├── layout/       # Layout components
└── bento/        # Bento grid components
```

### Component Exports
```typescript
// src/lib/components/ui/index.ts
export { default as Button } from './Button.svelte';
export { default as Card } from './Card.svelte';
```

## State Management

### Store Pattern
```typescript
import { writable } from 'svelte/store';

interface State {
  // State interface
}

function createStore() {
  const { subscribe, set, update } = writable<State>(initialState);
  
  return {
    subscribe,
    someAction: () => update(state => ({ ...state, /* updates */ }))
  };
}

export const store = createStore();
```

## Best Practices

1. **Props**
   - Use TypeScript for prop types
   - Provide default values
   - Document with JSDoc comments

2. **Events**
   - Forward native events
   - Use typed event dispatchers
   - Document custom events

3. **Styling**
   - Use Tailwind utility classes
   - Support dark mode
   - Allow style overrides via class props

4. **Accessibility**
   - Include ARIA attributes
   - Support keyboard navigation
   - Maintain proper contrast ratios 