import type { MetadataRoute } from "next";
import { GALLERY_IMAGES } from "@/lib/galleryData";
import { PRODUCTS } from "@/lib/productData";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xipred.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: "", priority: 1.0 },
    { path: "/home", priority: 0.9 },
    { path: "/archives", priority: 0.8 },
    { path: "/archives/xhell", priority: 0.7 },
    { path: "/archives/newtype", priority: 0.7 },
    { path: "/archives/fetus", priority: 0.7 },
    { path: "/video", priority: 0.7 },
    { path: "/video/masterinnovation", priority: 0.6 },
    { path: "/video/masterinnovationbunka", priority: 0.6 },
    { path: "/shop", priority: 0.8 },
    { path: "/credit", priority: 0.5 },
  ];

  const galleryPaths = Object.keys(GALLERY_IMAGES).map((type) => ({
    path: `/archives/gallery/${type}`,
    priority: 0.6,
  }));

  const productPaths = PRODUCTS.map((p) => ({
    path: `/shop/detailproduct/${p.prodCd}`,
    priority: 0.5,
  }));

  return [...staticPaths, ...galleryPaths, ...productPaths].map(
    ({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    }),
  );
}
