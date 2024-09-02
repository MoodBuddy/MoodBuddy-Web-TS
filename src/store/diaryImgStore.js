import { create } from 'zustand';

const useDiaryImgStore = create((set) => ({
  diaryImg: [],
  setDiaryImg: (newDiaryImg) => {
    set(() => {
      const updatedDiaryImg = [...newDiaryImg];
      console.log('update Diary Images:', updatedDiaryImg);
      return { diaryImg: updatedDiaryImg };
    });
  },
}));

export default useDiaryImgStore;
