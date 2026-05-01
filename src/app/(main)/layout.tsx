import type { ReactNode } from "react";
import { MainBtn } from "@/components/shell/MainBtn";
import styles from "./layout.module.scss";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.bg}>
      <MainBtn />
      {children}
    </div>
  );
}
