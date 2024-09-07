import { create } from "zustand";

interface CalendarClickState {
  calendarClick: boolean;
  setCalendarClick: (newState: boolean) => void;
}

const useCalendarClickStore = create<CalendarClickState>((set) => ({
  calendarClick: false, 
  setCalendarClick: (newState) => set({ calendarClick: newState }),
}));

export default useCalendarClickStore;
