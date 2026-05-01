import type { Metadata } from "next";
import Link from "next/link";
import { LoadingLink } from "@/components/common/LoadingLink";
import { PBtn } from "@/components/common/PBtn";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Archives",
  description: "XIP archive — XhELL, new+ype, fetus, photo works",
};

const PHOTO_LINKS = [
  { id: "isetanDenimProject", text: "isetan denim project" },
  { id: "trauma", text: "trauma" },
  { id: "articulatedAnatomy", text: "articulated anatomy" },
  { id: "inUtero", text: "in utero" },
] as const;

export default function Archives() {
  return (
    <div className={styles.wrap}>
      <div className={styles.linkBox}>
        <Link href="/archives/xhell">
          <PBtn id="xhell" labelText="XhELL" />
        </Link>
        <LoadingLink href="/archives/gallery/xell">
          <PBtn id="xell" labelText="xell" />
        </LoadingLink>
        <Link href="/archives/newtype">
          <PBtn id="newtype" labelText="new+ype" />
        </Link>
        <Link href="/archives/fetus">
          <PBtn id="fetus" labelText="fetus" />
        </Link>
        {PHOTO_LINKS.map((e) => (
          <LoadingLink key={e.id} href={`/archives/gallery/${e.id}`}>
            <PBtn id={e.id} labelText={e.text} />
          </LoadingLink>
        ))}
      </div>
    </div>
  );
}
