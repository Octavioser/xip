"use client";

import { LoadingLink } from "@/components/common/LoadingLink";
import { PBtn } from "@/components/common/PBtn";
import { useAppContext } from "@/contexts/AppContext";
import styles from "./page.module.scss";

export default function StartPage() {
  const { setMusicPlaying } = useAppContext();
  return (
    <div className={`beforeStart ${styles.bg}`}>
      <div className={styles.center}>
        <div className={styles.entryBox}>
          <LoadingLink href="/home" onClick={() => setMusicPlaying(true)}>
            <PBtn labelText="click to enter" className={styles.entryText} />
          </LoadingLink>
        </div>
      </div>
    </div>
  );
}
