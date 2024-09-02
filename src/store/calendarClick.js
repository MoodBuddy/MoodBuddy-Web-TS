import { create } from 'zustand';

const useCalendarClickStore = create((set) => ({
  calendarClick: 'false',
  setCalendarClick: (newState) => set({ calendarClick: newState }),
}));

export default useCalendarClickStore;
