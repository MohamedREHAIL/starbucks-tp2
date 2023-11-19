/** @type {{images: {remotePatterns: [{protocol: string, hostname: string}]}, experimental: {serverComponents: boolean}}} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.starbucks.fr',
      },
    ],
  },
  experimental: {
    serverComponents: true,
  },
};

module.exports = nextConfig;
