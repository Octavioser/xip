import styles from "./page.module.scss";

export default function MasterinnovationBunka() {
  return (
    <div>
      <div className="youtube">
        <iframe
          className={styles.iframe}
          src="https://www.youtube.com/embed/pJ1a-MzZriw?autoplay=1"
          title="Master Innovation Bunka"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
