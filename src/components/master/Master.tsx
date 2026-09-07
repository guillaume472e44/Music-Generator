import SliderVolume from "../../common/SliderVolume";
import styles from "./Master.module.css";

export default function Master() {
  return (
    <div>
      <h2>Master volume</h2>
      <div className={styles.audioSlider}>
        <SliderVolume />
      </div>
    </div>
  );
}
