import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "pwa-192.png",
        "pwa-512.png",
        "maskable-512.png",
        "logo.png",
        "logo-192.png",
      ],

      manifest: {
        id: "/",

        name: "Student Diary Cloud",
        short_name: "Student Diary",

        description:
          "Student diary and academic dashboard",

        theme_color: "#087F73",
        background_color: "#F5F5F5",

        display: "standalone",
        orientation: "portrait",

        start_url: "/",
        scope: "/",

        icons: [
          {
            src: "/pwa-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}"],
        navigateFallback: "/index.html",
      },

      devOptions: {
        enabled: true,
      },
    }),
  ],
});