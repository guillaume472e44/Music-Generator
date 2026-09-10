import styles from "./controlsPanel.module.css";
import ProjectInfo from "../components/projectInfo/ProjectInfo";
import Transport from "../components/transport/Transport";
import Tempo from "../components/tempo/Tempo";
import Buses from "../components/buses/Buses";
import Master from "../components/master/Master";

export default function Header() {
  return (
    <header className={styles.controls}>
      <ProjectInfo />
      <Transport />
      <Tempo />
      <Buses />
      <Master />
    </header>
  );
}
