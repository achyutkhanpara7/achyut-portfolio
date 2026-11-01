import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: works on Vercel, Netlify, GitHub Pages or any static host.
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  trailingSlash: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
