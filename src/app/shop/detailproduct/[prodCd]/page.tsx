import { notFound } from "next/navigation";
import { getProduct, PRODUCTS } from "@/lib/productData";
import { DetailProduct } from "./DetailProduct";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ prodCd: p.prodCd }));
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
