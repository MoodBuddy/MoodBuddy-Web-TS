import { create } from "zustand";
type FontStore = {
  font: string;
  setFont: (newFont: string) => void;
};
const useFontStore = create<FontStore>((set) => ({
  font: "Inter",
  setFont: (newFont) => {
    set({ font: newFont });
  },
}));
export default useFontStore;
