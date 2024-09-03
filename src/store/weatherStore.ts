import { create } from 'zustand';

const useweatherStore = create((set) => ({
  selectedOption: 'CLEAR',
  setSelectedOption: (newOption) => set({ selectedOption: newOption }),
}));

export default useweatherStore;
