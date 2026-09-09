import styles from "./header.module.css";
import TrackInfo from "../components/trackInfo/TrackInfo";
import Transport from "../components/transport/Transport";
import Tempo from "../components/tempo/Tempo";
import Buses from "../components/buses/Buses";
import Master from "../components/master/Master";

export default function Header() {
  return (
    <header className={styles.header}>
      <TrackInfo />
      <Transport />
      <Tempo />
      <Buses />
      <Master />
    </header>
  );
}
