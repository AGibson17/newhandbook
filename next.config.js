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

  // Optimize for static site generation
  experimental: {
    appDir: false, // Using pages directory
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

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
