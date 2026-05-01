import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GALLERY_IMAGES, type GalleryType } from "@/lib/galleryData";
import { Gallery } from "./Gallery";

const GALLERY_LABELS: Record<string, string> = {
  xell: "xell",
  xhellMovieProject: "XhELL Movie Project",
  xhellCollection: "XhELL Collection",
  xhellDetails: "XhELL Details",
  newtype: "new+ype",
  newtypeDetails: "new+ype Details",
  fetus: "fetus",
  fetusDetails: "fetus Details",
  isetanDenimProject: "Isetan Denim Project",
  trauma: "trauma",
  articulatedAnatomy: "Articulated Anatomy",
  inUtero: "in utero",
};

export function generateStaticParams() {
  return Object.keys(GALLERY_IMAGES).map((galleryType) => ({ galleryType }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ galleryType: string }>;
}): Promise<Metadata> {
  const { galleryType } = await params;
  if (!(galleryType in GALLERY_IMAGES)) return {};
  const label = GALLERY_LABELS[galleryType] ?? galleryType;
  return {
    title: label,
    description: `${label} — XIP archive gallery`,
  };
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
