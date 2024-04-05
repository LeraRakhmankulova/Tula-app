import { create } from "zustand";

interface IAnimateScheme {
  iterations: number;
  count: number;
  isPlay: boolean;
  intervalId: any;
  time: number;
  setTime: (count: number) => void;
  setIterations: (count: number) => void;
  onPlay: () => void;
  onStop: () => void;
  onReset: () => void;
}

export const useAnimateScheme = create<IAnimateScheme>((set) => ({
  iterations: 1,
  isPlay: false,
  count: 0,
  intervalId: null,
  time: 1,
  setTime: (count: number) => {
    set({ time: count });
  },
  setIterations: (count: number) => {
    set({
      iterations: count,
    });
  },
  onPlay: () => {
    set((state) => {
      if (!state.isPlay && state.count < state.iterations) {
        const newIntervalId = setInterval(() => {
          set((state) => {
            const newCount = state.count + 1;
            if (newCount === +state.iterations) {
              clearInterval(state.intervalId);
              return {
                ...state,
                count: newCount,
                isPlay: false,
                intervalId: null,
              };
            }
            return { ...state, count: newCount };
          });
        }, state.time * 1000);
        return { ...state, isPlay: true, intervalId: newIntervalId };
      }
      return state;
    });
  },
  onStop: () => {
    set((state) => {
      if (state.intervalId) {
        clearInterval(state.intervalId);
        return { isPlay: false, intervalId: null };
      }
      return state;
    });
  },
  onReset: () =>
    set((state) => {
      clearInterval(state.intervalId);
      return { isPlay: false, intervalId: null, count: 0 };
    }),
}));
