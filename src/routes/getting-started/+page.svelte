<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { fade, fly } from 'svelte/transition';
  import { theme, toggleTheme } from '$lib/stores/theme';

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
</script>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  
  <div class="container relative mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-12">
      <nav class="flex justify-between items-center mb-8">
        <Button href="/" variant="secondary">← Back to Home</Button>
        <Button 
          variant="secondary"
          on:click={toggleTheme}
          aria-label="Toggle dark mode"
          class="hover:rotate-12 transition-transform"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </Button>
      </nav>
      <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
        Getting Started
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
        Welcome to ViteSwelt! This guide will help you set up your development environment and create your first project using our modern SvelteKit template.
      </p>
    </div>

    <!-- Requirements -->
    <section class="mb-12" in:fade={{ delay: 200 }}>
      <h2 class="text-2xl font-semibold mb-6">Requirements</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each requirements as { icon, title, description, link }, i}
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            class="p-6 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            in:fly={{ y: 20, duration: 400, delay: i * 150 }}
          >
            <div class="text-3xl mb-3">{icon}</div>
            <h3 class="font-semibold text-lg mb-1">{title}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
          </a>
        {/each}
      </div>
    </section>

    <!-- Installation Methods -->
    <section class="mb-12" in:fade={{ delay: 400 }}>
      <h2 class="text-2xl font-semibold mb-6">Installation Methods</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Method 1: Template -->
        <div 
          class="p-8 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          in:fly={{ y: 20, duration: 400 }}
        >
          <div class="flex items-center mb-6">
            <div class="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4">
              1️⃣
            </div>
            <h2 class="text-2xl font-semibold">Use Template</h2>
          </div>
          <div class="space-y-6">
            <div>
              <h3 class="font-semibold mb-2 text-blue-600 dark:text-blue-400">Recommended Method</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Create a new repository directly from our template. This is the fastest way to get started with all the features pre-configured.
              </p>
              <Button href="https://github.com/frankrtv/viteswelt/generate" class="transform hover:scale-105 transition-transform">
                Use Template →
              </Button>
            </div>

            <div>
              <h3 class="font-semibold mb-2 text-blue-600 dark:text-blue-400">Step by Step</h3>
              <ol class="space-y-4">
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2 font-bold">1.</span>
                  <p class="text-gray-600 dark:text-gray-300">Click the "Use Template" button above</p>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2 font-bold">2.</span>
                  <p class="text-gray-600 dark:text-gray-300">Name your repository and create it</p>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2 font-bold">3.</span>
                  <p class="text-gray-600 dark:text-gray-300">Clone your new repository:</p>
                </li>
                <li class="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-sm ml-6">
                  git clone your-repo-url
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2 font-bold">4.</span>
                  <p class="text-gray-600 dark:text-gray-300">Install dependencies:</p>
                </li>
                <li class="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-sm ml-6">
                  npm install
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2 font-bold">5.</span>
                  <p class="text-gray-600 dark:text-gray-300">Start developing:</p>
                </li>
                <li class="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-sm ml-6">
                  npm run dev
                </li>
              </ol>
            </div>
          </div>
        </div>

        <!-- Method 2: degit -->
        <div 
          class="p-8 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          in:fly={{ y: 20, duration: 400, delay: 200 }}
        >
          <div class="flex items-center mb-6">
            <div class="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4">
              2️⃣
            </div>
            <h2 class="text-2xl font-semibold">Use degit</h2>
          </div>
          <div class="space-y-6">
            <div>
              <h3 class="font-semibold mb-2 text-blue-600 dark:text-blue-400">Fresh Start Method</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Use degit to create a clean project without git history. Perfect for starting fresh with a clean slate.
              </p>
            </div>

            <div>
              <h3 class="font-semibold mb-2 text-blue-600 dark:text-blue-400">Latest Version</h3>
              <div class="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-sm mb-4 relative group">
                <button 
                  type="button"
                  class="absolute right-2 top-2 text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  on:click={() => copyToClipboard('npx degit frankrtv/viteswelt my-project')}
                >
                  📋
                </button>
                npx degit frankrtv/viteswelt my-project
              </div>
            </div>

            <div>
              <h3 class="font-semibold mb-2 text-blue-600 dark:text-blue-400">Specific Version</h3>
              <div class="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-sm mb-4 relative group">
                <button 
                  type="button"
                  class="absolute right-2 top-2 text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  on:click={() => copyToClipboard('npx degit frankrtv/viteswelt#v1.0.0 my-project')}
                >
                  📋
                </button>
                npx degit frankrtv/viteswelt#v1.0.0 my-project
              </div>
            </div>

            <div>
              <h3 class="font-semibold mb-2 text-blue-600 dark:text-blue-400">Next Steps</h3>
              <ol class="space-y-4">
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2 font-bold">1.</span>
                  <p class="text-gray-600 dark:text-gray-300">Navigate to your project:</p>
                </li>
                <li class="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-sm ml-6 relative group">
                  <button 
                    type="button"
                    class="absolute right-2 top-2 text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    on:click={() => copyToClipboard('cd my-project')}
                  >
                    📋
                  </button>
                  cd my-project
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2 font-bold">2.</span>
                  <p class="text-gray-600 dark:text-gray-300">Install dependencies:</p>
                </li>
                <li class="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-sm ml-6 relative group">
                  <button 
                    type="button"
                    class="absolute right-2 top-2 text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    on:click={() => copyToClipboard('npm install')}
                  >
                    📋
                  </button>
                  npm install
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2 font-bold">3.</span>
                  <p class="text-gray-600 dark:text-gray-300">Initialize git:</p>
                </li>
                <li class="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-sm ml-6 relative group">
                  <button 
                    type="button"
                    class="absolute right-2 top-2 text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    on:click={() => copyToClipboard('git init')}
                  >
                    📋
                  </button>
                  git init
                </li>
                <li class="flex items-start">
                  <span class="text-blue-500 mr-2 font-bold">4.</span>
                  <p class="text-gray-600 dark:text-gray-300">Start developing:</p>
                </li>
                <li class="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-sm ml-6 relative group">
                  <button 
                    type="button"
                    class="absolute right-2 top-2 text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    on:click={() => copyToClipboard('npm run dev')}
                  >
                    📋
                  </button>
                  npm run dev
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Next Steps -->
    <section class="mb-12" in:fade={{ delay: 600 }}>
      <h2 class="text-2xl font-semibold mb-6">What's Next?</h2>
      <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">1. Explore the Code</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Take a look at the project structure, components, and configuration files to understand how everything works together.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">2. Customize</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Modify the template to match your needs. Update styles, add new components, or adjust the configuration.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">3. Build Something Amazing</h3>
            <p class="text-gray-600 dark:text-gray-300">
              You're all set! Start building your awesome project with modern tools and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Help & Resources -->
    <section in:fade={{ delay: 800 }}>
      <h2 class="text-2xl font-semibold mb-6">Need Help?</h2>
      <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg">
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Documentation</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Check out these resources to learn more about the technologies used in this template:
            </p>
            <ul class="space-y-2">
              <li>
                <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                  SvelteKit Documentation →
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                  Tailwind CSS Documentation →
                </a>
              </li>
              <li>
                <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                  TypeScript Documentation →
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Community & Support</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Have questions or need help? Here's where you can find support:
            </p>
            <ul class="space-y-2">
              <li>
                <a href="https://github.com/frankrtv/viteswelt/issues" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                  GitHub Issues →
                </a>
              </li>
              <li>
                <a href="https://discord.gg/svelte" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                  Svelte Discord Community →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-16 text-center text-sm text-gray-500 dark:text-gray-400" in:fade={{ delay: 1000 }}>
      <div class="flex justify-between items-center">
        <p>
          Crafted with curiosity in Stavanger 🇳🇴
        </p>
        <p>
          Project Lead: <a href="https://github.com/frankrtv" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500 transition-colors">Frank Rørtvedt</a>
        </p>
      </div>
    </footer>
  </div>
</div> 