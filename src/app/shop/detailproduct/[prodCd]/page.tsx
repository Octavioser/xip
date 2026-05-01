import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, PRODUCTS, toProductImageUrl } from "@/lib/productData";
import { DetailProduct } from "./DetailProduct";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ prodCd: p.prodCd }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ prodCd: string }>;
}): Promise<Metadata> {
  const { prodCd } = await params;
  const product = getProduct(prodCd);
  if (!product) return {};
  const description =
    product.prodDesc.join(" · ") || `${product.name} — XIP shop`;
  return {
    title: product.name,
    description,
    openGraph: {
      title: product.name,
      description,
      images: [toProductImageUrl(product.imageSrc)],
    },
  };
}

export default async function DetailProductPage({
  params,
}: {
  params: Promise<{ prodCd: string }>;
}) {
  const { prodCd } = await params;
  const product = getProduct(prodCd);
  if (!product) notFound();
  return <DetailProduct product={product} />;
}
