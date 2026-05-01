import type { Product } from "@/lib/productData";
import styles from "./ProductDescription.module.scss";

const fmt = (n: number) => n.toLocaleString("en-US");

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.name}>{product.name}</h2>
      <h2 className={styles.price}>
        ₩{fmt(product.price)} / ${fmt(product.usPrice)}
      </h2>
      <br />
      <br />

      {product.prodDesc.map((line, i) => (
        <h2 key={i} className={styles.descLine}>
          {line}
        </h2>
      ))}
      <br />
      <br />

      <div>
        <select className={styles.sizeSelect} disabled defaultValue="">
          <option value="">SOLD OUT</option>
          {product.variants.map((v) => (
            <option key={v.prodCdD} value={v.prodCdD}>
              {v.size}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.btnRow}>
        <button type="button" className={styles.btn} disabled>
          ADD TO CART
        </button>
        <button type="button" className={styles.btn} disabled>
          SOLD OUT
        </button>
      </div>

      <ul className={styles.detailList}>
        {product.prodDescD.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
      <div className={styles.spacer} />
    </div>
  );
}
