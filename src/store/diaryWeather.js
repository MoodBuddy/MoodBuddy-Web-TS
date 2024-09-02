import { create } from 'zustand';

const useDiaryWeatherStore = create((set) => ({
  diaryWeather: 'CLEAR',
  setDiaryWeather: (newDiaryWeather) => {
    set({ diaryWeather: newDiaryWeather });
  },
}));

export default useDiaryWeatherStore;
