import {
  EOperationNotificationType,
  EStatusNotification,
} from "@/common/types";
import { useNotificationStore } from "@/store/notifications";
import { useUserStore } from "@/store/user";
import { toast } from "@/utils/toast";
import { TFunction } from "i18next";

const wsUrl = import.meta.env.VITE_WS_URL;
let socket: WebSocket | null = null;

export const initializeNotificationManager = (
  nickname: string,
  t: TFunction
) => {
  if (!nickname) {
    console.error(
      "WebSocket nickname is missing. Cannot initialize WebSocket."
    );
    return;
  }

  if (
    socket &&
    (socket.readyState === WebSocket.OPEN ||
      socket.readyState === WebSocket.CONNECTING)
  ) {
    return;
  }

  if (!wsUrl) {
    console.error("WebSocket URL is missing. Cannot initialize WebSocket.");
    return;
  }

  socket = new WebSocket(`${wsUrl}/notifications?nickname=${nickname}`);

  socket.onopen = () => {
    console.log("WebSocket connection established");
  };

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);

    switch (message.type) {
      case EOperationNotificationType.STORED_DUELS: {
        useNotificationStore.setState((state) => ({
          ...state,
          notifications: message.data,
        }));
        break;
      }
      case EOperationNotificationType.REFILL_BALANCE: {
        useUserStore.setState((state) => ({
          ...state,
          user: {
            ...state.user!,
            coins: state.user?.coins + message.data.balance,
          },
        }));
        toast.success(
          t(`message.balanceRefilled`, { balance: message.data.balance })
        );
        break;
      }
      case EOperationNotificationType.NEW_DUEL: {
        useNotificationStore.setState((state) => ({
          ...state,
          notifications: [message.data, ...state.notifications],
        }));
        if (message.data.sender !== useUserStore.getState().user?.nickname) {
          toast.success(
            t(`message.newDuel`, { sender: message?.data?.sender })
          );
        } else {
          toast.success(
            t(`message.challenge`, { user: message?.data?.receiver })
          );
        }
        break;
      }
      case EOperationNotificationType.RESPOND_DUEL: {
        useNotificationStore.setState((state) => ({
          ...state,
          notifications: state.notifications.map((n) =>
            n._id === message.data._id
              ? { ...n, status: message.data.status }
              : n
          ),
        }));
        if (message.data.sender === useUserStore.getState().user?.nickname) {
          if (message.data.status === EStatusNotification.ACCEPTED) {
            toast.success(
              t(`message.confirmDuel`, {
                user: message.data.sender,
              })
            );
          }
          if (message.data.status === EStatusNotification.DECLINED) {
            toast.error(
              t(`message.declinedDuel`, {
                user: message.data.sender,
              })
            );
          }
        }
        break;
      }
    }
  };

  socket.onerror = (error) => {
    console.error(`WebSocket error: ${error}`);
  };

  socket.onclose = (event) => {
    if (event.code !== 1000) {
      setTimeout(() => {
        if (nickname) {
          initializeNotificationManager(nickname, t);
        }
      }, 3000);
    }
  };
};

export const sendMessage = (message: string) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  } else {
    console.error("WebSocket is not connected");
  }
};

export const closeNotificationManager = () => {
  if (socket) {
    if (
      socket.readyState === WebSocket.OPEN ||
      socket.readyState === WebSocket.CONNECTING
    ) {
      socket.close(1000, "Client closed connection");
      console.log("WebSocket connection closed");
    }
    socket = null;
  }
};
