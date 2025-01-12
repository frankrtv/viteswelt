# ViteSwelt

A modern, opinionated SvelteKit starter template powered by Vite, featuring Tailwind CSS, TypeScript, and dark mode.

📦 **[View on GitHub](https://github.com/frankrtv/viteswelt)**

## 📦 Using This Template

### Template Options

#### Option 1: Full Template (With Examples)
Use this option if you want to start with all example components and documentation:
1. Click the "Use this template" button above
2. Create a new repository from this template
3. Clone your new repository
4. Install dependencies:
   ```bash
   npm install
   ```

#### Option 2: Clean Start (Core Only)
Use this option if you want just the core framework without example components:
1. Click the "Use this template" button above
2. Create a new repository from this template
3. Clone your new repository
4. Run the cleanup script:
   ```bash
   npm run cleanup
   ```
   This will:
   - Remove all example components
   - Remove component documentation
   - Remove demo pages
   - Keep core utilities and configurations
5. Install dependencies:
   ```bash
   npm install
   ```

### What's Included in Clean Start
The clean start option keeps the essential structure and tools:
- 🛠️ Core setup (SvelteKit, TypeScript, Tailwind CSS)
- 🎨 Theme system with dark mode
- 📁 Basic project structure
- 🔧 All configurations (ESLint, Prettier, TypeScript)
- 🧰 Core utilities and type definitions

### What's Removed in Clean Start
The cleanup process removes:
- 📚 Example components (Button, BentoGrid, etc.)
- 🎯 Component documentation pages
- 🖼️ Demo layouts and pages
- 📝 Example content and assets

### Method 2: Degit (Latest Release)
1. Create a new project using degit:
   ```bash
   npx degit frankrtv/viteswelt#main my-project
   cd my-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start developing:
   ```bash
   npm run dev
   ```

### Method 3: Specific Version
1. Check the [releases page](https://github.com/frankrtv/viteswelt/releases) for available versions
2. Create a new project using a specific version:
   ```bash
   npx degit frankrtv/viteswelt#v1.0.0 my-project
   cd my-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Post-Setup Steps
1. Update `package.json`:
   - Change the name
   - Update the description
   - Adjust the version
   - Update repository links
2. Update or remove CHANGELOG.md
3. Update LICENSE file
4. Update this README
5. Initialize a new git repository:
   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit"
   ```

## ✨ Features

### Core Technologies
- 🚀 **SvelteKit** - Latest version with TypeScript support
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌓 **Dark Mode** - System-aware theme with local storage persistence
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **TypeScript** - Full type safety and IDE support
- ✨ **ESLint & Prettier** - Code quality and formatting

### Developer Experience
- 🧩 **Component Library** - Reusable, typed components
- 🎯 **Type Safety** - Full TypeScript support throughout
- 🔄 **Hot Module Replacement** - Fast refresh during development
- 📝 **IDE Support** - Rich IntelliSense and autocompletion
- 🧪 **Code Quality** - ESLint and Prettier pre-configured

### Architecture & Organization
- 📂 **Structured Layout** - Well-organized project structure
- 🏗️ **Component Architecture** - Modular and maintainable
- 🔐 **Type-Safe Stores** - Centralized state management
- 🎯 **Path Aliases** - Clean import statements
- 📚 **Documentation** - Comprehensive inline comments

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/frankrtv/viteswelt.git your-project-name
   cd your-project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
viteswelt/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable UI components
│   │   ├── stores/         # Svelte stores for state management
│   │   ├── utils/          # Utility functions
│   │   └── types/          # TypeScript type definitions
│   ├── routes/
│   │   ├── +page.svelte    # Main page
│   │   └── +layout.svelte  # Root layout
│   └── app.css            # Global styles and Tailwind imports
├── static/                # Static assets
├── tests/                 # Test files
└── config files          # Various configuration files
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript checks
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Tailwind CSS

The Tailwind configuration is located in `tailwind.config.cjs`. You can customize:
- Colors and theme
- Typography
- Spacing
- Breakpoints
- Dark mode strategy

### Components

The template includes a comprehensive component library:

#### Core UI Components
- `Button` - Versatile button component with variants
- `Container` - Responsive container with max-width
- `BentoGrid` - Flexible grid system for creating visually appealing layouts
- More components in development

#### Features
- 🎨 **Consistent Design** - All components follow the same design language
- 🌓 **Dark Mode Support** - Built-in dark mode for all components
- 📱 **Responsive** - Mobile-first approach with responsive variants
- 🔒 **Type-Safe** - Full TypeScript support with proper types
- 📚 **Documentation** - Comprehensive documentation with examples

#### Component Documentation
Visit the components page in your local development server:
```bash
npm run dev
# Then visit http://localhost:5173/components
```

Each component includes:
- Live examples
- Usage code snippets
- API documentation
- Variant demonstrations
- Responsive behavior

### Dark Mode

Dark mode is implemented using:
- Tailwind's 'class' strategy
- System preference detection
- Local storage persistence
- Smooth transitions

## 🎯 Use Cases

This template is ideal for:

1. **Web Applications**
   - Single-page applications (SPAs)
   - Progressive Web Apps (PWAs)
   - Dashboard interfaces
   - Admin panels

2. **Content Sites**
   - Blogs
   - Documentation sites
   - Marketing websites
   - Portfolio sites

3. **Prototypes & MVPs**
   - Quick project bootstrapping
   - Proof of concepts
   - Client demonstrations

## 🤖 Recreation Prompt

To recreate this template from scratch, use the following prompt:

```
Create a modern SvelteKit starter template with:

1. Core Setup:
   - Latest SvelteKit with TypeScript
   - Tailwind CSS integration
   - Dark mode support (class strategy)
   - ESLint and Prettier configuration

2. Project Structure:
   - Organized component library
   - Type-safe stores
   - Utility functions
   - Clear routing structure

3. Features:
   - System-aware dark mode with persistence
   - Responsive design
   - Reusable components
   - Type safety
   - Modern development tools

4. Developer Experience:
   - Hot module replacement
   - TypeScript support
   - Code quality tools
   - Rich IDE integration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

This template is built upon these amazing technologies and tools:

- [SvelteKit](https://kit.svelte.dev/) - The official application framework for Svelte
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript
- [Prettier](https://prettier.io/) - Opinionated code formatter
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Merge Tailwind CSS classes without style conflicts
- [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript
- [Autoprefixer](https://github.com/postcss/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes

Special thanks to the maintainers and contributors of these projects for making web development better for everyone.

## Template Usage Guide

### Getting Started with the Template

1. **Create Your Project**
   - Use GitHub's "Use this template" button (recommended)
   - Or use degit: `npx degit frankrtv/viteswelt my-project`

2. **Initial Setup**
   - Update `package.json` with your project details
   - Customize the README
   - Initialize a new git repository (if using degit)

### Best Practices

1. **File Organization**
   ```
   src/
   ├── lib/
   │   ├── components/
   │   │   ├── template/  # Original template components
   │   │   └── custom/    # Your custom components
   │   └── stores/
   ├── routes/
   └── styles/
   ```

2. **Customization Guidelines**
   - Create new components rather than heavily modifying template ones
   - Keep template files unchanged when possible
   - Document any modifications to template files in `TEMPLATE_CHANGES.md`
   - Use the provided component patterns for consistency

3. **Staying Updated**
   - Use the provided GitHub Action for manual syncs with the template
   - Review template updates carefully
   - Test thoroughly after syncing
   - Document significant template changes

4. **Version Control**
   - Tag your releases
   - Keep track of the template version you're using
   - Document template updates in your changelog

### Managing Template Updates

1. **When to Update**
   - Before starting new features
   - When needing specific template improvements
   - After major template versions
   - For security updates

2. **How to Update**
   - Go to Actions → "Sync with Upstream"
   - Click "Run workflow"
   - Review the created PR carefully
   - Test changes before merging

3. **Handling Conflicts**
   - Review conflicts file by file
   - Prefer template changes for core functionality
   - Preserve your custom business logic
   - Document your decisions

### Documentation

1. **Required Documentation**
   - `TEMPLATE_CHANGES.md` - Track modifications to template files
   - `CHANGELOG.md` - Document your project changes
   - Component documentation in your custom components

2. **Recommended Practices**
   - Document your component usage
   - Keep a list of modified template files
   - Document any template features you depend on