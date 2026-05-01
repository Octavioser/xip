import Link from "next/link";
import { PBtn } from "@/components/common/PBtn";
import styles from "./page.module.scss";

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
        <Link href="/archives/gallery/xell">
          <PBtn id="xell" labelText="xell" />
        </Link>
        <Link href="/archives/newtype">
          <PBtn id="newtype" labelText="new+ype" />
        </Link>
        <Link href="/archives/fetus">
          <PBtn id="fetus" labelText="fetus" />
        </Link>
        {PHOTO_LINKS.map((e) => (
          <Link key={e.id} href={`/archives/gallery/${e.id}`}>
            <PBtn id={e.id} labelText={e.text} />
          </Link>
        ))}
      </div>
    </div>
  );
}
