<!-- Main page component -->
<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { theme, toggleTheme } from '$lib/stores/theme';

  $: isDarkMode = $theme === 'dark';

  const features = {
    core: [
      { icon: '🚀', title: 'SvelteKit', description: 'Latest version with TypeScript support' },
      { icon: '⚡', title: 'Vite', description: 'Lightning-fast development experience' },
      { icon: '🎨', title: 'Tailwind CSS', description: 'Utility-first CSS framework with dark mode' },
      { icon: '🌓', title: 'Dark Mode', description: 'System-aware theme with persistence' }
    ],
    dev: [
      { icon: '🧩', title: 'Component Library', description: 'Reusable, typed components' },
      { icon: '🔄', title: 'HMR', description: 'Fast refresh during development' },
      { icon: '✨', title: 'Code Quality', description: 'ESLint and Prettier pre-configured' },
      { icon: '📝', title: 'IDE Support', description: 'Rich IntelliSense and autocompletion' }
    ]
  };

  const useCases = [
    {
      title: 'Web Applications',
      items: ['Single-page applications (SPAs)', 'Progressive Web Apps (PWAs)', 'Dashboard interfaces']
    },
    {
      title: 'Content Sites',
      items: ['Blogs', 'Documentation sites', 'Marketing websites', 'Portfolio sites']
    },
    {
      title: 'Rapid Development',
      items: ['Quick prototypes', 'Proof of concepts', 'MVPs', 'Client demonstrations']
    }
  ];
</script>

<main class="min-h-screen bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4 py-8">
    <!-- Header section -->
    <header class="mb-12">
      <nav class="flex justify-between items-center">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ViteSwelt
        </h1>
        <Button 
          variant="secondary"
          on:click={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </Button>
      </nav>
    </header>

    <!-- Hero section -->
    <section class="text-center py-12 mb-16">
      <h2 class="text-4xl font-bold mb-4">Modern SvelteKit Template</h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        A production-ready starter template powered by Vite, featuring SvelteKit, Tailwind CSS, TypeScript, and modern development tools.
      </p>
      <div class="flex gap-4 justify-center">
        <Button>Get Started →</Button>
        <Button variant="secondary" href="https://github.com/frankrtv/viteswelt">View on GitHub</Button>
      </div>
    </section>

    <!-- Features grid -->
    <section class="mb-16">
      <h3 class="text-2xl font-semibold mb-8">Core Features</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each features.core as feature}
          <div class="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
            <div class="text-2xl mb-3">{feature.icon}</div>
            <h4 class="font-semibold mb-2">{feature.title}</h4>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <section class="mb-16">
      <h3 class="text-2xl font-semibold mb-8">Developer Experience</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each features.dev as feature}
          <div class="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
            <div class="text-2xl mb-3">{feature.icon}</div>
            <h4 class="font-semibold mb-2">{feature.title}</h4>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <!-- Use cases -->
    <section class="mb-16">
      <h3 class="text-2xl font-semibold mb-8">Perfect For</h3>
      <div class="grid md:grid-cols-3 gap-8">
        {#each useCases as useCase}
          <div class="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h4 class="text-xl font-semibold mb-4">{useCase.title}</h4>
            <ul class="space-y-2">
              {#each useCase.items as item}
                <li class="flex items-center text-gray-600 dark:text-gray-300">
                  <span class="text-blue-500 mr-2">•</span>
                  {item}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </section>

    <!-- Call to action -->
    <section class="text-center py-12">
      <div class="max-w-2xl mx-auto">
        <h3 class="text-2xl font-bold mb-4">Ready to Start Building?</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Get started with our modern stack and build your next project faster.
        </p>
        <Button>
          Clone Template →
        </Button>
      </div>
    </section>
  </div>
</main> 