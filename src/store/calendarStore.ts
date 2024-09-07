import { create } from "zustand";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { postCalendar } from "@apis/main";
import { BasicDiary } from "@type/Diary";
import { DayInfo } from "@type/Calendar";

interface CalendarState {
  currentDate: Date; 
  selectedDate: string; 
  diaryList: BasicDiary[]; 
  setDate: (newDate: Date) => void; 
  selectDate: (date: string) => void;
  fetchDiaryList: () => Promise<void>; 
  handlePrevMonth: () => Promise<void>; 
  handleNextMonth: () => Promise<void>; 
  daysInMonth: (currentDate: Date) => DayInfo[]; 
}

const useCalendarStore = create<CalendarState>((set) => ({
  currentDate: new Date(),
  selectedDate: format(new Date(), "yyyy-MM-dd"),
  diaryList: [], // 일기 목록

  setDate: (newDate) => set({ currentDate: newDate }),
  selectDate: (date) => set({ selectedDate: date }),

  fetchDiaryList: async () => {
    const currentDate = useCalendarStore.getState().currentDate;
    const month = format(currentDate, "yyyy-MM");
    try {
      const data = await postCalendar({ calendarMonth: month });
      const diaryListWithoutTime = data.diaryResCalendarMonthDTOList.map(
        (diary: BasicDiary) => ({
          ...diary,
          diaryDate: format(new Date(diary.diaryDate), "yyyy-MM-dd"),
        })
      );

      set({ diaryList: diaryListWithoutTime });
    } catch (error) {
      console.error("Failed to fetch diary list:", (error as Error).message);
    }
  },

  handlePrevMonth: async () => {
    set((state) => {
      const newDate = subMonths(state.currentDate, 1);
      return { currentDate: newDate };
    });
    await useCalendarStore.getState().fetchDiaryList();
  },

  handleNextMonth: async () => {
    set((state) => {
      const newDate = addMonths(state.currentDate, 1);
      return { currentDate: newDate };
    });
    await useCalendarStore.getState().fetchDiaryList();
  },

  daysInMonth: (currentDate) => {
    const startCurrentMonth = startOfMonth(currentDate);
    const endCurrentMonth = endOfMonth(currentDate);
    const startOfFirstWeek = startOfWeek(startCurrentMonth, {
      weekStartsOn: 0,
    });
    const endOfLastWeek = endOfWeek(endCurrentMonth, { weekStartsOn: 0 });

    const days = eachDayOfInterval({
      start: startOfFirstWeek,
      end: endOfLastWeek,
    });

    return days.map((day) => ({
      date: format(day, "yyyy-MM-dd"),
      month: format(day, "MM"),
      day: format(day, "dd"),
      dayIndexOfWeek: getDay(day),
    }));
  },
}));

export default useCalendarStore;
