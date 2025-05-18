import { EGameState } from "@/common/types";
import { Loader } from "@/components/shared/Loader";
import { End } from "./states/End";
import { Left } from "./states/Left";
import { Play } from "./states/Play";
import { Preparation } from "./states/Preparation";
import { Wait } from "./states/Wait";

export const ArenaScreen = {
  [EGameState.LOADING]: Loader,
  [EGameState.WAITING]: Wait,
  [EGameState.PARTNER_LEFT]: Left,
  [EGameState.PLAYING]: Play,
  [EGameState.PREPARATION]: Preparation,
  [EGameState.END]: End,
};
