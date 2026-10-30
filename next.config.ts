import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Tắt Cache Components: khi bật, Next.js dùng React <Activity> để giữ lại DOM
  // của các route đã rời (ẩn bằng display: none !important) thay vì unmount,
  // khiến DOM phình to sau mỗi lần chuyển trang.
  // Project hiện không dùng "use cache" / cacheLife / cacheTag nên tắt không ảnh hưởng.
  cacheComponents: false,
  turbopack: {
    rules: {
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
