import { EGameMessageType, EGameState, IGameModel } from "@/common/types";
import { useGameStore } from "@/store/game";

interface IMessage {
  type: EGameMessageType;
  data?: object | null;
}

export const switcherMessage = ({ type, data }: IMessage) => {
  console.log("type, data :", type, data);
  switch (type) {
    case EGameMessageType.WAIT_PARTNER: {
      useGameStore.setState((state) => ({
        ...state,
        state: EGameState.WAITING,
      }));
      break;
    }

    case EGameMessageType.PREPARATION_COMPLETED: {
      useGameStore.setState((state) => ({
        ...state,
        state: EGameState.WAITING,
      }));
      break;
    }

    case EGameMessageType.PREPARATION: {
      useGameStore.setState((state) => ({
        ...state,
        state: EGameState.PREPARATION,
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

    case EGameMessageType.GAME_END: {
      useGameStore.setState((state) => ({
        ...state,
        state: EGameState.END,
        game: { ...state.game, ...data } as IGameModel,
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
    case EGameMessageType.UPDATE: {
      useGameStore.setState((state) => ({
        ...state,
        game: { ...state.game, ...data } as IGameModel,
      }));
      break;
    }
  }
};
