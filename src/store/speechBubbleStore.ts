import { create } from 'zustand';

const useSpeechBubbleStore = create((set) => ({
  speechBubble: false,
  setSpeechBubble: (show) => set({ speechBubble: show }),
}));

export default useSpeechBubbleStore;
