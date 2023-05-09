/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
};

// Article:https://www.ceos3c.com/web-developmen...
// WSL2: https://www.ceos3c.com/?s=wsl2

// ⚡️ Courses
// ↬ https://www.stefanrows.com

// 📝 Blog
// ↬ https://www.ceos3c.com
