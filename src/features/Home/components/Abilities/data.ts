import imageBgBerserk from "@/assets/images/abilities/bgs/berserk.webp";
import imageBgBitingFrost from "@/assets/images/abilities/bgs/biting_frost.webp";
import imageBgClearWeather from "@/assets/images/abilities/bgs/clear_weather.webp";
import imageBgCommanderOfTheRedRiders from "@/assets/images/abilities/bgs/commander_of_the_red_riders.webp";
import imageBgDecoy from "@/assets/images/abilities/bgs/decoy.webp";
import imageBgHero from "@/assets/images/abilities/bgs/hero.webp";
import imageBgHisImperialMajesty from "@/assets/images/abilities/bgs/his_imperial_majesty.webp";
import imageBgHorn from "@/assets/images/abilities/bgs/horn.webp";
import imageBgImpenetrableFog from "@/assets/images/abilities/bgs/impenetrable_fog.webp";
import imageBgKingOfTemeria from "@/assets/images/abilities/bgs/king_of_temeria.webp";
import imageBgMardroeme from "@/assets/images/abilities/bgs/mardroeme.webp";
import imageBgMedic from "@/assets/images/abilities/bgs/medic.webp";
import imageBgMoraleBoost from "@/assets/images/abilities/bgs/morale_boost.webp";
import imageBgMuster from "@/assets/images/abilities/bgs/muster.webp";
import imageBgPurebloodElf from "@/assets/images/abilities/bgs/pureblood_elf.webp";
import imageBgScorch from "@/assets/images/abilities/bgs/scorch.webp";
import imageBgSkelligeStorm from "@/assets/images/abilities/bgs/skellige_storm.webp";
import imageBgSpy from "@/assets/images/abilities/bgs/spy.webp";
import imageBgTightBond from "@/assets/images/abilities/bgs/tight_bond.webp";
import imageBgTorrentialRain from "@/assets/images/abilities/bgs/torrential_rain.webp";

import { ECardAbilities } from "@/common/types";

export interface ISliderCard {
  title: string;
  description: string;
  bgImage: string;
  icon: string;
  id: number;
}

export const dataList: ISliderCard[] = [
  {
    title: ECardAbilities.HERO,
    description: "Immune to special cards and abilities.",
    bgImage: imageBgHero,
    icon: "path_to_hero_icon",
    id: 0,
  },
  {
    title: ECardAbilities.HORN,
    description: "Doubles the strength of all units in a row.",
    bgImage: imageBgHorn,
    icon: "path_to_horn_icon",
    id: 1,
  },
  {
    id: 2,
    title: ECardAbilities.SPY,
    description:
      "Placed on opponent's battlefield and allows drawing two cards.",
    bgImage: imageBgSpy,
    icon: "path_to_spy_icon",
  },
  {
    id: 3,
    title: ECardAbilities.MEDIC,
    description: "Revives one unit card from the graveyard.",
    bgImage: imageBgMedic,
    icon: "path_to_medic_icon",
  },
  {
    id: 4,
    title: ECardAbilities.SCORCH,
    description: "Destroys the strongest cards on the battlefield.",
    bgImage: imageBgScorch,
    icon: "path_to_scorch_icon",
  },
  {
    id: 5,
    title: ECardAbilities.MUSTER,
    description: "Summons all cards with the same name from the deck.",
    bgImage: imageBgMuster,
    icon: "path_to_muster_icon",
  },
  {
    id: 6,
    title: ECardAbilities.MARDROEME,
    description: "Transforms Berserker units into stronger versions.",
    bgImage: imageBgMardroeme,
    icon: "path_to_mardroeme_icon",
  },
  {
    id: 7,
    title: ECardAbilities.DECOY,
    description: "Allows swapping a unit for another from hand.",
    bgImage: imageBgDecoy,
    icon: "path_to_decoy_icon",
  },
  {
    id: 8,
    title: ECardAbilities.BERSERK,
    description: "Transforms into a stronger unit when Mardroeme is played.",
    bgImage: imageBgBerserk,
    icon: "path_to_berserk_icon",
  },
  {
    id: 9,
    title: ECardAbilities.TIGHT_BOND,
    description: "Doubles the strength of units with the same name.",
    bgImage: imageBgTightBond,
    icon: "path_to_tight_bond_icon",
  },
  {
    id: 10,
    title: ECardAbilities.MORALE_BOOST,
    description: "Adds +1 strength to all units in the row.",
    bgImage: imageBgMoraleBoost,
    icon: "path_to_morale_boost_icon",
  },
  {
    id: 11,
    title: ECardAbilities.BITING_FROST,
    description: "Reduces the strength of all melee units to 1.",
    bgImage: imageBgBitingFrost,
    icon: "path_to_biting_frost_icon",
  },
  {
    id: 12,
    title: ECardAbilities.IMPENETRABLE_FOG,
    description: "Reduces the strength of all ranged units to 1.",
    bgImage: imageBgImpenetrableFog,
    icon: "path_to_impenetrable_fog_icon",
  },
  {
    id: 13,
    title: ECardAbilities.TORRENTIAL_RAIN,
    description: "Reduces the strength of all siege units to 1.",
    bgImage: imageBgTorrentialRain,
    icon: "path_to_torrential_rain_icon",
  },
  {
    id: 14,
    title: ECardAbilities.SKELLIGE_STORM,
    description: "Reduces the strength of ranged and siege units to 1.",
    bgImage: imageBgSkelligeStorm,
    icon: "path_to_skellige_storm_icon",
  },
  {
    id: 15,
    title: ECardAbilities.CLEAR_WEATHER,
    description: "Removes all weather effects from the board.",
    bgImage: imageBgClearWeather,
    icon: "path_to_clear_weather_icon",
  },
  {
    id: 16,
    title: ECardAbilities.KING_OF_TEMERIA,
    description: "Draws an extra card at the start of the battle.",
    bgImage: imageBgKingOfTemeria,
    icon: "path_to_king_of_temeria_icon",
  },
  {
    id: 17,
    title: ECardAbilities.HIS_IMPERIAL_MAJESTY,
    description: "Can look at the opponent's hand once per game.",
    bgImage: imageBgHisImperialMajesty,
    icon: "path_to_his_imperial_majesty_icon",
  },
  {
    id: 18,
    title: ECardAbilities.PUREBLOOD_ELF,
    description: "Allows drawing an extra card when winning a round.",
    bgImage: imageBgPurebloodElf,
    icon: "path_to_pureblood_elf_icon",
  },
  {
    id: 19,
    title: ECardAbilities.COMMANDER_OF_THE_RED_RIDERS,
    description: "Cancels the opponent's leader ability.",
    bgImage: imageBgCommanderOfTheRedRiders,
    icon: "path_to_commander_of_the_red_riders_icon",
  },
];
