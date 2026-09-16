import Block from "../../common/Block";
import styles from "./BlocksRow.module.css";

export default function BlocksRow() {
  return (
    <div className={styles.rowContainer}>
      {Array.from({ length: 48 }, (_, i) => (
        <Block key={i} isHighlight={i % 4 === 0 ? true : false} bar={i} />
      ))}
    </div>
  );
}
