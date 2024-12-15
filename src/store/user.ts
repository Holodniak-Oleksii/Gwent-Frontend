import { IUserModel } from "@/common/types";
import { create } from "zustand";

interface IUserStore {
  user: IUserModel | null;
  isAuth: boolean;
  setUser: (user: IUserModel) => void;
  logout: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  isAuth: false,
  setUser: (user) => set({ user, isAuth: true }),
  logout: () => set({ user: null, isAuth: false }),
}));
