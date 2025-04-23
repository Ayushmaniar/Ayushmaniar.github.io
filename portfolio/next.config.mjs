/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Tells Next.js to export static HTML/CSS/JS files
  basePath: '',
  // Update this to match your repository name if not publishing to root domain
  images: {
    unoptimized: true,
    // This allows images to work in static export
  },
  // Server components configuration for static export
  serverExternalPackages: [],
  // Disable ESLint during build to prevent failing on minor issues
  eslint: {
    // Only run ESLint on specific directories during builds
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
