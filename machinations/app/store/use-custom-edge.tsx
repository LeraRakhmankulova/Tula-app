import { create } from "zustand";
import { CustomEdgesTypes } from "@/app/types/structs";

interface ICustomEdge {
  currentType: string;
  onChangeType: (type: string) => void;
}

export const useChangeEdgeType = create<ICustomEdge>((set) => ({
  currentType: "Default",
  onChangeType: (type: string) =>
    set({
      currentType: type,
    }),
}));
