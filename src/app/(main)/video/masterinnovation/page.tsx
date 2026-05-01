import styles from "./page.module.scss";

export default function Masterinnovation() {
  return (
    <div>
      <div className="youtube">
        <iframe
          className={styles.iframe}
          src="https://www.youtube.com/embed/-yW0UH67STI?autoplay=1"
          title="Master Innovation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
