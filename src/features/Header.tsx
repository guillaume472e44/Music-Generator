import styles from "./header.module.css";
import Transport from "../components/transport/Transport";
import Master from "../components/master/Master";

export default function Header() {
  return (
    <header className={styles.header}>
      <Transport />
      <Master />
    </header>
  );
}
