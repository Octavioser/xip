import Link from "next/link";
import { PRODUCTS, toProductImageUrl } from "@/lib/productData";
import styles from "./page.module.scss";

export default function ShopPage() {
  return (
    <div className={styles.bg}>
      <div className={styles.spacer} />
      <div className={styles.gridWrap}>
        <div className={styles.grid}>
          {PRODUCTS.map((p) => (
            <div key={p.prodCd} className={styles.cell}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.thumb}
                src={toProductImageUrl(p.imageSrc)}
                alt={p.name}
                loading="lazy"
              />
              <Link
                href={`/shop/detailproduct/${p.prodCd}`}
                className={styles.hover}
              >
                <div className={styles.hoverInner}>
                  <div className={styles.hoverText}>{p.name}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
