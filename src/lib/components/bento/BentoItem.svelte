<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  
  export let variant: 'primary' | 'secondary' | 'gradient' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'sm';
  export let rounded: 'default' | 'left' | 'right' | 'top' | 'bottom' = 'default';
  let className = '';
  export { className as class };

  const baseStyles = 'relative flex flex-col overflow-hidden transition-all duration-500';
  
  const variants = {
    primary: 'bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/30',
    secondary: 'bg-blue-50 dark:bg-gray-700/50 shadow-md dark:shadow-gray-900/20',
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white shadow-xl',
    feature: 'bg-white dark:bg-gray-800'
  };

  const sizeVariants = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-1 row-span-2',
    lg: 'md:col-span-2 row-span-2'
  } as const;

  const roundedVariants = {
    default: 'rounded-[calc(theme(borderRadius.lg)+1px)]',
    left: 'lg:rounded-l-[calc(2rem+1px)]',
    right: 'lg:rounded-r-[calc(2rem+1px)]',
    top: 'max-lg:rounded-t-[calc(2rem+1px)]',
    bottom: 'max-lg:rounded-b-[calc(2rem+1px)]'
  };

  // Ring decoration for depth effect
  const ringDecoration = 'before:absolute before:inset-px before:rounded-lg before:shadow before:ring-1 before:ring-black/5 before:pointer-events-none';

  const variantStyles = {
    primary: 'bg-white dark:bg-gray-800 shadow-sm',
    secondary: 'bg-gray-50 dark:bg-gray-800/50',
    gradient: 'bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-purple-400/10 dark:from-blue-500/20 dark:via-indigo-500/20 dark:to-purple-500/20'
  };
</script>

<div 
  class={twMerge(
    baseStyles,
    variants[variant],
    sizeVariants[size],
    roundedVariants[rounded],
    ringDecoration,
    className
  )}
  {...$$restProps}
>
  <slot />
</div> 