import { create } from "zustand";
type TitleStore = {
  title: string;
  setTitle: (newTitle: string) => void;
};
const useTitleStore = create<TitleStore>((set) => ({
  title: "",
  setTitle: (newTitle) => set({ title: newTitle }),
}));

export default useTitleStore;
