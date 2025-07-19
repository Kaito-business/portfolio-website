import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages のサブディレクトリ用の設定
  // リポジトリ名に合わせて変更してください
  // basePath: '/portfolio-website',
  // assetPrefix: '/portfolio-website/',
};

export default nextConfig;
