import { EOperationNotificationType } from "@/common/types";
import { useNotificationStore } from "@/store/notifications";

const wsUrl = import.meta.env.VITE_WS_URL;
let socket: WebSocket | null = null;

export const initializeNotificationManager = (nickname: string) => {
  console.log("nickname :", nickname);
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

  socket = new WebSocket(`${wsUrl}?nickname=${nickname}`);

  socket.onopen = () => {
    console.log("WebSocket connection established");
  };

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    console.log("message :", message);
    if (message.type === EOperationNotificationType.STORED_DUELS) {
      useNotificationStore.setState((state) => ({
        ...state,
        notifications: [...message.data, ...state.notifications],
      }));
    }
    if (message.type === EOperationNotificationType.NEW_DUEL) {
      useNotificationStore.setState((state) => ({
        ...state,
        notifications: [message.data, ...state.notifications],
      }));
    }
  };

  socket.onerror = (error) => {
    console.error(`WebSocket error: ${error}`);
  };

  socket.onclose = (event) => {
    if (event.code !== 1000) {
      setTimeout(() => {
        if (nickname) {
          initializeNotificationManager(nickname);
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
