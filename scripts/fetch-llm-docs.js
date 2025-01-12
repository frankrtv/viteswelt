#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DOCS_SOURCES = {
  svelte: {
    base: 'https://svelte.dev',
    files: [
      '/docs/svelte/llms.txt',
      '/llms-full.txt',
      '/llms-small.txt'
    ]
  },
  sveltekit: {
    base: 'https://svelte.dev',
    files: [
      '/docs/kit/llms.txt'
    ]
  },
  tailwind: {
    base: 'https://tailwindcss.com',
    files: [
      '/llms.txt'  // Note: This is hypothetical, we'll need to check if Tailwind provides this
    ]
  },
  vite: {
    base: 'https://vitejs.dev',
    files: [
      '/llms.txt'  // Note: This is hypothetical, we'll need to check if Vite provides this
    ]
  }
};

async function fetchDoc(baseUrl, filePath) {
  try {
    const response = await fetch(`${baseUrl}${filePath}`);
    if (!response.ok) {
      console.warn(`Warning: Could not fetch ${baseUrl}${filePath} (${response.status})`);
      return null;
    }
    return await response.text();
  } catch (error) {
    console.warn(`Error fetching ${baseUrl}${filePath}:`, error.message);
    return null;
  }
}

async function saveDoc(content, technology, fileName) {
  if (!content) return;
  
  const targetDir = path.join(__dirname, '..', 'docs', 'ai', 'llm-docs', technology);
  const targetFile = path.join(targetDir, path.basename(fileName));
  
  await fs.mkdir(targetDir, { recursive: true });
  await fs.writeFile(targetFile, content);
  
  // Create a metadata file to track the source
  const metadata = {
    source: `${DOCS_SOURCES[technology].base}${fileName}`,
    fetchedAt: new Date().toISOString(),
    technology
  };
  
  await fs.writeFile(
    `${targetFile}.meta.json`,
    JSON.stringify(metadata, null, 2)
  );
}

async function main() {
  console.log('Fetching LLM documentation...');
  
  for (const [tech, source] of Object.entries(DOCS_SOURCES)) {
    console.log(`\nProcessing ${tech}...`);
    
    for (const file of source.files) {
      const content = await fetchDoc(source.base, file);
      if (content) {
        await saveDoc(content, tech, file);
        console.log(`✓ Fetched ${file}`);
      }
    }
  }
  
  // Create an index file
  const indexContent = `# Official LLM Documentation

This directory contains official LLM documentation from:

- Svelte 5
- SvelteKit
- Tailwind CSS
- Vite

Documentation is automatically fetched and updated using \`npm run update-llm-docs\`.
Each file has an accompanying \`.meta.json\` file that tracks its source and last update time.

> Note: Some documentation might not be available if the source doesn't provide LLM-specific docs.
`;

  await fs.writeFile(
    path.join(__dirname, '..', 'docs', 'ai', 'llm-docs', 'LLM_DOCS_INDEX.md'),
    indexContent
  );
  
  console.log('\nDone! Documentation has been updated.');
}

main().catch(console.error); 