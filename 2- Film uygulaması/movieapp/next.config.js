/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // internetten cektiğim fotoları kullanabilmek için kullanıyoruz
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
