# ViteSwelt

A modern, opinionated SvelteKit starter template powered by Vite, featuring Tailwind CSS, TypeScript, and dark mode.

## 📦 Using This Template

### Direct Use
1. Click the "Use this template" button above
2. Create a new repository from this template
3. Clone your new repository
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start developing:
   ```bash
   npm run dev
   ```

### Manual Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/frankhereford/viteswelt.git your-project-name
   cd your-project-name
   ```
2. Remove the existing git repository and initialize a new one:
   ```bash
   rm -rf .git
   git init
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Update package.json:
   - Change the name
   - Update the description
   - Adjust the version
   - Update repository links
5. Start developing:
   ```bash
   npm run dev
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
   git clone [repository-url]
   cd viteswelt
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

The template includes several pre-built components:
- `Button` - Versatile button component with variants
- More components can be added in `src/lib/components`

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