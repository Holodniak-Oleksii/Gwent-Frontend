import { EGameMessageType, EGameState } from "@/common/types";
import { useGameStore } from "@/store/game";

interface IMessage {
  type: EGameMessageType;
  data?: object | null;
}

export const switcherMessage = ({ type, data }: IMessage) => {
  switch (type) {
    case EGameMessageType.WAIT_PARTNER: {
      useGameStore.setState((state) => ({
        ...state,
        state: EGameState.WAITING,
      }));
      break;
    }
    case EGameMessageType.GAME_START: {
      useGameStore.setState((state) => ({
        ...state,
        state: EGameState.PLAYING,
      }));
      break;
    }
    case EGameMessageType.PARTNER_LEFT: {
      useGameStore.setState((state) => ({
        ...state,
        state: EGameState.PARTNER_LEFT,
      }));
      break;
    }
  }
};
