import { useTracks } from "../store";
import { useRef, useEffect } from "react";
import Track from "../components/track/Track";
import styles from "./tracksPanel.module.css";

export default function TracksPanel() {
  const { tracksList, addTrack } = useTracks();
  const contextMenuRef = useRef<HTMLDivElement>(null);

  // console.log("TracksPanel re-render");

  function handleContextMenu(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (contextMenuRef.current) {
      contextMenuRef.current.style.display = "block";
      contextMenuRef.current.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
    }
  }

  function handleClick() {
    addTrack();
    if (contextMenuRef.current) {
      contextMenuRef.current.style.display = "none";
    }
  }

  useEffect(() => {
    document.addEventListener("click", hideContextMenu);
    document.addEventListener("keydown", hideContextMenuWithKeyboard);

    function hideContextMenuWithKeyboard(e: KeyboardEvent) {
      if (e.key === "Escape") hideContextMenu();
    }

    function hideContextMenu() {
      if (
        contextMenuRef.current &&
        contextMenuRef.current.style.display !== "none"
      ) {
        contextMenuRef.current.style.display = "none";
      }
    }

    return (
      removeEventListener("click", hideContextMenu),
      removeEventListener("keydown", hideContextMenuWithKeyboard)
    );
  }, []);

  return (
    <section className={styles.container} onContextMenu={handleContextMenu}>
      {tracksList.map((track) => (
        <Track key={`Track-${track.id}`} id={track.id} />
      ))}
      <div ref={contextMenuRef} className={styles.contextMenu}>
        <button onClick={handleClick}>Ajouter une piste</button>
      </div>
    </section>
  );
}
