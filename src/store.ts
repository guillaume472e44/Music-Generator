import { create } from "zustand";

interface Generals {
  trackInfo: {
    name: string;
    updateName: (newName: string) => void;
    duration: string;
    updateDuration: (newDuration: string) => void;
  };
  transport: {
    currentState: string;
    updateCurrentState: (newState: string) => void;
  };
  time: {
    tempo: number;
    updateTempo: (newTempo: number) => void;
  };
  master: {
    volume: number;
    updateVolume: (newVolume: number) => void;
  };
}

export const useGenerals = create<Generals>()((set) => ({
  trackInfo: {
    name: "Title",
    updateName: (newName) =>
      set((state) => ({ trackInfo: { ...state.trackInfo, name: newName } })),
    duration: "00:00",
    updateDuration: (newDuration) =>
      set((state) => ({
        trackInfo: { ...state.trackInfo, duration: newDuration },
      })),
  },
  transport: {
    currentState: "stop",
    updateCurrentState: (newState) =>
      set((state) => ({
        transport: { ...state.transport, currentState: newState },
      })),
  },
  time: {
    tempo: 120,
    updateTempo: (newTempo) =>
      set((state) => ({ time: { ...state.time, tempo: newTempo } })),
  },
  master: {
    volume: 100,
    updateVolume: (newVolume) =>
      set((state) => ({ master: { ...state.master, volume: newVolume } })),
  },
}));
