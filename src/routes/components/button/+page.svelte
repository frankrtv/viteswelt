<script lang="ts">
  import ComponentPage from '$lib/components/layout/ComponentPage.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  type ButtonVariant = 'primary' | 'secondary';

  const variants: Array<{ name: string; value: ButtonVariant }> = [
    { name: 'Primary', value: 'primary' as const },
    { name: 'Secondary', value: 'secondary' as const }
  ];

  const examples = [
    { title: 'Basic Usage', code: '<Button>Click me</Button>' },
    { title: 'Secondary Variant', code: '<Button variant="secondary">Click me</Button>' },
    { title: 'With Link', code: '<Button href="/some-page">Navigate</Button>' },
    { title: 'Disabled State', code: '<Button disabled>Cannot click</Button>' }
  ];
</script>

<ComponentPage
  title="Button Component"
  description="A versatile button component with multiple variants and states."
>
  <!-- Examples Section -->
  <div class="space-y-16">
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Examples</h2>
      <div class="grid gap-8 md:grid-cols-2">
        {#each examples as example}
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{example.title}</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                {#if example.title === 'Basic Usage'}
                  <Button>Click me</Button>
                {:else if example.title === 'Secondary Variant'}
                  <Button variant="secondary">Click me</Button>
                {:else if example.title === 'With Link'}
                  <Button href="#example">Navigate</Button>
                {:else if example.title === 'Disabled State'}
                  <Button disabled>Cannot click</Button>
                {/if}
              </div>
              <pre class="bg-gray-900 text-gray-300 p-4 rounded-lg text-sm overflow-x-auto">{example.code}</pre>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Props Section -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Props</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div class="p-6">
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            The Button component accepts the following props to customize its appearance and behavior.
          </p>
          <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
            <ul class="space-y-4">
              <li>
                <code class="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">variant</code>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Visual style variant. Options: 'primary' | 'secondary'</p>
              </li>
              <li>
                <code class="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">type</code>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Button type attribute. Options: 'button' | 'submit' | 'reset'</p>
              </li>
              <li>
                <code class="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">disabled</code>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Whether the button is disabled. Type: boolean</p>
              </li>
              <li>
                <code class="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">href</code>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Optional URL to render the button as a link</p>
              </li>
              <li>
                <code class="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">class</code>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Additional classes to be merged with the variant styles</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</ComponentPage> 