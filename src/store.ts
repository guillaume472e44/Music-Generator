import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { produce } from "immer";

interface Generals {
  projectInfo: {
    title: string;
    updateTitle: (newTitle: string) => void;
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

export const useGenerals = create<Generals>()(
  subscribeWithSelector((set) => ({
    projectInfo: {
      title: "Title",
      updateTitle: (newTitle) =>
        set((state) => ({
          projectInfo: { ...state.projectInfo, title: newTitle },
        })),
      duration: "00:00 / 00:00",
      updateDuration: (newDuration) =>
        set((state) => ({
          projectInfo: { ...state.projectInfo, duration: newDuration },
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
      volume: 0,
      updateVolume: (newVolume) =>
        set((state) => ({ master: { ...state.master, volume: newVolume } })),
    },
  })),
);

/**
 *
 * - - - - Gestion des pistes
 *
 */

interface Note {
  position: number; // Position dans le bloc
  length: number; // Longueur de note
  pitch: number; // Hauteur de note
}

// Modèle de bloc réutilisable, les changements sont communs entre toutes les instances
interface Pattern {
  id: string; // Identifiant unique (nanoid)
  data: Array<Note>; // Tableau de Note
  width: number; // Longueur du bloc (en mesure)
}

// Bloc positionné sur la timeline
interface Block {
  timelinePosition: number; // Position du bloc sur la timeline
  model: string; // id du Pattern
}

interface Sample {
  id: string; // Identifiant unique (nanoid)
  category: string;
  name: string;
  url: string;
}

interface Track {
  id: number; // Index de la piste
  sample: Sample | null; // Fichier audio
  isActive: boolean; // Une piste vide ou mutée est inactive
  volume: number; // Volume de la piste
  panoramic: number; // Valeur de panoramique
  blockPatterns: Array<Pattern>; // modèles de blocs réutilisables
  blocksOnTrack: Array<Block>; // blocs positionnés sur la timeline
}

interface Tracks {
  tracksList: Array<Track>;
  addTrack: () => void;
  updateTrack: (trackUpdated: Track) => void;
  addPattern: (trackId: number, newPattern: Pattern) => void;
  updatePattern: (trackId: number, patternUpdated: Pattern) => void;
}

const emptyTrack: Track = {
  id: 0,
  sample: null,
  isActive: false,
  volume: 100,
  panoramic: 0,
  blockPatterns: [],
  blocksOnTrack: [],
};

export const useTracks = create<Tracks>()((set) => ({
  tracksList: [emptyTrack],

  addTrack: () => {
    set(
      produce((state: Tracks) => {
        state.tracksList.push({
          ...emptyTrack,
          id: state.tracksList.length,
        });
      }),
    );
  },

  updateTrack: (trackUpdated) => {
    set(
      produce((state: Tracks) => {
        state.tracksList[trackUpdated.id] = trackUpdated;
      }),
    );
  },

  addPattern: (trackId, newPattern) => {
    set(
      produce((state: Tracks) => {
        state.tracksList[trackId].blockPatterns.push(newPattern);
      }),
    );
  },

  updatePattern: (trackId, patternUpdated) => {
    set(
      produce((state: Tracks) => {
        const track = state.tracksList[trackId];
        const patternIndex = track.blockPatterns.findIndex(
          (pattern) => pattern.id === patternUpdated.id,
        );
        state.tracksList[trackId].blockPatterns[patternIndex] = patternUpdated;
      }),
    );
  },
}));
