import { IArenaScreen } from "@/features/Arena/states/types";
import { FC } from "react";

export const Play: FC<IArenaScreen> = ({ game }) => {
  console.log("game :", game);
  return <div>Play</div>;
};
