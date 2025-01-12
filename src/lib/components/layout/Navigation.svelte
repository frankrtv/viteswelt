<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';

  $: isDarkMode = $theme === 'dark';
</script>

<nav class="flex justify-between items-center mb-8">
  <a href="/components" class="group inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
    <span class="inline-block transition-transform group-hover:-translate-x-1">←</span>
    <span class="ml-1">Back to Components</span>
  </a>
  <button 
    on:click={toggleTheme}
    aria-label="Toggle dark mode"
    class="relative overflow-hidden group inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
  >
    <div class="relative transition-transform duration-500 rotate-0 scale-100 dark:-rotate-[360deg] dark:scale-0">
      🌙
    </div>
    <div class="absolute inset-0 flex items-center justify-center transition-transform duration-500 rotate-0 scale-0 dark:rotate-[360deg] dark:scale-100">
      🌞
    </div>
  </button>
</nav> 