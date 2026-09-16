import BlocksRow from "../components/blocksRow/BlocksRow";
import styles from "./gridPanel.module.css";

export default function GridPanel() {
  console.log("GridPanel render");

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target instanceof HTMLButtonElement && e.target.dataset.bar) {
      console.log(parseInt(e.target.dataset.bar));
    }
  }

  return (
    <section className={styles.container} onClick={handleClick}>
      <BlocksRow />
    </section>
  );
}
