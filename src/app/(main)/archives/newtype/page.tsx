import type { Metadata } from "next";
import { LoadingLink } from "@/components/common/LoadingLink";
import { PBtn } from "@/components/common/PBtn";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "new+ype",
  description: "new+ype — XIP archive",
};

const ITEMS = [
  { type: "newtype", label: "new+ype" },
  { type: "newtypeDetails", label: "new+ype details" },
] as const;

export default function Newtype() {
  return (
    <div className={styles.wrap}>
      <div className={styles.linkBox}>
        {ITEMS.map((item) => (
          <LoadingLink key={item.type} href={`/archives/gallery/${item.type}`}>
            <PBtn id={item.type} labelText={item.label} />
          </LoadingLink>
        ))}
      </div>
    </div>
  );
}
