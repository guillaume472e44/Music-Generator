import { useGenerals } from "../../store";
import HorizontalSlider from "../../common/HorizontalSlider";
import styles from "./Master.module.css";

export default function Master() {
  const { volume, updateVolume } = useGenerals((state) => state.master);
  return (
    <div>
      <h2>Master volume</h2>
      <div className={styles.audioSlider}>
        <HorizontalSlider value={volume} updateValue={updateVolume} />
      </div>
    </div>
  );
}
