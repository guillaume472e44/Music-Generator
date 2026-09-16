import { useTracks } from "../../store";
// import { memo } from "react";
import DoubleDropdown from "../../common/DoubleDropdown";
import BusSettings from "../../common/BusSettings";
import AudioSettings from "../../common/AudioSettings";
import styles from "./track.module.css";

interface Props {
  id: number;
}

export default function Track({ id }: Props) {
  console.log(`Track N° ${id + 1} re-render`);

  const currentTrack = useTracks((state) => state.tracksList[id]);
  const updateTrack = useTracks((state) => state.updateTrack);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    if (e.button === 2) {
      e.stopPropagation();
      e.preventDefault();
    } else {
      updateTrack({ ...currentTrack, isActive: !currentTrack.isActive });
      // console.log(currentTrack);
    }
  }

  return (
    <article className={styles.container} onContextMenu={handleClick}>
      <button
        className={`${styles.trackNumber} ${currentTrack.isActive ? styles.active : ""}`}
        onClick={handleClick}
      >
        {id + 1}
      </button>
      <DoubleDropdown />
      <AudioSettings />
      <BusSettings />
    </article>
  );
}
