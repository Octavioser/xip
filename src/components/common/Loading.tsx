"use client";

import { useAppContext } from "@/contexts/AppContext";
import styles from "./Loading.module.scss";

export function Loading() {
  const { loading } = useAppContext();
  if (!loading) return null;
  return (
    <div className={styles.overlay}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.logo}
        src="/xItem/i/main/loadingLogo.gif"
        alt="Loading"
      />
    </div>
  );
}
