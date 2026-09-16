import { useGenerals } from "../../store";
import InputText from "../../common/InputText";
import styles from "./ProjectInfo.module.css";

export default function ProjectInfo() {
  const { title, updateTitle, duration } = useGenerals(
    (state) => state.projectInfo,
  );
  return (
    <div>
      <h2>Project info</h2>
      <div className={styles.projectInfos}>
        <InputText
          storeValue={title}
          updateStoreValue={updateTitle}
          name="title"
        />
        <p>{duration}</p>
      </div>
    </div>
  );
}
