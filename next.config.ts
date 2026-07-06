import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    // Server Actions default to a 1 MB request body cap, which rejects larger
    // image uploads with a 400 before saveHeroImage() runs. Raise it to cover
    // the 8 MB image limit (plus multipart overhead).
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  // Canonicalise the domain: send www.fru.co.at → fru.co.at (308 permanent).
  // Both hostnames currently serve the site, which Google sees as duplicate
  // content. This runs at the edge before the next-intl middleware, so the
  // locale routing is unaffected. Path and query string are preserved.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fru.co.at" }],
        destination: "https://fru.co.at/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
