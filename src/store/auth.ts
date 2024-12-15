import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface IAuthState {
  refreshToken: null | string;
  accessToken: null | string;
  setCredentials: (refreshToken: string, accessToken: string) => void;
  removeCredentials: () => void;
}

const authStoreSlice: StateCreator<IAuthState> = (set) => ({
  accessToken: null,
  refreshToken: null,
  setCredentials: (refreshToken, accessToken) =>
    set({ accessToken, refreshToken }),
  removeCredentials: () => set({ accessToken: null, refreshToken: null }),
});

const persistedUserStore = persist<IAuthState>(authStoreSlice, {
  name: import.meta.env.VITE_STORE_NAME,
});

export const useAuthStore = create(persistedUserStore);
