/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
module.exports = nextConfig;

module.exports = {
  experimental: {
    outputStandalone: true,
  },
};

// https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental

// // Bundle analyzer
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// module.exports = withBundleAnalyzer({});
