import { create } from "zustand";

interface IAnimateScheme {
  isPlay: boolean;
  onPlay: () => void;
  onStop: () => void;
  onReset: () => void;
}

export const useAnimateScheme = create<IAnimateScheme>((set) => ({
  isPlay: false,
  onPlay: () =>
    set({
      isPlay: true,
    }),
  onStop: () =>
    set({
      isPlay: false,
    }),
  onReset: () =>
    set({
      isPlay: true,
    }),
}));
