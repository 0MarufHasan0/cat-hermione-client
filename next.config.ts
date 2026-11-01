import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Local SVG event thumbnails (src/data events use /events/*.svg).
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "***" },
    ],
  },
  turbopack: {
    // This project sits inside an OneDrive folder that also contains a stray
    // package-lock.json, so Turbopack cannot auto-detect the root.
    root: path.join(import.meta.dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
