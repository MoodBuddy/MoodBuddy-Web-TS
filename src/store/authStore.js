import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: !!sessionStorage.getItem('session'), // 초기 상태를 sessionStorage에 따라 설정
  setAuthenticated: (authStatus) => set({ isAuthenticated: authStatus }),
}));

export default useAuthStore;