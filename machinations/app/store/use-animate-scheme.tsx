import { create } from "zustand";

interface IAnimateScheme {
  iterations: number;
  games: number;
  iterationsCount: number;
  gamesCount: number;
  isPlay: boolean;
  isReset: boolean;
  intervalId: any;
  time: number;
  setTime: (count: number) => void;
  setIterations: (count: number) => void;
  setGames: (count: number) => void;
  onPlay: () => void;
  onStop: () => void;
  onReset: () => void;
}

export const useAnimateScheme = create<IAnimateScheme>((set) => ({
  iterations: 1,
  games: 1,
  isPlay: false,
  isReset: false,
  iterationsCount: 0,
  gamesCount: 0,
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
  setGames: (count: number) => {
    set({
      games: count,
    });
  },
  onPlay: () => {
    set((state) => {
      if (!state.isPlay && state.iterationsCount < state.iterations) {
        const newIntervalId = setInterval(() => {
          set((state) => {
            const newCount = state.iterationsCount + 1;
            if (newCount === +state.iterations) {
              if (state.gamesCount + 1 === +state.games) {
                clearInterval(state.intervalId);
                return {
                  ...state,
                  iterationsCount: newCount,
                  isPlay: false,
                  intervalId: null,
                  isReset: true,
                };
              } else {
                return {
                  ...state,
                  iterationsCount: 0,
                  gamesCount: state.gamesCount + 1,
                };
              }
            }
            return { ...state, iterationsCount: newCount };
          });
        }, state.time * 1000);
        return {
          ...state,
          isPlay: true,
          intervalId: newIntervalId,
          isReset: false,
        };
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
      return {
        isPlay: false,
        intervalId: null,
        iterationsCount: 0,
        gamesCount: 0,
        isReset: true,
      };
    }),
}));
