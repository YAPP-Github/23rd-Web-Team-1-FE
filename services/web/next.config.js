/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin({ identifiers: 'short' });

const nextConfig = {
  images: {
    domains: ['newsimg.sedaily.com'],
  },
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
