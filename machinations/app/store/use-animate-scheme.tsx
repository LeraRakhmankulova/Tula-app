import { create } from "zustand";

interface IAnimateScheme {
  iterations: number;
  count: number;
  isPlay: boolean;
  intervalId: any;
  setIterations: (count: number) => void;
  onPlay: () => void;
  onStop: () => void;
  onReset: () => void;
}

export const useAnimateScheme = create<IAnimateScheme>((set) => ({
  iterations: 0,
  isPlay: false,
  count: 0,
  intervalId: null,

  setIterations: (count: number) => {
    set({
      iterations: count,
    });
  },
  onPlay: () => {
    set((state) => {
      if (!state.isPlay && state.count < state.iterations) {
        const newIntervalId = setInterval(() => {
          set((state) => ({ count: state.count + 1 }));
        }, 1000); // Вызываем функцию каждую секунду
        return { isPlay: true, intervalId: newIntervalId };
      }
      return state;
    });
  },
  onStop: () => {
    set((state) => {
      if (state.intervalId) {
        clearInterval(state.intervalId); // Останавливаем интервал
        return { isPlay: false, intervalId: null };
      }
      return state;
    });
  },
  onReset: () =>
    set((state) => {
      if (state.intervalId) {
        clearInterval(state.intervalId); // Останавливаем интервал
        return { isPlay: false, intervalId: null };
      }
      return state;
    }),
}));
