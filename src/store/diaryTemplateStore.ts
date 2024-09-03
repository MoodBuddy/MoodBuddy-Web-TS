import { create } from 'zustand';

const useDiaryTemplateStore = create((set) => ({
  diaryTemplate: '',
  setDiaryTemplate: (newDiaryTemplate) => {
    set({ diaryTemplate: newDiaryTemplate });
  },
}));

export default useDiaryTemplateStore;
