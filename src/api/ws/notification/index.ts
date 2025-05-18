import { EOperationNotificationType } from "@/common/types";
import { useNotificationStore } from "@/store/notifications";

const wsUrl = import.meta.env.VITE_WS_URL;
let socket: WebSocket | null = null;

export const initializeNotificationManager = (nickname: string) => {
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
      case EOperationNotificationType.NEW_DUEL: {
        useNotificationStore.setState((state) => ({
          ...state,
          notifications: [message.data, ...state.notifications],
        }));
        break;
      }
      case EOperationNotificationType.RESPOND_DUEL: {
        useNotificationStore.setState((state) => ({
          ...state,
          notifications: state.notifications.map((n) =>
            n.id === message.data.id ? { ...n, status: message.data.status } : n
          ),
        }));
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
