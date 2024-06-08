import { create } from "zustand";

const defaultValues = { id: "", title: "" };

interface IRenameModal {
  isVisibleEditor: boolean;
  isOpen: boolean;
  initialValues: typeof defaultValues;
  setIsVisisble: () => void;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isVisibleEditor: false,
  isOpen: false,
  setIsVisisble: () => {
    set((state) => ({
      isVisibleEditor: !state.isVisibleEditor,
    }));
  },
  onOpen: (id, title) =>
    set({
      isOpen: true,
      initialValues: { id, title },
    }),
  onClose: () =>
    set({
      isOpen: false,
      initialValues: defaultValues,
    }),
  initialValues: defaultValues,
}));
