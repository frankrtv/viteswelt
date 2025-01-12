<script lang="ts">
  import Navigation from './Navigation.svelte';
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let title: string;
  export let description: string;

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  
  <div class="container relative mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-12">
      <Navigation />

      <div class="text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Components</h2>
        <h1 class="mt-2 text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>

    <!-- Content -->
    {#if mounted}
      <div in:fade={{ duration: 300, delay: 150 }}>
        <slot />
      </div>
    {/if}
  </div>
</div> 