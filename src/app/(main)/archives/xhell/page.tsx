import type { Metadata } from "next";
import { LoadingLink } from "@/components/common/LoadingLink";
import { PBtn } from "@/components/common/PBtn";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "XhELL",
  description: "XhELL — movie project, collection, details",
};

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
            <LoadingLink key={item.type} href={`/archives/gallery/${item.type}`}>
              <PBtn id={item.type} labelText={item.label} />
            </LoadingLink>
          ))}
        </div>
      </div>
    </div>
  );
}
