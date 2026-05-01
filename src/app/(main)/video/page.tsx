import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Video",
  description: "XIP video archive",
};

export default function Video() {
  return (
    <div className="beforeStart">
      <div className={styles.center}>
        <iframe
          className={styles.iframe}
          src="https://www.youtube.com/embed/DLR-kfusBBw"
          title="100"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
