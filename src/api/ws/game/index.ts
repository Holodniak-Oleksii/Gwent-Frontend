import { switcherMessage } from "@/api/ws/game/utils";

export class GameManager {
  private gamSocket: WebSocket | null = null;
  private wsUrl: string;
  private nickname: string;
  private id: string;

  constructor(nickname: string, id: string) {
    if (!nickname) {
      throw new Error(
        "WebSocket nickname is required to initialize GameManager."
      );
    }
    if (!id) {
      throw new Error("WebSocket id is required to initialize GameManager.");
    }

    this.wsUrl = import.meta.env.VITE_WS_URL;
    if (!this.wsUrl) {
      throw new Error(
        "WebSocket URL is missing. Cannot initialize GameManager."
      );
    }

    this.nickname = nickname;
    this.id = id;

    this.connect();
  }

  public sendMessage(message: string): void {
    if (this.gamSocket && this.gamSocket.readyState === WebSocket.OPEN) {
      this.gamSocket.send(message);
    } else {
      console.error("WebSocket is not connected");
    }
  }

  private connect(): void {
    this.gamSocket = new WebSocket(
      `${this.wsUrl}/game?nickname=${this.nickname}&id=${this.id}`
    );

    this.gamSocket.onopen = this.handleOpen.bind(this);
    this.gamSocket.onmessage = this.handleMessage.bind(this);
    this.gamSocket.onerror = this.handleError.bind(this);
    this.gamSocket.onclose = this.handleClose.bind(this);
  }

  private handleOpen(): void {
    console.log("WebSocket connection established");
  }

  private handleMessage(event: MessageEvent): void {
    try {
      switcherMessage(JSON.parse(event.data));
    } catch (error) {
      console.error("Error parsing WebSocket message:", error);
    }
  }
  private handleError(error: Event): void {
    console.error(`WebSocket error: ${error}`);
  }

  private handleClose(event: CloseEvent): void {
    if (event.code !== 1000) {
      console.warn("WebSocket disconnected unexpectedly. Reconnecting...");
      // setTimeout(() => this.connect(), 3000);
    }
  }
}
