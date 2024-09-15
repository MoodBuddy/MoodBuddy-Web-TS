import { create } from "zustand";
type Draft = {
  diaryId: number;
  kakaoId: number;
  diaryDate: string;
  diaryStatus: string;
};
type DraftListStore = {
  draftList: Draft[];
  setDraftList: (newDraftList: Draft[]) => void;
};
const useDraftListStore = create<DraftListStore>((set) => ({
  draftList: [],
  setDraftList: (newDraftList) => {
    set({ draftList: newDraftList });
  },
}));

export default useDraftListStore;
