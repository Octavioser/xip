import Link from "next/link";
import { PBtn } from "@/components/common/PBtn";
import styles from "./page.module.scss";

const ITEMS = [
  { type: "xhellMovieProject", label: "XhELL movie project" },
  { type: "xhellCollection", label: "XhELL collection" },
  { type: "xhellDetails", label: "XhELL details" },
] as const;

export default function Xhell() {
  return (
    <div className={styles.wrap}>
      <div className={styles.linkBox}>
        <div className={styles.column}>
          {ITEMS.map((item) => (
            <Link key={item.type} href={`/archives/gallery/${item.type}`}>
              <PBtn id={item.type} labelText={item.label} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
