import { useState } from "react";
import styles from "./InputNumber.module.css";

interface Props {
  inputParams: {
    target: string;
    min: number;
    max: number;
  };
  storeParams: {
    storeValue: number;
    updateStoreValue: (newVal: number) => void;
  };
}

export default function InputNumber({ inputParams, storeParams }: Props) {
  const [draftValue, setDraftValue] = useState(storeParams.storeValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = Number.isNaN(e.currentTarget.valueAsNumber)
      ? storeParams.storeValue
      : e.currentTarget.valueAsNumber;

    setDraftValue(inputValue);
  }

  function formattedValue() {
    let validateValue = draftValue;
    if (draftValue < inputParams.min) validateValue = inputParams.min;
    if (draftValue > inputParams.max) validateValue = inputParams.max;
    setDraftValue(validateValue);
    storeParams.updateStoreValue(validateValue);
  }

  return (
    <div className={styles.inputContainer}>
      <input
        type="number"
        name={inputParams.target}
        id={inputParams.target}
        min={inputParams.min}
        max={inputParams.max}
        onChange={handleChange}
        onBlur={formattedValue}
        value={draftValue}
      />
      <label htmlFor={inputParams.target}> {storeParams.storeValue} </label>
    </div>
  );
}
