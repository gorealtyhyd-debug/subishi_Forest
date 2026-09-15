/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "subishi.com", pathname: "/wp-content/uploads/**" }
    ]
  }
};

export default nextConfig;
