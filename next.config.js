/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // GitHub Pages configuration
  basePath: '/newhandbook',
  assetPrefix: '/newhandbook/',
  
  // Enable SCSS support
  sassOptions: {
    includePaths: ['./styles'],
  },

  // Static export configuration for deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },

  // Ignore build errors for unused components
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },


  // Custom webpack configuration for markdown files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    
    return config;
  },

  // Environment variables
  env: {
    SITE_NAME: 'Employee Handbook',
    SITE_DESCRIPTION: 'Your comprehensive employee handbook',
  },

};

module.exports = nextConfig;
