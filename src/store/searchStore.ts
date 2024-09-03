import { create } from 'zustand';

const useSearchStore = create((set) => ({
  searchParams: {
    keyword: '',
    year: null,
    month: null,
    topic: null,
    diaryEmotion: null,
  },
  setSearchParams: (params) => set({ searchParams: params }),
}));

export default useSearchStore;
