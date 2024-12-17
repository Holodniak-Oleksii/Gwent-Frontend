import { INotificationModel } from "@/common/types";
import { create } from "zustand";

interface INotificationsStore {
  notifications: INotificationModel[];
  addNotification: (noti: INotificationModel) => void;
  removeNotification: (id: INotificationModel["id"]) => void;
  setStatus: (
    id: INotificationModel["id"],
    status: INotificationModel["status"]
  ) => void;
}

export const useNotificationStore = create<INotificationsStore>((set) => ({
  notifications: [],
  addNotification: (noti) =>
    set((state) => ({
      ...state,
      notifications: [noti, ...state.notifications],
    })),
  removeNotification: (id) =>
    set((state) => ({
      ...state,
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
  setStatus: (id, status) =>
    set((state) => ({
      ...state,
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, status } : n
      ),
    })),
}));
