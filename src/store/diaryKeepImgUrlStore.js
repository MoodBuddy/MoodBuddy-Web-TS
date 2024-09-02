import { create } from 'zustand';

const useDiaryKeepImgUrlStore = create((set) => ({
  diaryKeepImg: [],
  setDiaryKeepImg: (newDiaryKeepImg) => {
    set(() => {
      const updatedDiaryKeepImg = [...newDiaryKeepImg];
      console.log('update Diary Keep Images Url:', updatedDiaryKeepImg);
      return { diaryKeepImg: updatedDiaryKeepImg };
    });
  },
}));

export default useDiaryKeepImgUrlStore;
