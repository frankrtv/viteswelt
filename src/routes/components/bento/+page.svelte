<script lang="ts">
  import ComponentPage from '$lib/components/layout/ComponentPage.svelte';
  import BentoGrid from '$lib/components/bento/BentoGrid.svelte';
  import BentoItem from '$lib/components/bento/BentoItem.svelte';

  type Activity = {
    user: string;
    action: string;
    time: string;
  };

  type Metric = {
    name: string;
    value: string;
  };

  type BentoItemData = {
    title: string;
    variant: 'primary' | 'secondary' | 'gradient';
    size: 'sm' | 'md' | 'lg';
  } & (
    | {
        value: string;
        change: string;
        description: string;
        chart?: boolean;
      }
    | {
        activities: Activity[];
      }
    | {
        status: string;
        metrics: Metric[];
      }
  );

  const items: BentoItemData[] = [
    {
      title: 'Monthly Revenue',
      value: '$48,574',
      change: '+12.3%',
      description: 'Compared to last month',
      variant: 'primary',
      size: 'sm'
    },
    {
      title: 'Active Users',
      value: '12,489',
      change: '+24.5%',
      description: 'Current online users',
      variant: 'gradient',
      size: 'lg',
      chart: true
    },
    {
      title: 'Recent Activity',
      activities: [
        { user: 'Sarah', action: 'Created a new post', time: '2m ago' },
        { user: 'Mike', action: 'Uploaded files', time: '5m ago' },
        { user: 'Anna', action: 'Completed task', time: '12m ago' }
      ],
      variant: 'secondary',
      size: 'md'
    },
    {
      title: 'System Status',
      status: 'Operational',
      metrics: [
        { name: 'CPU', value: '24%' },
        { name: 'Memory', value: '48%' },
        { name: 'Storage', value: '82%' }
      ],
      variant: 'primary',
      size: 'sm'
    },
    {
      title: 'Weekly Goals',
      value: '8/12',
      change: '67%',
      description: 'Tasks completed this week',
      variant: 'secondary',
      size: 'sm'
    }
  ];

  const codeExample = `<BentoGrid>
  <BentoItem variant="primary" size="sm">
    <div class="p-6">
      <h3>Monthly Revenue</h3>
      <p class="text-3xl font-bold">$48,574</p>
      <p class="text-green-500">+12.3%</p>
    </div>
  </BentoItem>

  <BentoItem variant="gradient" size="lg">
    <div class="p-6">
      <h3>Active Users</h3>
      <p class="text-5xl font-bold">12,489</p>
      <!-- Chart or visualization here -->
    </div>
  </BentoItem>
</BentoGrid>`;
</script>

<ComponentPage
  title="Bento Grid"
  description="A flexible grid system for creating visually appealing layouts with varying sizes and styles."
>
  <!-- Example Section -->
  <div class="space-y-16">
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Dashboard Example</h2>
      <BentoGrid>
        {#each items as item}
          <BentoItem 
            variant={item.variant}
            size={item.size}
          >
            <div class="p-6 h-full flex flex-col">
              {#if 'value' in item}
                <!-- Metric Card -->
                <div class="flex flex-col h-full">
                  <h3 class="text-lg font-medium mb-4">{item.title}</h3>
                  <div class="flex items-baseline gap-2 mb-2">
                    <span class="text-3xl font-bold">{item.value}</span>
                    <span class="text-sm text-green-500">{item.change}</span>
                  </div>
                  <p class="text-sm opacity-60">{item.description}</p>
                  {#if item.chart}
                    <div class="flex-1 mt-4">
                      <div class="h-32 bg-gradient-to-tr from-blue-400/5 via-indigo-400/5 to-purple-400/3 rounded-lg"></div>
                    </div>
                  {/if}
                </div>
              {:else if 'activities' in item && item.activities}
                <!-- Activity Feed -->
                <div class="h-full flex flex-col">
                  <h3 class="text-lg font-medium mb-4">{item.title}</h3>
                  <ul class="space-y-4 flex-1">
                    {#each item.activities as activity}
                      <li class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/80 to-indigo-400/80 flex items-center justify-center text-white text-sm">
                          {activity.user[0]}
                        </div>
                        <div>
                          <p class="text-sm font-medium">{activity.action}</p>
                          <p class="text-xs opacity-60">{activity.time}</p>
                        </div>
                      </li>
                    {/each}
                  </ul>
                </div>
              {:else if 'metrics' in item}
                <!-- System Status -->
                <div class="h-full flex flex-col">
                  <h3 class="text-lg font-medium mb-4">{item.title}</h3>
                  <div class="flex items-center gap-2 mb-4">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-sm font-medium text-green-500">{item.status}</span>
                  </div>
                  <div class="space-y-3">
                    {#each item.metrics as metric}
                      <div>
                        <div class="flex justify-between text-sm mb-1">
                          <span>{metric.name}</span>
                          <span>{metric.value}</span>
                        </div>
                        <div class="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            class="h-full bg-blue-500 rounded-full transition-all duration-500"
                            style="width: {metric.value}"
                          ></div>
                        </div>
                      </div>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
          </BentoItem>
        {/each}
      </BentoGrid>
    </section>

    <!-- Usage Section -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Usage</h2>
      <div class="bg-gray-900 rounded-lg overflow-hidden">
        <pre class="p-6 text-sm text-gray-300 overflow-x-auto">{codeExample}</pre>
      </div>
    </section>

    <!-- Props Section -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Props</h2>
      
      <div class="space-y-12">
        <!-- BentoGrid Props -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">BentoGrid</h3>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div class="p-6">
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                The container component that creates the grid layout.
              </p>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Props</h4>
                <ul class="space-y-4">
                  <li>
                    <code class="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">class</code>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Additional classes to be merged with the base styles.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- BentoItem Props -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">BentoItem</h3>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div class="p-6">
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Individual grid items with customizable size and style variants.
              </p>
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Props</h4>
                <ul class="space-y-4">
                  <li>
                    <code class="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">variant</code>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Visual style variant. Options: 'primary' | 'secondary' | 'gradient'</p>
                  </li>
                  <li>
                    <code class="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">size</code>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Size and span of the item. Options: 'sm' | 'md' | 'lg'</p>
                  </li>
                  <li>
                    <code class="text-sm bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">class</code>
                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Additional classes to be merged with the variant styles.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</ComponentPage> 