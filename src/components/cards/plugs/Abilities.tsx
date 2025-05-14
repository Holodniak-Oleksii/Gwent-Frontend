import imageBerserker from "@/assets/images/abilities/icons/card_ability_berserker.webp";
import imageBond from "@/assets/images/abilities/icons/card_ability_bond.webp";
import imageClear from "@/assets/images/abilities/icons/card_ability_clear.webp";
import imageDecoy from "@/assets/images/abilities/icons/card_ability_decoy.webp";
import imageFog from "@/assets/images/abilities/icons/card_ability_fog.webp";
import imageFrost from "@/assets/images/abilities/icons/card_ability_frost.webp";
import imageHorn from "@/assets/images/abilities/icons/card_ability_horn.webp";
import imageMardroeme from "@/assets/images/abilities/icons/card_ability_mardroeme.webp";
import imageMedic from "@/assets/images/abilities/icons/card_ability_medic.webp";
import imageMorale from "@/assets/images/abilities/icons/card_ability_morale.webp";
import imageMuster from "@/assets/images/abilities/icons/card_ability_muster.webp";
import imageRain from "@/assets/images/abilities/icons/card_ability_rain.webp";
import imageScorch from "@/assets/images/abilities/icons/card_ability_scorch.webp";
import imageSpy from "@/assets/images/abilities/icons/card_ability_spy.webp";
import imageStorm from "@/assets/images/abilities/icons/card_ability_storm.webp";

import { ECardAbilities } from "@/common/types";
import { StyledCircle } from "@/components/cards/plugs/styles";
import { FC } from "react";

interface IAbilitiesProps {
  ability: ECardAbilities;
}

const data: Record<ECardAbilities, string> = {
  [ECardAbilities.BERSERK]: imageBerserker,
  [ECardAbilities.HORN]: imageHorn,
  [ECardAbilities.SPY]: imageSpy,
  [ECardAbilities.MEDIC]: imageMedic,
  [ECardAbilities.SCORCH]: imageScorch,
  [ECardAbilities.MUSTER]: imageMuster,
  [ECardAbilities.MARDROEME]: imageMardroeme,
  [ECardAbilities.DECOY]: imageDecoy,
  [ECardAbilities.TIGHT_BOND]: imageBond,
  [ECardAbilities.MORALE_BOOST]: imageMorale,
  [ECardAbilities.BITING_FROST]: imageFrost,
  [ECardAbilities.IMPENETRABLE_FOG]: imageFog,
  [ECardAbilities.TORRENTIAL_RAIN]: imageRain,
  [ECardAbilities.SKELLIGE_STORM]: imageStorm,
  [ECardAbilities.CLEAR_WEATHER]: imageClear,
  // Optional: fallback for abilities with no corresponding image
  [ECardAbilities.HERO]: "",
  [ECardAbilities.KING_OF_TEMERIA]: "",
  [ECardAbilities.HIS_IMPERIAL_MAJESTY]: "",
  [ECardAbilities.PUREBLOOD_ELF]: "",
  [ECardAbilities.COMMANDER_OF_THE_RED_RIDERS]: "",
};

export const Abilities: FC<IAbilitiesProps> = ({ ability }) => {
  if (!data[ability]) {
    return null;
  }

  return (
    <StyledCircle>
      <img src={data[ability]} alt={ability} />
    </StyledCircle>
  );
};
