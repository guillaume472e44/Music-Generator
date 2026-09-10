import DoubleDropdown from "../../common/DoubleDropdown";
import BusSettings from "../../common/BusSettings";
import AudioSettings from "../../common/AudioSettings";
import styles from "./track.module.css";

export default function TrackInfo() {
  return (
    <article className={styles.container}>
      <button className={styles.trackNumber}>1</button>
      <DoubleDropdown />
      <BusSettings />
      <AudioSettings />
    </article>
  );
}
