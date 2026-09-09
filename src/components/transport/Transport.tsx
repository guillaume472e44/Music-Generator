import { useGenerals } from "../../store";
import { useState } from "react";
import styles from "./Transport.module.css";

type TransportAction = "back" | "play" | "stop";

interface TransportState {
  back: boolean;
  play: boolean;
  stop: boolean;
  antiSpam: boolean;
  prevState: TransportAction;
}

export default function Transport() {
  const initialState: TransportState = {
    back: false,
    play: false,
    stop: false,
    antiSpam: false,
    prevState: "stop",
  };

  const [transportState, setTransportState] = useState(initialState);
  const { updateCurrentState } = useGenerals((state) => state.transport);

  function isTransportAction(value: string): value is TransportAction {
    if (["back", "play", "stop"].includes(value)) return true;
    return false;
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const action = e.currentTarget.dataset.action;
    if (typeof action === "string" && isTransportAction(action)) {
      if (action === transportState.prevState) return; // Évite de redéclencher un état déjà actif
      if (transportState.antiSpam) return; // impose un petit delais entre les changements d'états

      const newState = { ...initialState, [action]: true, prevState: action };
      updateCurrentState(action);

      if (!newState.play) {
        setTransportState({ ...newState, antiSpam: true });
        setTimeout(() => {
          setTransportState({ ...initialState, prevState: action });
        }, 800);
      } else {
        setTransportState(newState);
      }
    }
  }

  return (
    <div>
      <h2>transport controls</h2>
      <div className={styles.transports__buttons}>
        <button data-action="back" onClick={handleClick}>
          <span>BACK</span>
          <span
            className={`${styles.indicators} ${transportState.back ? styles.active : ""}`}
          ></span>
        </button>
        <button data-action="play" onClick={handleClick}>
          <span>PLAY</span>
          <span
            className={`${styles.indicators} ${transportState.play ? styles.active : ""}`}
          ></span>
        </button>
        <button data-action="stop" onClick={handleClick}>
          <span>STOP</span>
          <span
            className={`${styles.indicators} ${transportState.stop ? styles.active : ""}`}
          ></span>
        </button>
      </div>
    </div>
  );
}
