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
};

export default withNextIntl(nextConfig);
