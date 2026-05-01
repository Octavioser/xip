import { PBtn } from "@/components/common/PBtn";
import styles from "./page.module.scss";

export default function Credit() {
  return (
    <div className={`logoImage ${styles.wrap}`}>
      <a
        href="https://instagram.com/xip.red"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <PBtn labelText="@xip.red" className={styles.text} />
      </a>
      <p />
      <PBtn
        className={`pBtnNoHover ${styles.text}`}
        labelText="contact: xip@xip.red"
      />
    </div>
  );
}
