import type { Metadata } from "next";
import { LoadingLink } from "@/components/common/LoadingLink";
import { PBtn } from "@/components/common/PBtn";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "fetus",
  description: "fetus — XIP archive",
};

const ITEMS = [
  { type: "fetus", label: "fetus" },
  { type: "fetusDetails", label: "fetus details" },
] as const;

export default function Fetus() {
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
