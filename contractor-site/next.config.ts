import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ironcrewai.co.uk" }],
        destination: "https://ironcrewai.co.uk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
