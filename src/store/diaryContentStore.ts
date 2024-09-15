import { create } from "zustand";
type DiaryContentStore = {
  content: string;
  setContent: (newContent: string) => void;
  addTemplate: (newTemplate: string) => void;
};
const useDiaryContentStore = create<DiaryContentStore>((set) => ({
  content: "",
  setContent: (newContent) => set({ content: newContent }),
  addTemplate: (newTemplate) =>
    set((state) => ({
      content: state.content ? `${state.content}\n${newTemplate}` : newTemplate, // 기존 content에 새로운 템플릿 추가
    })),
}));

export default useDiaryContentStore;
