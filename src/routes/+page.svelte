<!-- Main page component -->
<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { footerContent } from '$lib/stores/footer';

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

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
      items: ['Wikis', 'Docs', 'Product and portfolio sites']
    },
    {
      title: 'Rapid Development',
      items: ['Quick prototypes', 'Proof of concepts', 'MVPs', 'Client demonstrations']
    }
  ];
</script>

<main class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  
  <div class="container relative mx-auto px-4 py-8">
    <!-- Header section -->
    <header class="mb-12">
      <nav class="flex justify-between items-center">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
          ViteSwelt
        </h1>
        <Button 
          variant="secondary"
          on:click={toggleTheme}
          aria-label="Toggle dark mode"
          class="relative overflow-hidden group hover:bg-transparent dark:hover:bg-transparent"
        >
          <div class="relative transition-transform duration-500 rotate-0 scale-100 dark:-rotate-[360deg] dark:scale-0">
            🌙
          </div>
          <div class="absolute inset-0 flex items-center justify-center transition-transform duration-500 rotate-0 scale-0 dark:rotate-[360deg] dark:scale-100">
            🌞
          </div>
        </Button>
      </nav>
    </header>

    <!-- Hero section -->
    {#if mounted}
    <section class="text-center py-12 mb-16" in:fade={{ duration: 1000, delay: 200 }}>
      <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Modern SvelteKit Template
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        A production-ready starter template powered by Vite, featuring SvelteKit, Tailwind CSS, TypeScript, and modern development tools.
      </p>
      <div class="flex gap-4 justify-center">
        <Button href="/getting-started" class="transform hover:scale-105 transition-transform">Get Started</Button>
        <Button variant="secondary" href="https://github.com/frankrtv/viteswelt" class="transform hover:scale-105 transition-transform">View on GitHub ↗</Button>
      </div>
    </section>

    <!-- Features grid -->
    <section class="mb-16">
      <h3 class="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Core Features</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each features.core as feature, i}
          <div 
            class="p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 hover:transition-transform"
          >
            <div class="text-2xl mb-3 transform hover:scale-110 transition-transform inline-block">{feature.icon}</div>
            <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h4>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <section class="mb-16">
      <h3 class="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Developer Experience</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each features.dev as feature, i}
          <div 
            class="p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 hover:transition-transform"
          >
            <div class="text-2xl mb-3 transform hover:scale-110 transition-transform inline-block">{feature.icon}</div>
            <h4 class="font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h4>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <!-- Use cases -->
    <section class="mb-16" in:fade={{ duration: 1000, delay: 800 }}>
      <h3 class="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Perfect For</h3>
      <div class="grid md:grid-cols-3 gap-8">
        {#each useCases as useCase, i}
          <div 
            class="p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 hover:transition-transform"
            in:fly={{ y: 20, duration: 400, delay: i * 150 }}
          >
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
    <section class="text-center py-12" in:fade={{ duration: 1000, delay: 1000 }}>
      <div class="max-w-2xl mx-auto">
        <h3 class="text-2xl font-bold mb-4">Ready to Create Something Amazing?</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Start your next project with a modern, production-ready template. No configuration needed.
        </p>
        <div class="flex gap-4 justify-center">
          <Button href="/components" class="transform hover:scale-105 transition-transform">
            View Components
          </Button>
          <Button href="https://github.com/frankrtv/viteswelt/generate" variant="secondary" class="transform hover:scale-105 transition-transform">
            Use Template ↗
          </Button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400" in:fade={{ duration: 1000, delay: 1200 }}>
      <div class="flex justify-between items-center">
        <p>
          {footerContent.location}
        </p>
        <p>
          {footerContent.projectLead.text} <a href={footerContent.projectLead.link} target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition-colors">{footerContent.projectLead.name}</a>
        </p>
      </div>
    </footer>
    {/if}
  </div>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style> 