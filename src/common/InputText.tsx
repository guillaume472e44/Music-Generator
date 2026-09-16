import styles from "./InputText.module.css";

interface Props {
  name: string;
  storeValue: string;
  updateStoreValue: (newVal: string) => void;
}

export default function InputText({
  name,
  storeValue,
  updateStoreValue,
}: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateStoreValue(e.currentTarget.value);
  }

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        name={name}
        id={name}
        value={storeValue}
        onChange={handleChange}
        placeholder="enter text"
      />
      <label htmlFor={name}> {storeValue} </label>
    </div>
  );
}
