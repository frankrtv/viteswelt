<!-- Component Library Page -->
<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { footerContent } from '$lib/stores/footer';

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  $: isDarkMode = $theme === 'dark';

  const sections = [
    {
      title: 'Core UI',
      description: 'Essential interface components',
      icon: '🎨',
      items: [
        { name: 'Button', href: '/components/button', status: 'stable' },
        { name: 'Input', href: '/components/input', status: 'coming-soon' },
        { name: 'Card', href: '/components/card', status: 'coming-soon' }
      ]
    },
    {
      title: 'Navigation',
      description: 'Components for user navigation',
      icon: '🧭',
      items: [
        { name: 'Navbar', href: '/components/navbar', status: 'coming-soon' },
        { name: 'Sidebar', href: '/components/sidebar', status: 'coming-soon' },
        { name: 'Breadcrumbs', href: '/components/breadcrumbs', status: 'coming-soon' }
      ]
    },
    {
      title: 'Layout',
      description: 'Structural and layout components',
      icon: '📐',
      items: [
        { name: 'Bento Grid', href: '/components/bento', status: 'stable' },
        { name: 'Container', href: '/components/container', status: 'coming-soon' },
        { name: 'Grid', href: '/components/grid', status: 'coming-soon' },
        { name: 'Stack', href: '/components/stack', status: 'coming-soon' }
      ]
    },
    {
      title: 'Feedback',
      description: 'User interaction and feedback components',
      icon: '💫',
      items: [
        { name: 'Alert', href: '/components/alert', status: 'coming-soon' },
        { name: 'Toast', href: '/components/toast', status: 'coming-soon' },
        { name: 'Progress', href: '/components/progress', status: 'coming-soon' }
      ]
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  
  <div class="container relative mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-16">
      <nav class="flex justify-between items-center mb-12">
        <Button href="/" variant="secondary" class="group hover:bg-transparent dark:hover:bg-transparent">
          <span class="inline-block transition-transform group-hover:-translate-x-1">←</span>
          <span class="ml-1">Back</span>
        </Button>
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

      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Component Library
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Explore our collection of reusable, accessible, and customizable components. Each component is built with TypeScript and styled with Tailwind CSS.
        </p>
      </div>
    </div>

    {#if mounted}
      <!-- Component Sections -->
      <div in:fade={{ duration: 300 }}>
        <div class="grid lg:grid-cols-2 gap-8">
          {#each sections as section}
            <div class="group relative">
              <!-- Background with hover effect -->
              <div class="absolute inset-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"></div>
              
              <!-- Content -->
              <div class="relative p-8">
                <div class="flex items-start gap-4 mb-6">
                  <div class="text-4xl">{section.icon}</div>
                  <div>
                    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{section.title}</h2>
                    <p class="text-gray-600 dark:text-gray-300">{section.description}</p>
                  </div>
                </div>

                <ul class="space-y-3">
                  {#each section.items as item}
                    <li>
                      {#if item.status === 'stable'}
                        <a 
                          href={item.href}
                          class="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-all duration-300"
                        >
                          <span class="font-medium text-gray-900 dark:text-white">{item.name}</span>
                          <span class="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                            <span class="text-sm">Ready</span>
                            <span class="text-lg">→</span>
                          </span>
                        </a>
                      {:else}
                        <div class="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 opacity-50 cursor-not-allowed">
                          <span class="font-medium text-gray-900 dark:text-white">{item.name}</span>
                          <span class="text-sm text-gray-500">Coming Soon</span>
                        </div>
                      {/if}
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Footer -->
    <footer class="mt-24 text-center text-sm text-gray-500 dark:text-gray-400">
      <p class="max-w-md mx-auto">
        Built with SvelteKit and Tailwind CSS. Open source and available on GitHub.
      </p>
    </footer>

    <!-- Footer text -->
    <div class="mt-16 text-center text-sm text-gray-500 dark:text-gray-400" in:fade={{ delay: 1000 }}>
      <div class="flex justify-between items-center">
        <p>
          {footerContent.location}
        </p>
        <p>
          {footerContent.projectLead.text} <a href={footerContent.projectLead.link} target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition-colors">{footerContent.projectLead.name}</a>
        </p>
      </div>
    </div>
  </div>
</div> 