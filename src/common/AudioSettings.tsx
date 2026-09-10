import audioIcon from "../assets/icons/audioSettings.svg";
import styles from "./AudioSettings.module.css";

export default function AudioSettings() {
  return (
    <button className={styles.container}>
      <img src={audioIcon} alt="" aria-hidden="true"  />
    </button>
  );
}
