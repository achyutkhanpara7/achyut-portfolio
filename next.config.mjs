import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Runs on Vercel (not a static export) so middleware.ts can password-protect NDA case studies.
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  trailingSlash: true,
  async redirects() {
    return [
      // LAUNCH HOLD: until launch, the custom domain sends visitors to the old Framer site.
      // Remove these two lines to go live on achyutkhanpara.com.
      { source: '/:path*', has: [{ type: 'host', value: 'achyutkhanpara.com' }], destination: 'https://achyutkhanpara.framer.website/', permanent: false },
      { source: '/:path*', has: [{ type: 'host', value: 'www.achyutkhanpara.com' }], destination: 'https://achyutkhanpara.framer.website/', permanent: false },
      { source: '/work/ux/', destination: '/work/', permanent: true },
      { source: '/work/brand/', destination: '/work/', permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
