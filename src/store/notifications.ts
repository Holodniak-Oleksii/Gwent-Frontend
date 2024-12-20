import { INotificationModel } from "@/common/types";
import { create } from "zustand";

interface INotificationsStore {
  notifications: INotificationModel[];
  removeNotification: (id: INotificationModel["id"]) => void;
}

export const useNotificationStore = create<INotificationsStore>((set) => ({
  notifications: [],
  removeNotification: (id) =>
    set((state) => ({
      ...state,
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
