import { LoadingLink } from "@/components/common/LoadingLink";
import { PBtn } from "@/components/common/PBtn";
import styles from "./page.module.scss";

export default function StartPage() {
  return (
    <div className={`beforeStart ${styles.bg}`}>
      <div className={styles.center}>
        <div className={styles.entryBox}>
          <LoadingLink href="/home">
            <PBtn labelText="click to enter" className={styles.entryText} />
          </LoadingLink>
        </div>
      </div>
    </div>
  );
}
