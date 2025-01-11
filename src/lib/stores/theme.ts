import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

// Get initial theme from localStorage or system preference
const getInitialTheme = (): Theme => {
  if (browser) {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

// Create the store
const theme = writable<Theme>(getInitialTheme());

// Update document classes and localStorage when theme changes
theme.subscribe((value) => {
  if (browser) {
    localStorage.setItem('theme', value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
});

// Toggle theme function
const toggleTheme = () => {
  theme.update((current) => (current === 'light' ? 'dark' : 'light'));
};

export { theme, toggleTheme }; 