import Link from "next/link";
import { PBtn } from "@/components/common/PBtn";
import styles from "./page.module.scss";

const ITEMS = [
  { type: "newtype", label: "new+ype" },
  { type: "newtypeDetails", label: "new+ype details" },
] as const;

export default function Newtype() {
  return (
    <div className={styles.wrap}>
      <div className={styles.linkBox}>
        {ITEMS.map((item) => (
          <Link key={item.type} href={`/archives/gallery/${item.type}`}>
            <PBtn id={item.type} labelText={item.label} />
          </Link>
        ))}
      </div>
    </div>
  );
}
