import styles from "./block.module.css";

type Props = {
  isHighlight: boolean;
  bar: number;
};

export default function Block({ isHighlight, bar }: Props) {
  return (
    <button
      className={`${styles.block} ${isHighlight ? styles.highlight : ""}`}
      data-bar={bar}
    ></button>
  );
}
