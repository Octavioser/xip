import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <p>Not Found</p>
      <Link href="/" className={styles.back}>
        ← back
      </Link>
    </div>
  );
}
