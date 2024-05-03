/** @type {import('next').NextConfig} */

import createWithBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {};

const withBundleAnalyzer = createWithBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  // other Next.js configurations
});
