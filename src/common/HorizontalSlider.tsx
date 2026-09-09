import styles from "./HorizontalSlider.module.css";

interface Props {
  value: number;
  updateValue: (newVolume: number) => void;
}

export default function HorizontalSlider({ value, updateValue }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateValue(e.currentTarget.valueAsNumber);
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
