import { create } from "zustand";
import { CustomEdgesTypes } from "@/app/types/structs";

interface ICustomEdge {
  currentType: string;
  onChangeType: (type: string) => void;
  analytics: boolean;
  setAnalytics: (isShow: boolean) => void;
}

export const useChangeEdgeType = create<ICustomEdge>((set) => ({
  analytics: false,
  setAnalytics: (isShow: boolean) =>
    set({
      analytics: isShow,
    }),
  currentType: "Default",
  onChangeType: (type: string) =>
    set({
      currentType: type,
    }),
}));
