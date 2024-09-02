import { create } from 'zustand';

const useDiaryImgFileStore = create((set) => ({
  imageFiles: [], // 파일 배열로 상태를 초기화
  setImageFiles: (newImgFiles) => {
    set(() => {
      const updatedImgFiles = [...newImgFiles];
      console.log('update Diary Images:', updatedImgFiles);
      return { imageFiles: updatedImgFiles };
    });
  },
  addImageFile: (file) => {
    set((state) => {
      const updatedImgFiles = [...state.imageFiles, file]; // 기존 배열에 파일을 추가
      console.log('add Diary Image:', updatedImgFiles);
      return { imageFiles: updatedImgFiles };
    });
  },
  removeImageFile: (index) =>
    set((state) => ({
      imageFiles: state.imageFiles.filter((_, i) => i !== index), // 해당 인덱스의 파일을 제거
    })),
}));

export default useDiaryImgFileStore;
