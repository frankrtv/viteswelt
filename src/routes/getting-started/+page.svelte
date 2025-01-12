<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import { fade, fly } from 'svelte/transition';
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { footerContent } from '$lib/stores/footer';
  import { onMount } from 'svelte';

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  const requirements = [
    { icon: '📦', title: 'Node.js', description: 'Version 18 or higher', link: 'https://nodejs.org' },
    { icon: '🔧', title: 'npm', description: 'Included with Node.js', link: 'https://www.npmjs.com' },
    { icon: '📝', title: 'Git', description: 'For version control', link: 'https://git-scm.com' },
    { icon: '💻', title: 'Code Editor', description: 'We recommend VS Code', link: 'https://code.visualstudio.com' }
  ];

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  $: isDarkMode = $theme === 'dark';

  const nextSteps = [
    { 
      icon: '🧩',
      title: 'Explore Components',
      description: 'Check out our pre-built components and learn how to use them in your project.',
      href: '/components',
      external: false
    },
    {
      icon: '📚',
      title: 'Read Documentation',
      description: 'Learn about project structure, configuration, and best practices.',
      href: 'https://github.com/frankrtv/viteswelt#readme',
      external: true
    },
    {
      icon: '⭐️',
      title: 'Star on GitHub',
      description: 'If you like ViteSwelt, consider giving it a star on GitHub.',
      href: 'https://github.com/frankrtv/viteswelt',
      external: true
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
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

      {#if mounted}
        <div class="text-center max-w-3xl mx-auto" in:fade={{ duration: 200 }}>
          <h1 class="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6 transition-colors duration-200">Getting Started</h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">Welcome to ViteSwelt, a modern template for building web applications with SvelteKit, TypeScript, and Tailwind CSS. This guide will help you get started with your project.</p>
        </div>
      {/if}
    </div>

    {#if mounted}
      <!-- Requirements Section -->
      <section class="mb-16" in:fade={{ duration: 200, delay: 50 }}>
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">Requirements</h2>
          <div class="h-[1px] flex-1 bg-gradient-to-r from-blue-100 to-transparent dark:from-blue-900 transition-colors duration-200"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {#each requirements as requirement, i}
            <a 
              href={requirement.link}
              target="_blank"
              rel="noopener noreferrer"
              class="p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              in:fly={{ y: 10, duration: 150, delay: i * 30 }}
            >
              <div class="text-2xl mb-3 transform hover:scale-110 transition-transform duration-200">{requirement.icon}</div>
              <h3 class="font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-200">{requirement.title}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-200">{requirement.description}</p>
            </a>
          {/each}
        </div>
      </section>

      <!-- Installation Methods -->
      <section class="mb-16" in:fade={{ duration: 200, delay: 100 }}>
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">Installation Methods</h2>
          <div class="h-[1px] flex-1 bg-gradient-to-r from-blue-100 to-transparent dark:from-blue-900 transition-colors duration-200"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Method 1: GitHub Template -->
          <div 
            class="p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-200"
            in:fly={{ y: 10, duration: 150, delay: 80 }}
          >
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors duration-200">Method 1: GitHub Template</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-200">
              Create a new repository using ViteSwelt as a template (Recommended).
            </p>
            <div class="flex gap-4">
              <Button href="https://github.com/frankrtv/viteswelt/generate" class="w-full">
                Use Template ↗
              </Button>
            </div>
          </div>

          <!-- Method 2: Degit -->
          <div 
            class="p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-200"
            in:fly={{ y: 10, duration: 150, delay: 120 }}
          >
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors duration-200">Method 2: Using degit</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-200">
              Create a fresh project using degit.
            </p>
            <div class="bg-gray-100 dark:bg-gray-900 p-3 rounded-md mb-4 font-mono text-sm">
              npx degit frankrtv/viteswelt my-app
            </div>
            <Button 
              on:click={() => copyToClipboard('npx degit frankrtv/viteswelt my-app')}
              variant="secondary"
              class="w-full"
            >
              Copy Command
            </Button>
          </div>
        </div>
      </section>

      <!-- Next Steps -->
      <section class="mb-16" in:fade={{ duration: 200, delay: 150 }}>
        <div class="flex items-center gap-4 mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">Next Steps</h2>
          <div class="h-[1px] flex-1 bg-gradient-to-r from-blue-100 to-transparent dark:from-blue-900 transition-colors duration-200"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          {#each nextSteps as step, i}
            <div 
              class="p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              in:fly={{ y: 10, duration: 150, delay: 120 + i * 30 }}
            >
              <div class="text-2xl mb-3 transform hover:scale-110 transition-transform duration-200">{step.icon}</div>
              <h3 class="font-semibold mb-2 text-gray-900 dark:text-white transition-colors duration-200">{step.title}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-200">
                {step.description}
              </p>
              <Button href={step.href} variant="secondary" class="w-full">
                {step.title}{step.external ? ' ↗' : ''}
              </Button>
            </div>
          {/each}
        </div>
      </section>

      <!-- Footer text -->
      <div class="mt-16 text-center text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200" in:fade={{ duration: 200, delay: 100 }}>
        <div class="flex justify-between items-center">
          <p>
            {footerContent.location}
          </p>
          <p>
            {footerContent.projectLead.text} <a href={footerContent.projectLead.link} target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition-colors">{footerContent.projectLead.name}</a>
          </p>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style> 