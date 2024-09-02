import { create } from 'zustand';

const useTextSizeStore = create((set) => ({
  textSize: '24px',
  setTextSize: (newSize) => {
    set({ textSize: newSize });
  },
}));
export default useTextSizeStore;
