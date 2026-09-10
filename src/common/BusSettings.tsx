import busIcon from "../assets/icons/bus.svg";
import styles from "./BusSettings.module.css";

export default function BusSettings() {
  return (
    <button className={styles.container}>
      <img src={busIcon} alt="" aria-hidden="true" />
    </button>
  );
}
