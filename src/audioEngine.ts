import * as Tone from "tone";
import { useGenerals } from "./store";

const logger: Parameters<typeof useGenerals.subscribe>[1] = (currentState) => {
  switch (currentState) {
    case "play":
      startAudio();
      break;
    case "stop":
      stopAudio();
      break;
  }
};

async function startAudio() {
  await Tone.start();

  const polySynth = new Tone.PolySynth(Tone.Synth).toDestination();
  new Tone.Loop((time) => {
    polySynth.triggerAttackRelease(["D4", "F4", "A4", "C5", "E5"], "16n", time);
  }, "4n").start(0);

  Tone.getTransport().start();
}

function stopAudio() {
  Tone.getTransport().stop();
  //   console.log(Tone.getTransport().bpm.value);
}

useGenerals.subscribe((state) => state.transport.currentState, logger);
useGenerals.subscribe(
  (state) => state.time.tempo,
  (tempo) => {
    Tone.getTransport().bpm.value = tempo;
  },
);
useGenerals.subscribe(
  (state) => state.master.volume,
  (volume) => {
    Tone.getDestination().volume.value = volume;
  },
);
