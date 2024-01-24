/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin({ identifiers: 'short' });

const nextConfig = {
  images: {
    domains: [
      'static.im-linker.com',
      'newsimg.sedaily.com',
      /** @todo 서버에서 mock데이터로 해당 도메인을 내려줘서 임시로 추가. 추후에 삭제 필요 */
      'postfiles.pstatic.net',
      'r.yna.co.kr',
    ],
    formats: ['image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withBundleAnalyzer(withVanillaExtract(nextConfig));
