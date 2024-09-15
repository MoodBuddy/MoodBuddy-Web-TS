import { create } from "zustand";
type UpdateDiaryStore = {
  updateDiary: boolean;
  setUpdateDiary: (newUpdateDiary: boolean) => void;
};
const useUpdateDiaryStore = create<UpdateDiaryStore>((set) => ({
  updateDiary: false,
  setUpdateDiary: (newUpdateDiary) => set({ updateDiary: newUpdateDiary }),
}));

export default useUpdateDiaryStore;
