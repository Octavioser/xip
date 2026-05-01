import { notFound } from "next/navigation";
import { GALLERY_IMAGES, type GalleryType } from "@/lib/galleryData";
import { Gallery } from "./Gallery";

export function generateStaticParams() {
  return Object.keys(GALLERY_IMAGES).map((galleryType) => ({ galleryType }));
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ galleryType: string }>;
}) {
  const { galleryType } = await params;
  if (!(galleryType in GALLERY_IMAGES)) notFound();
  return <Gallery galleryType={galleryType as GalleryType} />;
}
