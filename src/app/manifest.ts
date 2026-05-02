import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "xip",
    short_name: "xip",
    description: "born from XIP die with XIP.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FF0000",
    icons: [
      {
        src: "/img/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/img/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
