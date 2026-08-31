# Ayush Maniar Portfolio

Personal portfolio for Ayush Maniar, an AI researcher and builder focused on multi-agent systems, agentic tooling, and creative AI.

## Live Demo

Visit the website at [https://ayushmaniar.github.io](https://ayushmaniar.github.io)

## Features

- Responsive desktop and mobile layouts
- Accessible dark and light themes
- Research and open-source project showcase
- Deferred, in-page resume preview with a direct PDF fallback
- Search and social metadata, sitemap, and robots configuration
- Static export for GitHub Pages

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/ayushmaniar/Ayushmaniar.github.io.git

# Navigate to the project directory
cd Ayushmaniar.github.io/portfolio

# Install dependencies
npm install
```

### Running locally

```bash
# Start the development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Building for production

```bash
# Build the project
npm run build
```

## Deployment

This project is automatically deployed to GitHub Pages by GitHub Actions whenever commits are pushed to `main`. Creating a local commit alone does not publish it.

The GitHub Actions workflow builds the static `out/` directory and publishes it to GitHub Pages. The `deploy` script is retained only for manual legacy deployment and is not the standard release path.

## Technologies Used

- Next.js
- React
- TypeScript
- TailwindCSS
- Framer Motion
- React Icons
- next-themes for dark mode
