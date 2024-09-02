import { create } from 'zustand';

const useShowAnswerStore = create((set) => ({
  showAnswer: false,
  setShowAnswer: (show) => set({ showAnswer: show }),
}));

export default useShowAnswerStore;
