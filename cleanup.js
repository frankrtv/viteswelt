#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files and directories to remove
const toRemove = [
    // Example components
    'src/lib/components/ui/BentoGrid.svelte',
    'src/lib/components/ui/BentoItem.svelte',
    'src/lib/components/ui/Button.svelte',
    
    // Documentation and example pages
    'src/routes/components',
    'src/routes/getting-started',
    
    // Demo content
    'src/routes/+page.svelte',
];

// Files to create/replace
const newFiles = {
    // Simple landing page
    'src/routes/+page.svelte': `<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { footerContent } from '$lib/stores/footer';
</script>

<div class="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
  <div class="container mx-auto px-4 py-8">
    <header class="flex justify-between items-center mb-12">
      <h1 class="text-4xl font-bold">My App</h1>
      <button 
        on:click={toggleTheme}
        class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
      >
        {$theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </header>

    <main>
      <h2 class="text-2xl mb-4">Welcome to your new project!</h2>
      <p class="text-gray-600 dark:text-gray-300">
        Start building your application here.
      </p>
    </main>

    <!-- Footer -->
    <footer class="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
      <div class="flex justify-between items-center">
        <p>{footerContent.location}</p>
        <p>
          {footerContent.projectLead.text} 
          <a 
            href={footerContent.projectLead.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-blue-500 transition-colors"
          >
            {footerContent.projectLead.name}
          </a>
        </p>
      </div>
    </footer>
  </div>
</div>`
};

console.log('🧹 Starting cleanup process...');

// Remove files and directories
toRemove.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    try {
        if (fs.existsSync(fullPath)) {
            const stats = fs.statSync(fullPath);
            if (stats.isDirectory()) {
                fs.rmSync(fullPath, { recursive: true });
                console.log(`📁 Removed directory: ${filePath}`);
            } else {
                fs.unlinkSync(fullPath);
                console.log(`📄 Removed file: ${filePath}`);
            }
        }
    } catch (error) {
        console.error(`❌ Error removing ${filePath}:`, error.message);
    }
});

// Create new files
Object.entries(newFiles).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    try {
        // Ensure directory exists
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(fullPath, content);
        console.log(`✨ Created file: ${filePath}`);
    } catch (error) {
        console.error(`❌ Error creating ${filePath}:`, error.message);
    }
});

console.log('\n✅ Cleanup complete! Your project is ready for a fresh start.');
console.log('\nNext steps:');
console.log('1. Run npm install to ensure dependencies are up to date');
console.log('2. Start development with npm run dev');
console.log('3. Begin building your application in src/routes/+page.svelte\n'); 