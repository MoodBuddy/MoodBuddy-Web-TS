import { SearchParams } from "@type/Search";
import { create } from "zustand";

interface SearchStore {
  searchParams: SearchParams;
  setSearchParams: (params: SearchParams) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  searchParams: {
    keyword: "",
    year: null,
    month: null,
    topic: null,
    diaryEmotion: null,
  },
  setSearchParams: (params) => set({ searchParams: params }),
}));

export default useSearchStore;
