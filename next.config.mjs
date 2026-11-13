import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Runs on Vercel (not a static export) so middleware.ts can password-protect NDA case studies.
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/work/ux/', destination: '/work/', permanent: true },
      { source: '/work/brand/', destination: '/work/', permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
