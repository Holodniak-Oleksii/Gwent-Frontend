import { EGameState } from "@/common/types";
import { Left } from "./states/Left";
import { Loading } from "./states/Loading";
import { Play } from "./states/Play";
import { Wait } from "./states/Wait";

export const ArenaScreen = {
  [EGameState.LOADING]: Loading,
  [EGameState.WAITING]: Wait,
  [EGameState.PARTNER_LEFT]: Left,
  [EGameState.PLAYING]: Play,
};
