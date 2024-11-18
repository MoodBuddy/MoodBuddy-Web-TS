import { create } from "zustand";
type WeatherStore = {
  selectedOption: string;
  setSelectedOption: (newOption: string) => void;
};
const useweatherStore = create<WeatherStore>((set) => ({
  selectedOption: "CLEAR",
  setSelectedOption: (newOption) => set({ selectedOption: newOption }),
}));

export default useweatherStore;
