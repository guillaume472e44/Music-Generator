import { useState } from "react";
import styles from "./SliderVolume.module.css";

export default function SliderVolume() {
  const [value, setValue] = useState(100);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.valueAsNumber);
  }

  return (
    <div className={styles.audioSlider__inputContainer}>
      <input
        id="volume"
        type="range"
        min="0"
        max="127"
        value={value}
        onChange={handleChange}
      />
      <label htmlFor="volume">{value}</label>
    </div>
  );
}
