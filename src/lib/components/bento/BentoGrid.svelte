<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  
  let className = '';
  export { className as class };

  const baseStyles = 'grid gap-4 grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] w-full transition-all duration-500';
</script>

<div 
  class={twMerge(
    baseStyles,
    className
  )}
  {...$$restProps}
>
  <slot />
</div> 