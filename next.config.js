/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
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
