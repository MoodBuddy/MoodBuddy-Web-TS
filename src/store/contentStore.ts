import { create } from 'zustand';

const useContentStore = create((set) => ({
  content: '',
  setContent: (newContent) => set({ content: newContent }),
  letterFormat: 1,
  setLetterFormat: (format) => set({ letterFormat: format }),
}));

export default useContentStore;
