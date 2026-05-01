import { ProductDescription } from "@/components/shop/ProductDescription";
import { ProductSlider } from "@/components/shop/ProductSlider";
import type { Product } from "@/lib/productData";
import styles from "./DetailProduct.module.scss";

export function DetailProduct({ product }: { product: Product }) {
  return (
    <div className={styles.bg}>
      <div className={styles.layout}>
        <div className={styles.sliderSide}>
          <ProductSlider images={product.images} />
        </div>
        <div className={styles.descSide}>
          <ProductDescription product={product} />
        </div>
      </div>
    </div>
  );
}
