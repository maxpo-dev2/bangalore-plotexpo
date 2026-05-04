/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/registration/:path*",
        destination: "/register/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
