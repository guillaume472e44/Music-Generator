import Track from "../components/track/Track";
import styles from "./tracksPanel.module.css";

export default function TracksPanel() {
  return (
    <section className={styles.container}>
      <Track />
    </section>
  );
}
