import { create } from 'zustand';

const useFontStore = create((set) => ({
  font: 'Inter',
  setFont: (newFont) => {
    set({ font: newFont });
  },
}));
export default useFontStore;
