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
    description: "abilities.hero",
    bgImage: imageBgHero,
    icon: "path_to_hero_icon",
    id: 0,
  },
  {
    title: ECardAbilities.HORN,
    description: "abilities.horn",
    bgImage: imageBgHorn,
    icon: "path_to_horn_icon",
    id: 1,
  },
  {
    id: 2,
    title: ECardAbilities.SPY,
    description: "abilities.spy",
    bgImage: imageBgSpy,
    icon: "path_to_spy_icon",
  },
  {
    id: 3,
    title: ECardAbilities.MEDIC,
    description: "abilities.medic",
    bgImage: imageBgMedic,
    icon: "path_to_medic_icon",
  },
  {
    id: 4,
    title: ECardAbilities.SCORCH,
    description: "abilities.scorch",
    bgImage: imageBgScorch,
    icon: "path_to_scorch_icon",
  },
  {
    id: 5,
    title: ECardAbilities.MUSTER,
    description: "abilities.muster",
    bgImage: imageBgMuster,
    icon: "path_to_muster_icon",
  },
  {
    id: 6,
    title: ECardAbilities.MARDROEME,
    description: "abilities.mardroeme",
    bgImage: imageBgMardroeme,
    icon: "path_to_mardroeme_icon",
  },
  {
    id: 7,
    title: ECardAbilities.DECOY,
    description: "abilities.decoy",
    bgImage: imageBgDecoy,
    icon: "path_to_decoy_icon",
  },
  {
    id: 8,
    title: ECardAbilities.BERSERK,
    description: "abilities.berserk",
    bgImage: imageBgBerserk,
    icon: "path_to_berserk_icon",
  },
  {
    id: 9,
    title: ECardAbilities.TIGHT_BOND,
    description: "abilities.tightBond",
    bgImage: imageBgTightBond,
    icon: "path_to_tight_bond_icon",
  },
  {
    id: 10,
    title: ECardAbilities.MORALE_BOOST,
    description: "abilities.moraleBoost",
    bgImage: imageBgMoraleBoost,
    icon: "path_to_morale_boost_icon",
  },
  {
    id: 11,
    title: ECardAbilities.BITING_FROST,
    description: "abilities.bitingFrost",
    bgImage: imageBgBitingFrost,
    icon: "path_to_biting_frost_icon",
  },
  {
    id: 12,
    title: ECardAbilities.IMPENETRABLE_FOG,
    description: "abilities.impenetrableFog",
    bgImage: imageBgImpenetrableFog,
    icon: "path_to_impenetrable_fog_icon",
  },
  {
    id: 13,
    title: ECardAbilities.TORRENTIAL_RAIN,
    description: "abilities.torrentialRain",
    bgImage: imageBgTorrentialRain,
    icon: "path_to_torrential_rain_icon",
  },
  {
    id: 14,
    title: ECardAbilities.SKELLIGE_STORM,
    description: "abilities.skelligeStorm",
    bgImage: imageBgSkelligeStorm,
    icon: "path_to_skellige_storm_icon",
  },
  {
    id: 15,
    title: ECardAbilities.CLEAR_WEATHER,
    description: "abilities.clearWeather",
    bgImage: imageBgClearWeather,
    icon: "path_to_clear_weather_icon",
  },
  {
    id: 16,
    title: ECardAbilities.KING_OF_TEMERIA,
    description: "abilities.kingOfTemeria",
    bgImage: imageBgKingOfTemeria,
    icon: "path_to_king_of_temeria_icon",
  },
  {
    id: 17,
    title: ECardAbilities.HIS_IMPERIAL_MAJESTY,
    description: "abilities.hisImperialMajesty",
    bgImage: imageBgHisImperialMajesty,
    icon: "path_to_his_imperial_majesty_icon",
  },
  {
    id: 18,
    title: ECardAbilities.PUREBLOOD_ELF,
    description: "abilities.purebloodElf",
    bgImage: imageBgPurebloodElf,
    icon: "path_to_pureblood_elf_icon",
  },
  {
    id: 19,
    title: ECardAbilities.COMMANDER_OF_THE_RED_RIDERS,
    description: "abilities.commanderOfTheRedRiders",
    bgImage: imageBgCommanderOfTheRedRiders,
    icon: "path_to_commander_of_the_red_riders_icon",
  },
];
