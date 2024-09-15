import { create } from "zustand";
type TextSizeStore = {
  textSize: string;
  setTextSize: (newSize: string) => void;
};
const useTextSizeStore = create<TextSizeStore>((set) => ({
  textSize: "24px",
  setTextSize: (newSize) => {
    set({ textSize: newSize });
  },
}));
export default useTextSizeStore;
