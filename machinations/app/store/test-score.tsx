import { create } from "zustand";

interface ITest {
  edgeValue: number;
  setEdgeValue: (newEdgeValue: number) => void;
}

export const useTestScore = create<ITest>((set) => ({
  edgeValue: 0,
  setEdgeValue: (newEdgeValue: number) =>
    set({
      edgeValue: newEdgeValue,
    }),
}));
