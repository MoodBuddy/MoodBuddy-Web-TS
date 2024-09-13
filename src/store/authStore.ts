import { getAccessToken } from "@apis/utils";
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (authStatus: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!getAccessToken(),
  setAuthenticated: (authStatus: boolean) =>
    set({ isAuthenticated: authStatus }),
}));

export default useAuthStore;
