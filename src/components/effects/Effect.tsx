import { ECardAbilities, EForces, EType } from "@/common/types";
import { FogPixi } from "@/components/effects/FogPixi";
import { FrostPixi } from "@/components/effects/FrostPixi";
import { RainPixi } from "@/components/effects/RainPixi";
import { TransitionOverlay } from "@/components/effects/TransitionOverlay";
import { useGameStore } from "@/store/game";
import { FC, useMemo } from "react";

interface IEffectProps {
  position: EForces;
}

const abilityToEffectMap = {
  [ECardAbilities.IMPENETRABLE_FOG]: <FogPixi />,
  [ECardAbilities.BITING_FROST]: <FrostPixi />,
  [ECardAbilities.TORRENTIAL_RAIN]: <RainPixi />,
} as const;

export const Effect: FC<IEffectProps> = ({ position }) => {
  const game = useGameStore().game;

  const ability = useMemo(() => {
    return game?.effects.find(
      (e) => e.row === position && e.type === EType.WEATHER
    )?.ability;
  }, [game, position]);

  return (
    <>
      {Object.entries(abilityToEffectMap).map(([key, element]) => (
        <TransitionOverlay key={key} open={ability === key}>
          {element}
        </TransitionOverlay>
      ))}
    </>
  );
};
