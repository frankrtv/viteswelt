<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import { page } from '$app/stores';
  import { footerContent } from '$lib/stores/footer';
</script>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  
  <div class="container relative mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
    <div class="text-center space-y-8">
      <!-- Error Code -->
      <p class="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {$page.status}
      </p>

      <!-- Error Message -->
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
        {$page.error?.message || 'Something went wrong'}
      </h1>

      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
        {#if $page.status === 404}
          The page you're looking for doesn't exist or has been moved.
        {:else if $page.status === 500}
          We're experiencing some technical difficulties. Please try again later.
        {:else}
          An unexpected error occurred. Please try again.
        {/if}
      </p>

      <!-- Action Button -->
      <div class="mt-8">
        <Button href="/" variant="primary">
          Return Home
        </Button>
      </div>
    </div>
  </div>

  <!-- Footer text -->
  <div class="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
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